# qiita-articles

Qiita記事をGitHubで管理するリポジトリです（Qiita CLI運用）。

## Links
- Qiita: https://qiita.com/ko_nagai_0801
- GitHub: https://github.com/ko-nagai-0801

## Repository policy
- 記事は `public/` 配下の Markdown を管理対象とします。
- `public/` には「Qiitaに投稿したい Markdown だけ」を置きます（投稿対象外の生成物は置かない）。
- Qiita CLI が生成する可能性のある `.remote/` は **リポジトリ直下**で管理し、Gitには含めません（`.gitignore`）。

## Qiita articles (Docs as Code)
- Strapi + Next.jsでLPを作るときのコンテンツモデル設計（運用しやすさ重視）
  - Qiita: https://qiita.com/ko_nagai_0801/items/faaaa52d9e826f958c3a
  - 管理リポジトリ: https://github.com/ko-nagai-0801/qiita-articles

---

## Daily workflow (編集 → 反映)
### 0) 作業前（同期確認）
```bash
git status -sb
git pull --ff-only origin main
```

### 1) 編集して保存（エディタ）
（手作業）

### 2) 差分確認
```bash
git status -sb
git diff
```

### 3) ステージング → コミット
#### まとめて全部入れる
```bash
git add -A
git commit -m "修正: ○○を更新"
```

#### 変更単位で選んで入れる（おすすめ）
```bash
git add -p
git commit -m "修正: ○○を更新"
```

### 4) push
```bash
git push origin main
```

---

## Publishing to Qiita
このリポジトリは **pushでは自動投稿しません**。投稿は「手動」で行います。

### A) GitHub Actionsで投稿（推奨）
GitHub → Actions → **Publish articles** → **Run workflow** を実行します。  
GitHub Secrets に `QIITA_TOKEN` を設定しておきます。

### B) ローカルから投稿
```bash
npx qiita publish --all --root .
```

---

## Pre-publish safety checks (事故防止)
投稿前に、以下を確認してから実行します。

### 1) `id: null` が残っていないか
```bash
rg -n '^id:\s*null' public || true
```

### 2) `public` 配下に `.remote` が存在しないか
```bash
find public -maxdepth 2 -type d -name ".remote" -print
```

---

## Notes
- 投稿後に `id` / `updated_at` などの差分が出る場合があります（Qiita CLI の反映）。  
  差分が出たら commit/push して管理状態を最新に保ちます。
```bash
git status -sb
git add -A
git commit -m "chore: Qiitaメタデータを更新"
git push origin main
```
