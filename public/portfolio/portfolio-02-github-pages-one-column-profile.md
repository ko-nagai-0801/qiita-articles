---
title: 【超初心者】HTML/CSSで1枚ページを作ってGitHub Pagesで公開する最短手順
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-11T11:00:12+09:00'
id: 8b7c6721fe3485e28866
organization_url_name: null
slide: false
ignorePublish: false
---

**「1ページ作って公開できた」を最短で体験するための記事です。**  
HTML/CSSがほぼ初めてでも、コピペで動かしながらGitHub Pagesで公開まで進めます。

---

## やること（3行）

- 1カラムの自己紹介ページをHTML/CSSで作る
- GitHubにpushしてGitHub Pagesで公開する
- 公開URLを確認する

## 対象読者

- Web制作を始めたばかりの人
- HTML/CSSの記号に慣れていない人

---

## 完成イメージ

- 上に名前
- その下に自己紹介文
- 画像とSNSリンク
- 1カラムで縦に並ぶだけ

---

## 1. フォルダとファイル

作業用フォルダを作り、次の2つを用意します。

- `index.html`
- `style.css`

---

## 2. HTML（コピペOK）

`index.html` に以下を書きます。

~~~html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>自己紹介ページ</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <main class="profile">
      <img class="avatar" src="https://placehold.jp/120x120.png" alt="プロフィール画像">
      <h1>あなたの名前</h1>
      <p>
        ここに自己紹介を書きます。<br>
        例：Web制作の学習中。HTML/CSSが楽しいです。
      </p>
      <div class="links">
        <a href="https://twitter.com/" target="_blank" rel="noopener">Twitter</a>
        <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
      </div>
    </main>
  </body>
</html>
~~~

> 画像は仮のダミーです。あとで自分の画像URLに変えてOK。

---

## 3. CSS（コピペOK）

`style.css` に以下を書きます。

~~~css
body {
  margin: 0;
  font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
  background: #f7f7f7;
  color: #222;
}

.profile {
  max-width: 560px;
  margin: 40px auto;
  background: #fff;
  padding: 32px 24px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.links {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.links a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}

.links a:hover {
  text-decoration: underline;
}
~~~

---

## 4. ローカルで確認

`index.html` をダブルクリックで開けば、ブラウザで表示できます。

- 文字が縦に並んでいればOK
- 画像が丸く表示されていればOK

---

## 5. GitHubにpush

新規リポジトリを作成し、ローカルのファイルをpushします。

~~~bash
git init
git add .
git commit -m "first profile page"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
~~~

---

## 6. GitHub Pagesで公開

1. リポジトリの **Settings** を開く
2. 左メニューの **Pages** を開く
3. Branch を `main`、フォルダを `/ (root)` に設定
4. Save

数十秒待つと、公開URLが表示されます。

例：`https://ユーザー名.github.io/リポジトリ名/`

---

## 7. つまずきポイント

- **CSSが反映されない**  
  → `index.html` と `style.css` が同じ階層か確認

- **PagesのURLが出ない**  
  → Settings > Pages の設定が保存されているか確認

- **画像が表示されない**  
  → `src` のURLが正しいか確認

---

## まとめ

- HTML/CSSだけで1ページは作れる
- GitHub Pagesなら無料で公開できる
- 最初は1カラムで十分

---

次は、色やフォントを変えて「自分らしさ」を出すと楽しくなります。
