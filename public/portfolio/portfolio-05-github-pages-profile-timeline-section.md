---
title: 【超初心者】自己紹介ページに経歴タイムラインを追加する（縦線でそれっぽく）
tags:
  - HTML
  - CSS
  - 初心者
  - GitHubPages
private: false
updated_at: '2026-01-11T11:00:12+09:00'
id: 903c9911a42d4e2ea799
organization_url_name: null
slide: false
ignorePublish: false
---

**自己紹介ページに「経歴タイムライン」を足して、学習や経験の流れを見える化します。**  
文章が少なくても、**縦線＋丸**の定番レイアウトならそれっぽく整います。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- タイムライン（経歴）セクションを追加できる  
- 縦線＋丸の定番デザインをCSSで作れる  
- `<time>` を使って日付をきれいに書ける  

---

## 前提

- 02（公開まで）  
  https://qiita.com/ko_nagai_0801/items/8b7c6721fe3485e28866
- 04（Worksまで）※なくてもOKですが、あると流れが綺麗です  
  https://qiita.com/ko_nagai_0801/items/42adb3fa1f92001d7100

---

## 0. 追加する完成イメージ

- 「Timeline」見出しが追加される
- 左に縦線、各項目に丸（マーカー）
- 3件くらいからでOK

---

## 1. HTMLにタイムラインを追加する（コピペOK）

`index.html` の `<main class="profile">` 内（Worksの下あたり）に追加してください。

```html
<section class="timeline" aria-label="経歴タイムライン">
  <h2>Timeline</h2>

  <ul class="timeline-list">
    <li class="timeline-item">
      <time class="timeline-date" datetime="2025-01">2025.01</time>
      <h3 class="timeline-title">学習を開始</h3>
      <p class="timeline-text">HTML/CSSの基礎を学び、1枚ページを作成。</p>
    </li>

    <li class="timeline-item">
      <time class="timeline-date" datetime="2025-03">2025.03</time>
      <h3 class="timeline-title">作品を公開</h3>
      <p class="timeline-text">GitHub Pagesで公開し、URLとして共有できる状態に。</p>
    </li>

    <li class="timeline-item">
      <time class="timeline-date" datetime="2025-06">2025.06</time>
      <h3 class="timeline-title">改善を継続</h3>
      <p class="timeline-text">レスポンシブ調整や導線改善を反映して品質を上げた。</p>
    </li>
  </ul>
</section>
```

> `datetime` は「機械が読める日付」です。ざっくり月まででOKです。

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

```css
/* ===== Timeline ===== */
.timeline {
  margin-top: 24px;
  text-align: left;
}

.timeline h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.timeline-list {
  list-style: none;
  padding: 0 0 0 20px; /* 縦線の分だけ左に余白 */
  margin: 0;
  position: relative;
}

/* 縦線 */
.timeline-list::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 2px;
  bottom: 2px;
  width: 2px;
  background: rgba(0, 0, 0, 0.12);
}

.timeline-item {
  position: relative;
  padding: 0 0 16px 0;
}

/* 丸（マーカー） */
.timeline-item::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #1d4ed8;
}

.timeline-date {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 6px;
}

.timeline-title {
  font-size: 14px;
  margin: 0 0 6px;
}

.timeline-text {
  font-size: 13px;
  margin: 0;
  opacity: 0.9;
}
```

---

## 3. よくあるつまずき

- **縦線が見えない**  
  → `.timeline-list` に `position: relative;` があるか確認

- **丸がズレる**  
  → `.timeline-item::before` の `left` を微調整（例：`-15px`）

- **文字が詰まる**  
  → `.timeline-item` の `padding-bottom` を 20px くらいに増やす

---

## まとめ

- タイムラインは「成長の流れ」を見せやすい
- 縦線＋丸の定番パターンで十分それっぽくなる
- まずは3件でOK、あとから増やせばいい

---

## 次に読む

- 【超初心者】自己紹介ページに実績リストを追加する（資格・受賞・参加）  
  → 経歴の流れができたら、次は「信頼につながる要素」を足すと完成度が上がります。  
  https://qiita.com/ko_nagai_0801/items/c0fff8687a5bc4f9e67c
