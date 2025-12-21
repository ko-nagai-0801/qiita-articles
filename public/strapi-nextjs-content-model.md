---
title: Strapi + Next.jsでLPを作るときのコンテンツモデル設計（運用しやすさ重視）
tags:
  - Next.js
  - strapi
  - HeadlessCMS
  - CMS設計
private: true
updated_at: '2025-12-21T13:46:28+09:00'
id: faaaa52d9e826f958c3a
organization_url_name: null
slide: false
ignorePublish: false
---

## この記事の目的
Strapi（管理画面）で「非エンジニアでも更新できる」状態を作りつつ、Next.js（App Router）で表示するための**コンテンツモデル設計**をまとめます。

対象：個人事業・サロン・小規模事業者向けのLP/小規模サイトを想定。

## 前提（構成）
- Front：Next.js（App Router）
- CMS：Strapi
- 取得：REST（or GraphQL） ※この記事ではREST想定で書きます
- デプロイ：Front = Vercel / Strapi = PaaS or VPS

## 設計方針（最重要）
### 1. 運用者が迷わない入力導線
- 1画面で編集できる範囲を明確にする
- 「どこを編集するとどこが変わるか」を一致させる

### 2. 変更頻度でモデルを分ける
- **毎回変わる**：お知らせ/ブログ（Collection Type）
- **たまに変わる**：LPの各セクション（Single Type or Sections）
- **ほぼ変わらない**：会社情報/基本設定（Single Type）

### 3. 表示の自由度は“必要な分だけ”
自由度を上げすぎると運用が崩れるので、
- よくあるLP構成に寄せて「選択肢を絞る」
- どうしても必要な場合だけ Dynamic Zone を採用

## コンテンツモデル案（Strapi）
### A. Site Settings（Single Type）
- siteName
- logo
- phone / email
- address
- snsLinks（Component）
- defaultSeo（Component）

狙い：サイト全体で共通の情報をまとめて管理。

### B. Home（Single Type）
- hero（Component）
- features（Componentの繰り返し）
- services（Componentの繰り返し）
- pricing（Componentの繰り返し）
- faq（Componentの繰り返し）
- cta（Component）

狙い：LPの編集を「Homeだけ触ればOK」にする。

### C. News（Collection Type）
- title
- body
- publishedAt
- thumbnail
- category（任意）

狙い：更新頻度が高いものは一覧/詳細の型にする。

## Next.js側の取得（例：REST）
### 環境変数
- STRAPI_URL
- STRAPI_TOKEN（必要なら）

### 取得イメージ
- Home（Single）を1回取得してトップページを描画
- News（Collection）は一覧と詳細に分けて取得

（※ここに実コードを載せる予定）

## 運用でハマりやすい点と対策
- 画像のalt、OGP、SEOが抜ける → defaultSeo / 必須チェック
- セクション順の変更 → order（数値）を持たせる or 配列で管理
- 運用者が間違えて壊す → Dynamic Zoneを乱用しない

## まとめ
- “運用者が迷わない”を優先すると、Single/Component中心が安定
- 変更頻度でモデルを分けると保守がラク
- Next.jsは「表示都合」で必要最小限の形に寄せる

## 参考（リポジトリ）
- （後でGitHubのURLを貼る）
