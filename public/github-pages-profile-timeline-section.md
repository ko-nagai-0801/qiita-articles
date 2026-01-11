---
title: 【超初心者】自己紹介ページに経歴タイムラインを追加する（縦線でそれっぽく）
tags:
  - HTML
  - CSS
  - GitHubPages
  - 初心者
private: false
updated_at: ""
id: ""
organization_url_name: null
slide: false
ignorePublish: false
---

**自己紹介ページに「経歴タイムライン」を足して、学習の流れを見える化します。**  
縦線と丸だけのシンプルな見た目で、初心者でもそれっぽくできます。

---

## この記事でやること（3行）

- タイムラインセクションを追加する
- 縦線＋丸の定番レイアウトを作る
- 文章量が少なくても見栄えする形にする

## 対象読者

- 1カラム自己紹介ページを作れた人
- スキル/作品紹介まで追加できた人

---

## 0. 追加する完成イメージ

- 「Timeline」見出しの下に経歴が縦に並ぶ
- 左に細い線、各項目に丸
- 1カラムの流れに自然に入る

---

## 1. HTMLにセクションを追加する

`index.html` の `<main class="profile">` 内、作品紹介の下に追加します。

~~~html
<section class="timeline">
  <h2>Timeline</h2>
  <ol class="timeline-list">
    <li>
      <div class="time">2024.04</div>
      <div class="content">HTML/CSSの学習を開始</div>
    </li>
    <li>
      <div class="time">2024.06</div>
      <div class="content">初めての自己紹介ページを公開</div>
    </li>
    <li>
      <div class="time">2024.08</div>
      <div class="content">GitHub Pagesでポートフォリオ運用</div>
    </li>
  </ol>
</section>
~~~

> 年月はざっくりでOK。3件くらいで十分見えます。

---

## 2. CSSを追加する

`style.css` の最後に追加します。

~~~css
.timeline {
  margin-top: 32px;
  text-align: left;
}

.timeline h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 16px;
  border-left: 2px solid #e5e7eb;
}

.timeline-list li {
  position: relative;
  padding: 0 0 16px 12px;
}

.timeline-list li::before {
  content: "";
  position: absolute;
  left: -9px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1d4ed8;
}

.timeline-list .time {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.timeline-list .content {
  font-size: 14px;
  color: #222;
}
~~~

---

## 3. よくあるつまずき

- **線や丸がズレる**  
  → `padding-left` と `left` の数値を微調整する

- **文字が詰まる**  
  → `li` の `padding-bottom` を増やす

- **全体が左に寄りすぎる**  
  → `.timeline` に `text-align: left;` があるか確認

---

## まとめ

- タイムラインは「成長の流れ」を見せやすい
- 縦線＋丸の定番パターンで十分それっぽくなる
- まずは3件でOK、あとから増やせばいい
