---
title: Strapiの権限設計（Roles/Permissions）とAPI Token運用（Next.js連携の実務メモ）
tags:
  - Security
  - Next.js
  - strapi
  - HeadlessCMS
private: true
updated_at: '2025-12-21T20:20:48+09:00'
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

## Strapiの権限モデルの基本
### Roles（ロール）
- **Public**：未ログインの利用者（Web閲覧者）
- **Authenticated**：ログイン済みユーザー
- **Admin**：管理画面ユーザー（編集者/管理者）

### Permissions（権限）
各API（content type）に対して
- find / findOne / create / update / delete  
などをロールごとに許可/不許可を設定する。

---

## 典型パターン（小規模サイト/LP想定）
### Publicに許可する例
- Home（Single Type）の `find`
- SiteSettings（Single Type）の `find`
- News（Collection Type）の `find` / `findOne`（公開済みのみ返す設計が望ましい）

### Publicで禁止する例
- create / update / delete 全般
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

---

## 実装例（Next.js App Router）
（※この節にfetchコードを載せる）

---

## よくある落とし穴
- Publicに広く権限を付けすぎて **非公開情報が漏れる**
- トークンを `NEXT_PUBLIC_` で持ってしまい **ブラウザに漏れる**
- Newsに `draft/publish` があるのに、Publicが下書きまで取得してしまう

---

## まとめ
- Publicは最小限（必要な表示データのみ）
- Tokenはサーバー側でのみ使用
- “漏れたら困るデータ”を前提に設計する
