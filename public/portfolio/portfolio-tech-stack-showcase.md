---
title: 【超初心者】技術スタックの見せ方（アイコン/文章の使い分け）
tags:
  - ポートフォリオ
  - デザイン
  - 初心者
private: false
updated_at: ""
id: ""
organization_url_name: null
slide: false
ignorePublish: false
---

**技術スタックは「見せ方」で伝わり方が変わります。**  
アイコンと文章の使い分けだけで、読みやすさが上がります。

---

## この記事でやること（3行）

- スタックの見せ方を2パターンで用意
- 使い分けの基準を決める
- HTML/CSSの最低限の型を作る

## 対象読者

- 作品に使った技術を見せたい人
- 文字だけだと読みにくいと感じる人

---

## 0. 使い分けの基準

- **アイコン**：ひと目で分かる（HTML/CSS/JS など）
- **文章**：理由や役割を説明したいとき

---

## 1. アイコンだけで見せる（軽め）

~~~html
<div class="stack-badges">
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>GitHub</span>
</div>
~~~

---

## 2. 文章で補足する（丁寧）

~~~html
<ul class="stack-list">
  <li><strong>HTML/CSS</strong>：レイアウトとスタイル設計</li>
  <li><strong>JavaScript</strong>：簡単な動き追加</li>
  <li><strong>GitHub</strong>：公開・管理</li>
</ul>
~~~

---

## 3. CSSの最低限

~~~css
.stack-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-badges span {
  background: #eef2ff;
  color: #3730a3;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.stack-list {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.stack-list li {
  margin-bottom: 6px;
  font-size: 14px;
}
~~~

---

## まとめ

- アイコンは「速く伝える」
- 文章は「深く伝える」
- 作品に応じて使い分ければOK
