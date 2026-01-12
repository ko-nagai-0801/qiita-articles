---
title: 【超初心者】自己紹介ページに作品紹介を追加する（画像＋説明＋リンク）
tags:
  - HTML
  - CSS
  - 初心者
  - GitHubPages
private: false
updated_at: '2026-01-11T11:00:12+09:00'
id: 42adb3fa1f92001d7100
organization_url_name: null
slide: false
ignorePublish: false
---

**1カラム自己紹介ページに「作品紹介（Works）」を追加して、ポートフォリオらしさを出します。**  
画像＋説明＋リンクをセットにすると、読み手が迷いません。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 「Works」セクションを追加できる  
- 作品カード（画像＋説明＋リンク）を作れる  
- 外部リンクの作法（`rel="noopener noreferrer"`）も揃えられる  

---

## 前提

- 02（公開まで）  
  https://qiita.com/ko_nagai_0801/items/8b7c6721fe3485e28866
- 03（スキル一覧）※なくてもOKですが、あると流れが綺麗です  
  https://qiita.com/ko_nagai_0801/items/f60e13c67dd36ccceaef

---

## 0. 追加する完成イメージ

- 「Works」見出しの下に作品カード
- 画像＋タイトル＋説明＋リンク
- 1カラムの流れに自然に入る

---

## 1. HTMLにWorksセクションを追加する（コピペOK）

`index.html` の `<main class="profile">` 内、スキル一覧の下あたりに追加してください。

```html
<section class="works" aria-label="作品紹介">
  <h2>Works</h2>

  <ul class="works-list">
    <li class="work-card">
      <img
        src="https://placehold.jp/640x360.png"
        alt="作品のサムネイル"
        width="640"
        height="360"
        loading="lazy"
      >
      <div class="work-body">
        <h3>作品タイトル</h3>
        <p>どんな作品かを1〜2行で説明します（誰に/何を/目的）。</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">作品を見る</a>
      </div>
    </li>

    <li class="work-card">
      <img
        src="https://placehold.jp/640x360.png"
        alt="作品のサムネイル"
        width="640"
        height="360"
        loading="lazy"
      >
      <div class="work-body">
        <h3>作品タイトル2</h3>
        <p>例：LP制作の練習として、シンプルな1ページサイトを作成。</p>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHubを見る</a>
      </div>
    </li>
  </ul>
</section>
```

> 画像URL・タイトル・説明文・リンク先だけ、自分の内容に差し替えればOKです。

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

```css
/* ===== Works ===== */
.works {
  margin-top: 24px;
  text-align: left;
}

.works h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.works-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.work-card {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.work-card img {
  width: 100%;
  height: auto;
  display: block;
}

.work-body {
  padding: 12px;
}

.work-body h3 {
  font-size: 14px;
  margin: 0 0 6px;
}

.work-body p {
  font-size: 13px;
  margin: 0 0 10px;
  opacity: 0.9;
}

.work-body a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}

.work-body a:hover {
  text-decoration: underline;
}
```

---

## 3. つまずきポイント

- **画像が表示されない**  
  → `src` のURLが正しいか確認（相対パスなら階層ミスが多い）

- **カードがダサく見える**  
  → `border-radius` と `overflow: hidden;` が入っているか確認（角丸が効く）

- **外部リンクが不安**  
  → `target="_blank"` を使う場合は必ず `rel="noopener noreferrer"` を付ける

---

## まとめ

- 作品紹介は「画像＋説明＋リンク」の3点セットが強い  
- 1作品目は“代表作”として丁寧に書くと印象が上がる  
- 最初は2作品で十分。増やすより整えるほうが効く  

---

## 次に読む

- 【超初心者】自己紹介ページに経歴タイムラインを追加する（縦線でそれっぽく）  
  → 作品を見せたら、次は「いつ何をしてきたか」を見せると説得力が上がります。  
  https://qiita.com/ko_nagai_0801/items/903c9911a42d4e2ea799
