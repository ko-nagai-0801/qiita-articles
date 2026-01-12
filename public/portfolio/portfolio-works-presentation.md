---
title: 【超初心者】成果物の見せ方（サムネ・説明文・リンクの3点セット）
tags:
  - HTML
  - CSS
  - 初心者
  - ポートフォリオ
private: false
updated_at: '2026-01-12T10:18:24+09:00'
id: 7048084de73a2b6250c9
organization_url_name: null
slide: false
ignorePublish: false
---

**成果物は「何を作ったか」が一目で伝わると強いです。**  
サムネ・説明文・リンクの3点を揃えて、見せ方を整えます。

---

## この記事でやること（3行）

- 作品カードの構成を決める
- 説明文を短く書くコツを知る
- リンクの見せ方を揃える

## 対象読者

- 作品を2つ以上載せたい人
- 見た目を整えたい人

---

## 0. 作品カードの基本形

**これだけあれば十分です。**

- 画像（サムネ）
- タイトル（1行）
- 説明文（2行）
- リンク（1つ）

---

## 1. HTMLの型

~~~html
<article class="work-card">
  <img src="thumb-1.webp" alt="作品1のサムネイル" loading="lazy">
  <h3>作品タイトル</h3>
  <p>一言で特徴を書く。例：学習記録をまとめるWebサイト。</p>
  <a href="https://example.com" target="_blank" rel="noopener">サイトを見る</a>
</article>
~~~

---

## 2. 説明文の書き方（テンプレ）

**「誰に / 何を / 何のために」**の順で書くと伝わります。

例：
- **学習中の人向けに、HTMLの練習用ページを作りました。**
- **採用担当向けに、制作物をまとめるポートフォリオです。**

---

## 3. サムネの作り方（最低限）

- 横長（16:9）で揃える
- 1枚は **横560px** 程度でOK
- 画像が無い場合はダミーでも可

---

## 4. CSSの型

~~~css
.work-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
}

.work-card img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.work-card h3 {
  margin: 12px 0 6px;
  font-size: 16px;
}

.work-card p {
  margin: 0 0 8px;
  font-size: 13px;
  color: #555;
}

.work-card a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}
~~~

---

## 5. よくある失敗

- **説明文が長すぎる**  
  → 2行に収まる長さでOK

- **リンクが多すぎる**  
  → 1作品につき1リンクで十分

- **サムネのサイズがバラバラ**  
  → 16:9 で統一する

---

## まとめ

- 作品カードの型を揃えるだけで整う
- 説明文は短く、相手目線で書く
- サムネはサイズ統一が最優先
