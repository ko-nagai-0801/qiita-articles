---
title: 【初心者】GitHub Actionsのワークフローを自分で書いて動かす（リポジトリ作成〜初回成功まで）
tags:
  - GitHubActions
  - CI
  - YAML
  - 初心者
private: false
updated_at: '2025-01-01T00:00:00+09:00'
id: null
organization_url_name: null
slide: false
ignorePublish: false
---

**「自分で書いたCIが初回で成功する」体験を最短で作る記事です。**  
GitHub Actionsが初めてでも、ここまで進めれば **Actionsタブで緑のチェックが付く**ところまで到達できます。

---

## この記事でやること（3行）

- GitHub リポジトリを用意する
- 最小のワークフロー（YAML）を自分で書く
- 初回実行を成功させ、Actions画面で確認する

## 対象読者

- GitHub Actions を初めて触る人
- YAMLを見たことがあるが、書いたことはない人

---

## 0. 先に完成形（ここまで行けばOK）

今回作るワークフローは以下です。  
**「Node.js のセットアップ → npm test」だけ**の最小構成。

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

---

## 1. 新しいリポジトリを作る

GitHub で **New repository** を作成します。  
名前は何でもOK（例：`gha-first-ci`）。

- Public / Private どちらでも可
- README は **チェックを入れて作る**（中身が空だとCIが走らないため）

---

## 2. 最小の Node プロジェクトを用意する

今回は **「npm test が動く」状態**にすればOKです。  
ローカルで以下を実行します。

~~~bash
npm init -y
~~~

次に `package.json` の scripts を最低限にします。

~~~json
{
  "name": "gha-first-ci",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"ok\""
  }
}
~~~

> ポイント：`npm test` が成功すれば、CIも必ず成功します。

---

## 3. ワークフローを作成する

リポジトリ直下に以下を作成します。

- `.github/workflows/ci.yml`

中身は「完成形」をコピペでOKです。

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

---

## 4. push して Actions を確認する

以下の流れで push します。

~~~bash
git add .
git commit -m "add first workflow"
git push origin main
~~~

GitHub の **Actions タブ**を開き、  
`CI` というワークフローが **緑のチェック**になれば成功です。

---

## 5. よくある失敗と即直し

### 失敗1：`npm test` が無い

```
npm ERR! Missing script: "test"
```

→ `package.json` の scripts に `test` を追加するだけで解決。

### 失敗2：main ブランチではない

```
on:
  push:
    branches: [ "main" ]
```

→ ブランチ名が `master` の場合は `main` を修正。

### 失敗3：Actions がそもそも動かない

- README が無い
- ワークフローファイルの場所が間違っている  
  （正しくは `.github/workflows/` 配下）

---

## 6. 何が起きているかをざっくり理解する

- `on:`  
  いつ動くか（push / PR）
- `jobs:`  
  どの作業をするか（test という Job）
- `steps:`  
  Job の中の手順（checkout → setup → install → test）
