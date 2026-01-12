---
title: 【超初心者】自己紹介ページにフッター/SNSまとめを追加する
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-12T16:11:53+09:00'
id: bc964207dad0c8ff10a8
organization_url_name: null
slide: false
ignorePublish: false
---

**ページの最後にフッターを置くだけで「完成感」が一気に上がります。**  
SNSリンクをまとめて、コピーライトを添えるだけでOKです。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- フッターを追加してページを締められる  
- SNSリンクをまとめて見やすくできる  
- 「上に戻る」導線を付けられる（任意）  

---

## 0. 追加する完成イメージ

- ページ下部に区切り線
- SNSリンクが横並び
- コピーライト表示
- （任意）上に戻るリンク

---

## 1. HTMLにフッターを追加する（コピペOK）

`index.html` の `</main>` の直後に追加してください。

```html
<footer class="site-footer" aria-label="フッター">
  <div class="footer-inner">
    <a class="to-top" href="#top">↑ 上に戻る</a>

    <nav class="footer-links" aria-label="外部リンク">
      <a href="https://github.com/ユーザー名" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://x.com/ユーザー名" target="_blank" rel="noopener noreferrer">X（Twitter）</a>
      <a href="mailto:yourname@example.com">Email</a>
    </nav>

    <small class="copyright">© 2026 あなたの名前</small>
  </div>
</footer>
```

### 重要：`#top` を使う場合
ページの一番上（`<body>`直後など）に、次を1行入れてください。

```html
<div id="top"></div>
```

> これで「↑ 上に戻る」が動きます。

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

```css
/* ===== Footer ===== */
.site-footer {
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
}

.footer-inner {
  max-width: 560px;
  margin: 0 auto;
  padding: 0 16px 24px;
}

.to-top {
  display: inline-block;
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
}

.footer-links a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.copyright {
  font-size: 12px;
  opacity: 0.75;
}
```

---

## 3. よくあるつまずき

- **フッターが詰まる**  
  → `margin-top` / `padding-top` を増やす（例：+8px）

- **リンクが折り返されない**  
  → `.footer-links` に `flex-wrap: wrap;` があるか確認

- **「上に戻る」が動かない**  
  → `id="top"` をページ上部に置いたか確認

---

## まとめ

- フッターがあるだけで「完成感」が出る  
- SNSは2〜3個で十分  
- コピーライトは名前だけでもOK  

---

## 次に読む

- 【超初心者】自己紹介ページの見た目を整える（配色・余白・タイポグラフィ）  
  → ページが一通り揃ったら、最後は「見た目の統一感」を整えると印象が上がります。  
  https://qiita.com/ko_nagai_0801/items/a1ff303ec29d9c2ace8f
