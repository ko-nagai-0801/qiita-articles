# qiita-articles

Qiita記事をGitHubで管理するリポジトリです（Qiita CLI運用）。

## Links
- Qiita: https://qiita.com/ko_nagai_0801
- GitHub: https://github.com/ko-nagai-0801

## Qiita articles (Docs as Code)

- Strapi + Next.jsでLPを作るときのコンテンツモデル設計（運用しやすさ重視）
  - Qiita: https://qiita.com/ko_nagai_0801/items/faaaa52d9e826f958c3a
  - 管理リポジトリ: https://github.com/ko-nagai-0801/qiita-articles

### Publishing flow
- Articles are managed as Markdown in this repository.
- On push to `main`, GitHub Actions runs `qiita publish` (Qiita CLI) and updates Qiita automatically.
- `QIITA_TOKEN` is stored in GitHub Secrets.
