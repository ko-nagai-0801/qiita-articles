---
title: 【超初心者】自己紹介ページの見た目を整える（配色・余白・タイポグラフィ）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-11T11:00:12+09:00'
id: c8e4e4e3f22cf174fb91
organization_url_name: null
slide: false
ignorePublish: false
---

**内容はそのままでも「見た目の整え方」で完成度は大きく変わります。**  
配色・余白・文字の3点だけを調整して、初心者でも一気にそれっぽく見せます。

---

## この記事でやること（3行）

- 色のルールを1つ決める
- 余白を増やして見やすくする
- 文字サイズと行間で読みやすくする

## 対象読者

- 1カラム自己紹介ページを作れた人
- セクションが増えてきた人

---

## 0. 最初に決めること（たった1つ）

**基準色を1つだけ決めます。**  
例：青なら `#1d4ed8`。これをリンクやボタンに統一します。

---

## 1. 配色を整える

`style.css` の先頭に「色の変数」を追加します。

~~~css
:root {
  --bg: #f7f7f7;
  --card: #ffffff;
  --text: #222222;
  --muted: #6b7280;
  --accent: #1d4ed8;
  --line: #e5e7eb;
}
~~~

次に、既存の色を変数で置き換えます。

~~~css
body {
  background: var(--bg);
  color: var(--text);
}

.profile {
  background: var(--card);
}

.links a,
.work-cards a,
.contact-cta,
.footer-links a {
  color: var(--accent);
}

.timeline-list {
  border-left: 2px solid var(--line);
}
~~~

> これだけで「色の統一感」が出ます。

---

## 2. 余白を整える

**余白を少し増やすだけで読みやすさが上がります。**

~~~css
.profile {
  padding: 40px 28px;
}

.skills,
.works,
.timeline,
.achievements,
.contact {
  margin-top: 36px;
}
~~~

> 1セクションずつ「間」を作るイメージです。

---

## 3. タイポグラフィを整える

**文字のサイズと行間を揃えるだけで安定します。**

~~~css
body {
  line-height: 1.7;
}

h1 {
  font-size: 26px;
  margin: 16px 0 8px;
}

h2 {
  font-size: 18px;
}

p {
  font-size: 14px;
}
~~~

---

## まとめ

- 色は1色に統一するだけで整う
- 余白を増やすと読みやすくなる
- 文字サイズと行間で雰囲気が決まる
