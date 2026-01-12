---
title: 【超初心者】自己紹介ページにスキル一覧を追加する（カード/バッジ）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-12T16:11:53+09:00'
id: f60e13c67dd36ccceaef
organization_url_name: null
slide: false
ignorePublish: false
---

**前回の1カラム自己紹介ページに「スキル一覧」を足して、見た目を一気に充実させます。**  
カード形式（説明あり）と、バッジ形式（スッキリ）の両方を用意したので、好みで選べます。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 自己紹介ページに「スキル一覧」セクションを追加できる  
- カード/バッジの2パターンを作り分けできる  
- スマホでも崩れない（1列）表示にできる  

---

## 前提

- 02（1枚ページを作ってGitHub Pagesで公開）が終わっている想定です  
  https://qiita.com/ko_nagai_0801/items/8b7c6721fe3485e28866

---

## 0. 追加する完成イメージ

- 「Skills」見出しが追加される
- カード：スキル名＋一言説明  
- バッジ：スキル名だけをコンパクトに表示

---

## 1. HTMLにスキルセクションを追加する（コピペOK）

`index.html` の `<main class="profile">` 内、自己紹介文の下（リンクの上でも下でもOK）に貼ってください。

### 1-1. カード形式（説明あり）

```html
<section class="skills" aria-label="スキル一覧">
  <h2>Skills</h2>

  <ul class="skills-cards">
    <li class="skill-card">
      <h3>HTML</h3>
      <p>基本構造を作れる</p>
    </li>
    <li class="skill-card">
      <h3>CSS</h3>
      <p>見た目を整えられる</p>
    </li>
    <li class="skill-card">
      <h3>JavaScript</h3>
      <p>簡単な動きを付けられる</p>
    </li>
    <li class="skill-card">
      <h3>GitHub</h3>
      <p>push / Pages公開ができる</p>
    </li>
  </ul>
</section>
```

### 1-2. バッジ形式（スッキリ）

```html
<section class="skills" aria-label="スキル一覧">
  <h2>Skills</h2>

  <ul class="skills-badges">
    <li class="badge">HTML</li>
    <li class="badge">CSS</li>
    <li class="badge">JavaScript</li>
    <li class="badge">GitHub</li>
  </ul>
</section>
```

> どちらか片方だけ使えばOKです（両方は不要）。

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

### 2-1. 共通（見出し・余白）

```css
/* ===== Skills ===== */
.skills {
  margin-top: 24px;
  text-align: left;
}

.skills h2 {
  font-size: 18px;
  margin: 0 0 12px;
}
```

### 2-2. カード形式

```css
.skills-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.skill-card {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 12px;
  background: #fff;
}

.skill-card h3 {
  font-size: 14px;
  margin: 0 0 6px;
}

.skill-card p {
  font-size: 13px;
  margin: 0;
  opacity: 0.9;
}

/* スマホは1列 */
@media (max-width: 560px) {
  .skills-cards {
    grid-template-columns: 1fr;
  }
}
```

### 2-3. バッジ形式

```css
.skills-badges {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(29, 78, 216, 0.08);
  color: #1d4ed8;
  font-size: 13px;
  font-weight: 600;
}
```

---

## 3. つまずきポイント

- **カードが横並びにならない**  
  → `skills-cards` の `display: grid;` が入っているか確認

- **見出しが大きすぎる**  
  → `.skills h2` の `font-size` を 16px にしてOK

- **スマホで横がはみ出る**  
  → `@media (max-width: 560px)` の1列設定が入っているか確認

---

## まとめ

- スキル一覧があると「やってる感」が一気に出る  
- カード＝説明できる、バッジ＝スッキリ見える  
- まずはコピペでOK、後から自分仕様に変えれば十分  

---

## 次に読む

- 【超初心者】自己紹介ページに作品紹介を追加する（画像＋説明＋リンク）  
  → 「できること」を見せたら、次は「作ったもの」を見せるとポートフォリオとして完成度が上がります。  
  https://qiita.com/ko_nagai_0801/items/42adb3fa1f92001d7100
