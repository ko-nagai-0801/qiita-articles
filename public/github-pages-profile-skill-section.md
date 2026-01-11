---
title: 【超初心者】自己紹介ページにスキル一覧を追加する（カード/バッジ）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: ""
id: ""
organization_url_name: null
slide: false
ignorePublish: false
---

**前回の1カラム自己紹介ページに「スキル一覧」を足して、見た目を一気に充実させます。**  
HTMLとCSSを少し足すだけで、カード/バッジのどちらでも作れます。

---

## この記事でやること（3行）

- スキル一覧のセクションを追加する
- カード版とバッジ版のどちらかを選ぶ
- 見た目が「それっぽく」なるポイントを押さえる

## 対象読者

- 1カラム自己紹介ページを作れた人
- HTML/CSSを少しずつ増やして慣れたい人

---

## 0. 追加する完成イメージ

- 「Skills」見出しの下にスキル一覧
- カード（2列） or バッジ（横並び）
- どちらも1カラムの流れに自然に入る

---

## 1. HTMLにセクションを追加する

`index.html` の `<main class="profile">` の中、自己紹介文の下に追加します。

### カード版（おすすめ）

~~~html
<section class="skills">
  <h2>Skills</h2>
  <ul class="skill-cards">
    <li>
      <h3>HTML</h3>
      <p>基本構造を作れる</p>
    </li>
    <li>
      <h3>CSS</h3>
      <p>見た目を整えられる</p>
    </li>
    <li>
      <h3>JavaScript</h3>
      <p>簡単な動きを付けられる</p>
    </li>
    <li>
      <h3>GitHub</h3>
      <p>push / Pages公開ができる</p>
    </li>
  </ul>
</section>
~~~

### バッジ版（軽め）

~~~html
<section class="skills">
  <h2>Skills</h2>
  <div class="skill-badges">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>GitHub</span>
  </div>
</section>
~~~

> どちらか片方だけ使えばOKです。

---

## 2. CSSを追加する

`style.css` の最後に追加します。

### カード版のCSS

~~~css
.skills {
  margin-top: 28px;
  text-align: left;
}

.skills h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.skill-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skill-cards li {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  background: #fafafa;
}

.skill-cards h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.skill-cards p {
  margin: 0;
  font-size: 13px;
  color: #555;
}

@media (max-width: 520px) {
  .skill-cards {
    grid-template-columns: 1fr;
  }
}
~~~

### バッジ版のCSS

~~~css
.skills {
  margin-top: 28px;
  text-align: left;
}

.skills h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-badges span {
  background: #eef2ff;
  color: #3730a3;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
~~~

---

## 3. よくあるつまずき

- **2列が崩れる**  
  → `grid-template-columns` が消えていないか確認

- **文字が大きすぎる**  
  → `font-size` を1〜2px下げるだけで整う

- **横がはみ出る**  
  → `padding` を小さくするか、スマホ用1列にする

---

## まとめ

- スキル一覧があると「やってる感」が一気に出る
- カードは説明を書ける、バッジはスッキリ
- まずはコピペでOK、後から自分仕様に変えれば十分
