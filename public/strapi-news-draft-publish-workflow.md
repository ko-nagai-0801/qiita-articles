---
title: "StrapiでNewsを「下書き→公開」で回す（Draft & Publish + Next.jsプレビュー運用）"
tags:
  - Strapi
  - Next.js
  - HeadlessCMS
  - Security
private: false
updated_at: ""
id: null
organization_url_name: null
slide: false
ignorePublish: false
---

## この記事で書くこと

Strapi の **Draft & Publish（下書き → 公開）** を使って、News（お知らせ）を安全に運用するための実務メモです。  
Next.js（App Router）からの取得を前提に、以下をまとめます。

- Public API で「公開済みだけ」を返すための権限設計
- 下書きを確認するための「プレビュー URL（サーバー限定 + トークン）」
- 事故りやすいポイント（下書き漏れ / token 露出 / キャッシュ）

---

## まず結論（運用の型）

- **公開ページ**：トークン無し（Public role で `find / findOne` のみ許可）
- **下書きプレビュー**：Next.js の Route Handler 経由で **トークン付き取得**（ブラウザに token は出さない）
- プレビュー URL は `PREVIEW_KEY` 等で最低限保護する（実務は署名付きが理想）

---

## Strapi 側の設定

### 1) News（Collection Type）を作る

最低限の例：

- `title`（Text）
- `slug`（UID：title 由来）
- `body`（Rich text / Markdown）
- `publishedAt`（Draft & Publish の公開判定に使用：自動）

### 2) Draft & Publish を有効化

Content Type Builder で News の **Draft & Publish を ON**。

### 3) Roles/Permissions（Public）

Public role は最小限にする：

- News: `find`
- News: `findOne`
- `create / update / delete` はすべて OFF

> 公開済みだけ返ることを必ず実機で確認（設定やバージョン差で挙動が変わることがあるため）

---

## Next.js 側：公開ページ（トークン無し）

### 一覧（公開済み）

```ts
const base = process.env.STRAPI_URL!;
const res = await fetch(
  `${base}/api/news?sort=publishedAt:desc&pagination[pageSize]=10`,
  { next: { revalidate: 60 } }
);

if (!res.ok) throw new Error("Failed to fetch news");
const data = await res.json();
```

### 詳細（slug で 1件取得）

```ts
const base = process.env.STRAPI_URL!;
const slug = "some-slug";

const res = await fetch(
  `${base}/api/news?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=deep`,
  { next: { revalidate: 60 } }
);

if (!res.ok) throw new Error("Failed to fetch news detail");
const data = await res.json();

// Strapi の返却形式は { data: [...] } なので、1件取り出すなら例：
const item = data?.data?.[0] ?? null;
```

---

## 補足：populate の扱い（関連データが必要なとき）

一覧は `populate` 無しでも OK ですが、サムネやカテゴリなど関連を使う場合は **「必要な分だけ populate」** を基本にします。  
（`populate=*` は手軽ですが、レスポンスが重くなりやすいので “最終手段” 寄り）

### (1) 一覧：基本は populate なし（軽い）

一覧は「タイトル・日付・slug だけ」など、最小限で返すのが基本です。

```ts
`${base}/api/news?sort=publishedAt:desc&pagination[pageSize]=10`;
```

### (2) 一覧：関連が必要なら「必要な分だけ populate」（Aの方向）

例：サムネ（thumbnail）とカテゴリ（category）だけ欲しい場合  
（フィールド名はプロジェクトに合わせて変更）

```ts
`${base}/api/news?sort=publishedAt:desc&pagination[pageSize]=10&populate[thumbnail]=*&populate[category]=*`;
```

もしサムネの中でも「formats だけ」「url だけ」などに絞りたい場合は、Strapi の構成に合わせて `fields` を使ってさらに軽量化できます（任意）。

### (3) 詳細：deep が必要なときだけ使う（重いので限定）

本文でコンポーネントがネストしていたり、リレーションが多いなら `populate=deep` を検討します。  
ただし重くなりがちなので **詳細ページだけ**に限定するのが安全です。

```ts
`${base}/api/news?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=deep`;
```

---

## Next.js 側：下書きプレビュー（トークン付き / サーバー限定）

下書きを閲覧するには、Strapi にトークン付きで `publicationState=preview` を指定して取得します。  
ただし **ブラウザから直接 Strapi にトークン付きでアクセスしない**ために、Next.js の **Route Handler** を経由させます。

### 環境変数（サーバー側のみ）

- `STRAPI_URL`
- `STRAPI_API_TOKEN`（プレビュー用。Read-only 最小権限推奨）
- `PREVIEW_KEY`（プレビュー URL 保護用の簡易キー）

> `NEXT_PUBLIC_` が付く環境変数はクライアントに露出するので、トークン用途では使いません。

### Route Handler 例（News の下書きも取得）

```ts
// app/api/preview/news/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // 例：簡易プレビューキー（実務なら署名付きURLやIP制限などを検討）
  if (url.searchParams.get("key") !== process.env.PREVIEW_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const slug = url.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ message: "slug is required" }, { status: 400 });
  }

  const base = process.env.STRAPI_URL!;
  const token = process.env.STRAPI_API_TOKEN!;

  // ※クエリパラメータは Strapi のバージョン/設定で差が出る場合があります
  const api = `${base}/api/news?publicationState=preview&filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&populate=deep`;

  const res = await fetch(api, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Failed to fetch preview" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
```

### プレビュー URL の例（ローカル）

```txt
http://localhost:3000/api/preview/news?key=YOUR_KEY&slug=some-slug
```

---

## よくある事故と対策

### 1) 下書きが漏れる

- Public role に広く権限を付けすぎない
- Draft & Publish の挙動（公開済みのみ返る）を **必ず実機で確認**する

### 2) token が漏れる

- `NEXT_PUBLIC_` にトークンを入れない
- クライアントコンポーネントの `fetch` で Authorization を付けない  
  → **サーバー側（Route Handler / Server Component）だけ**で使用する

### 3) キャッシュ事故（公開直後に反映されない / プレビューがキャッシュされる）

- 公開データは `revalidate` を設計する（例：60 秒）
- プレビューは `cache: "no-store"` を徹底する

---

## まとめ

- Public は `find / findOne` のみ（必要最小限）
- 下書きプレビューは **Route Handler + token（サーバー限定）**
- “漏れたら困る” 前提で、権限と実装の置き場を決める
