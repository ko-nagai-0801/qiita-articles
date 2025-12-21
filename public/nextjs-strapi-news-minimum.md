---
title: Next.js(App Router) + Strapi News の最小構成（一覧/詳細/プレビュー表示ページ）
tags:
  - Security
  - Next.js
  - strapi
  - HeadlessCMS
private: false
updated_at: ''
id: 1ddb676b864d4e1c14f9
organization_url_name: null
slide: false
ignorePublish: false
---

## 目的（A案）

`/api/preview/news`（Route Handler）が返す JSON を、**人間が見やすいページ**で表示します。

- `/preview/news/[slug]?key=...` でアクセス
- ページ側は **自サイトの Route Handler を叩く**（Strapi token は一切触らない）
- プレビューは `cache: "no-store"` でキャッシュ事故を避ける

---

## 追加するファイル

~~~txt
app/
  preview/
    news/
      [slug]/
        page.tsx
~~~

---

## app/preview/news/[slug]/page.tsx（見やすいプレビューページ）

~~~tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { key?: string };
};

type PreviewResponse = {
  data: Array<{
    id: number;
    attributes: {
      title: string;
      slug: string;
      body?: string;
      publishedAt: string | null;
    };
  }>;
};

export default async function PreviewNewsPage({ params, searchParams }: Props) {
  const slug = params.slug;
  const key = searchParams.key;

  // key が無い場合は 404（または案内表示でもOK）
  if (!key) notFound();

  // 自サイトの Route Handler を叩く（Strapi token には触れない）
  // Route Handler は server-only で STRAPI_API_TOKEN を使う設計
  const res = await fetch(
    `http://localhost:3000/api/preview/news?key=${encodeURIComponent(
      key
    )}&slug=${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // key不正(401) / slug不正(400) / その他(500) など
    return (
      <main style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
        <h1>Preview Error</h1>
        <p>Status: {res.status}</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{await res.text()}</pre>
      </main>
    );
  }

  const json = (await res.json()) as PreviewResponse;
  const item = json.data?.[0] ?? null;
  if (!item) {
    return (
      <main style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
        <h1>Not found</h1>
        <p>slug: {slug}</p>
        <p>下書き/公開を含めても見つかりません。</p>
      </main>
    );
  }

  const a = item.attributes;

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
      <header style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
        <h1 style={{ margin: 0 }}>Preview: {a.title}</h1>
        <span style={{ opacity: 0.7 }}>({a.slug})</span>
      </header>

      <p style={{ marginTop: 12, color: a.publishedAt ? "inherit" : "tomato" }}>
        {a.publishedAt
          ? `公開済み: ${new Date(a.publishedAt).toLocaleString()}`
          : "下書き（未公開）"}
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href={`/news/${a.slug}`}>公開ページへ（存在すれば）</Link>
        <span style={{ opacity: 0.7 }}>
          ※ 下書きの場合は 404 になるのが正常
        </span>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <h2>本文</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{a.body ?? "(no body)"}</pre>

      <hr style={{ margin: "24px 0" }} />

      <h2>生JSON（デバッグ用）</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(json, null, 2)}
      </pre>
    </main>
  );
}
~~~

---

## 重要：本番でのURL組み立て（localhost固定を避ける）

上のコードは「まず動かす」ために `http://localhost:3000` 固定にしています。  
本番では `req.url` から origin を作るか、Next.js の `headers()` を使って **現在のホスト**を組み立てるのが安全です。

置き換え例（推奨）：

~~~tsx
import { headers } from "next/headers";

const h = headers();
const host = h.get("x-forwarded-host") ?? h.get("host");
const proto = h.get("x-forwarded-proto") ?? "http";
const origin = host ? `${proto}://${host}` : "http://localhost:3000";

const res = await fetch(
  `${origin}/api/preview/news?key=${encodeURIComponent(key)}&slug=${encodeURIComponent(slug)}`,
  { cache: "no-store" }
);
~~~

---

## 叩き方（ローカル）

~~~txt
http://localhost:3000/preview/news/some-slug?key=YOUR_KEY
~~~

---

## 次の改善（任意だけど強い）

- `PREVIEW_KEY` を **署名付き（HMAC）** にして、`slug` まで含めた検証にする（URL改ざん耐性を上げる）
- **IP制限 / Basic認証** を併用して、プレビューURL自体への到達を絞る
- `/preview/news` 側に **slug入力フォーム** を作り、編集者がURLを組み立てずに運用できるようにする
