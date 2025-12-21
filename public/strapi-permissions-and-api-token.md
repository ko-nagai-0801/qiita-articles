---
title: Strapiの権限設計（Roles/Permissions）とAPI Token運用（Next.js連携の実務メモ）
tags:
  - Security
  - Next.js
  - strapi
  - HeadlessCMS
private: true
updated_at: '2025-12-21T21:16:45+09:00'
id: d9977cecb58a1b3e9e95
organization_url_name: null
slide: false
ignorePublish: false
---

## この記事で書くこと
StrapiをHeadless CMSとして使うときに避けて通れない「公開範囲」と「認証情報（Token）」の設計をまとめます。  
Next.js（App Router）からの取得を前提に、**漏洩しにくい運用**と**実装の置き場**もセットで整理します。

---

## まず結論（設計方針）
- **公開していいデータは Public Role に寄せる**（LPの表示に必要な範囲だけ）
- **管理系や下書き、内部情報は Authenticated / Admin で閉じる**
- Next.jsからStrapiにアクセスするときは、基本は  
  - 公開データ：トークン無し  
  - 非公開データ：サーバー側（Server Component / Route Handler）でトークン付き  
  に分ける

---

## Draft & Publish（下書き→公開）を使う前提の注意点
- Publicに `find / findOne` を許可しても、**下書き（draft）が漏れない**ことを実機で確認する
- プレビュー（下書き表示）が必要な場合は、**サーバー側でトークン付き取得**＋**プレビューURLの保護**を行う
- “Publicに許可する範囲” と “プレビューでのみ見せる範囲” を分離する

---

## Strapiの権限モデルの基本
### Roles（ロール）
- **Public**：未ログインの利用者（Web閲覧者）
- **Authenticated**：ログイン済みユーザー（会員機能がある場合）
- **Admin**：管理画面ユーザー（編集者/管理者）

### Permissions（権限）
各API（Content Type）に対して、ロールごとに
- `find` / `findOne` / `create` / `update` / `delete`  
などの許可・不許可を設定する。

---

## 典型パターン（小規模サイト/LP想定）
### Publicに許可する例
- Home（Single Type）の `find`
- SiteSettings（Single Type）の `find`
- News（Collection Type）の `find` / `findOne`（公開済みのみ返す設計が望ましい）

### Publicで禁止する例
- `create` / `update` / `delete` 全般
- 下書き、内部メモ、問い合わせ管理など

---

## API Tokenの種類と使い分け（Strapi）
（※Strapiのバージョンにより名称/UIが違う場合あり）

- **Admin Token**：管理用（基本はCIや管理用途。フロントから使わない）
- **API Token**：サーバー間通信向け（Next.jsのサーバー側で使う）
- **User JWT**：ログインしたユーザーに発行される認証（会員機能がある場合）

---

## Next.js側：Tokenをどこで使うか
### 原則：ブラウザにトークンを出さない
- `NEXT_PUBLIC_` が付く環境変数はクライアントに露出するのでNG
- Server Component / Route Handler / Server Actions など**サーバー側**でのみ使う

### 環境変数例
- `STRAPI_URL`
- `STRAPI_API_TOKEN`（必要なら）
- `PREVIEW_KEY`（プレビューURL保護に使う簡易キー）

---

## 実装例（Next.js App Router）

### 公開データ（トークン無しで取得）
例：Home（Single Type）

```ts
// app/(site)/page.tsx など（Server Component想定）
async function fetchHome() {
  const base = process.env.STRAPI_URL!;
  const res = await fetch(`${base}/api/home?populate=deep`, {
    // 公開データならキャッシュ戦略をここで決める
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch home");
  return res.json();
}

// app/api/preview/home/route.ts 例（Route Handler）
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // 例：簡易的なプレビューキー（実務なら署名付きに寄せる）
  if (url.searchParams.get("key") !== process.env.PREVIEW_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const base = process.env.STRAPI_URL!;
  const token = process.env.STRAPI_API_TOKEN!;

  // ※クエリパラメータはStrapiのバージョン/設定で差が出る場合があります
  const res = await fetch(
    `${base}/api/home?populate=deep&publicationState=preview`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { message: "Failed to fetch preview" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}

