---
title: 【初心者】GitHub ActionsのCI/CDを最小構成で理解する（YAMLの読み方＋失敗ログの追い方）
tags:
  - CI
  - devops
  - YAML
  - cd
  - GitHubActions
private: false
updated_at: '2025-12-27T15:25:48+09:00'
id: 8b1ebe7c7085c21340a5
organization_url_name: null
slide: false
ignorePublish: false
---

**Pushしたら自動でチェックが走る――その仕組みを最小構成で理解し、落ちたときのログ追跡まで一気に掴みます。**


## この記事でわかること（3行）

- CI/CD・DevOps・GitHub Actionsの関係を、実務で迷わない粒度で整理できる
- GitHub Actionsの最小CI（YAML）を「何が起きているか」読めるようになる
- CIが落ちたときに、Job→Step→ログの順で原因を追えるようになる

### 対象読者

- GitHub ActionsでCIを動かしてみたい初心者

## 目的

CI/CD・DevOps・GitHub Actions を「なんとなく知ってる」状態から、

- GitHub Actions の最小CI（YAML）を読める
- 失敗ログを Job → Step → ログの順で追える

ところまで到達するための **最短ルート**をまとめます。

---

## CI/CDとは？（結論）

**CI/CD = コードを書いたら、テスト〜デプロイまでを自動で流す仕組み**です。

### CI（Continuous Integration）
- push / PR をトリガーに
- テスト・Lint・型チェックなどを自動実行
- 壊れたコードが混ざるのを防ぐ

### CD（Continuous Delivery / Deployment）
- テスト通過後
- 本番反映まで自動化（または人が最終判断）

> push したら勝手にチェックされる仕組み

---

## DevOpsとは？（よくある誤解）

**DevOps はツールではなく、考え方・文化**です。

- Dev（開発）と Ops（運用）の分断をなくす
- 自動化・共有・責任の可視化を重視する

### よくある誤解
- ❌ CI/CD = DevOps  
- ⭕ CI/CD ⊂ DevOps

---

## Jenkinsとは？

Jenkins は **CI/CD を実行するためのサーバー型ツール**です。

### 特徴
- 自分でサーバーを立てて運用する前提
- 歴史が長く、企業の既存環境でよく使われる
- 設定は GUI + 独自記法

### GitHub Actions との違い

| 項目 | Jenkins | GitHub Actions |
|---|---|---|
| 導入 | サーバー構築が必要 | GitHub標準 |
| 管理 | 重い | ほぼ不要 |
| 個人開発 | 不向き | 最適 |

👉 個人開発なら、まずは GitHub Actions で十分（最小コストで始められる）

---

## YAMLとは？

**YAML は設定を書くための言語**です。  
プログラミング言語ではありません。

### 最低限のルール
- key: value 形式
- インデントが意味を持つ
- リストは `-`

~~~yaml
jobs:
  test:
    steps:
      - name: run test
~~~

---

## GitHub Actionsとは？

GitHub Actions は **GitHub に内蔵された CI/CD 機能**です。

- push / PR をトリガーに実行できる
- テスト・ビルド・デプロイが可能
- 設定は YAML で記述する

---

## 超最小 GitHub Actions.yml（実務入口）

以下は「**読めれば実務入口**」となる最小構成です。  
（※ PRでも動くように `pull_request` も入れています）

~~~yaml
name: CI

on:
  push:
    branches: [ "main" ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: リポジトリを取得
        uses: actions/checkout@v4

      - name: Node.js をセットアップ
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: 依存関係をインストール
        run: npm install

      - name: テスト実行
        run: npm test
~~~

> **前提**：`package.json` に `npm test` が定義されている必要があります。無い場合は `npm test` を `npm run lint` / `npm run build` などに置き換えると動かせます。

---

## 実務的な読み方

この yml を見て、次が分かれば **実務レベル入口**です。

- **いつ動く？**  
  → main ブランチに push されたとき / PR が作られたとき

- **どこで動く？**  
  → GitHub が用意した Ubuntu 環境

- **何をしている？**  
  → install → test

- **失敗したら？**  
  → 失敗した step で処理が止まる

---

## CI/CD の失敗ログはこう追う

CI が失敗したときは、次の順で確認します。

1. **どの Job が落ちたか**
2. **どの Step で失敗したか**
3. **エラーメッセージ全文**

よくある原因は以下です。

- ローカルと CI の環境差
- Node / PHP のバージョン違い
- secrets（環境変数）の未設定

👉 **CI は「別PC」だと考えると理解しやすい**

---

## CI/CD を入れると何が楽になる？（個人開発視点）

### CI/CDなし
- テストを忘れる
- デプロイが怖い
- 更新頻度が下がる

### CI/CDあり
- push / PR を出すだけで、自動でチェックされる
- 壊れたらすぐ分かる
- 安心して更新できる

**自分専用の優秀な後輩ができる感覚**です。

---

## DevOps が嫌われる現場の特徴

- ルールだけが増える
- 自動化が中途半端
- ツール導入が目的化している

### 良い DevOps
- 課題先行
- 最小構成
- 「楽になる」ことが目的

---

## よくある失敗（初心者がハマりやすい3つ）

- `npm test` が存在しない  
  → `package.json` の scripts を確認し、`npm run lint` / `npm run build` に置き換える

- Node.js のバージョン差で落ちる  
  → ローカルと CI の Node バージョンを揃える（例：`setup-node` の `node-version: 20` を合わせる）

- secrets（環境変数）が無くて落ちる  
  → ローカルでは `.env` があるのに、CI には無いケースが多い。必要なら GitHub の Secrets に登録する

---

## まとめ

- CI/CD = 自動化の仕組み
- DevOps = 文化・思想
- GitHub Actions = 最小コストで実務感を出せる
- **まずは YAML を読めることが最重要**

---

お読みいただきありがとうございました。
