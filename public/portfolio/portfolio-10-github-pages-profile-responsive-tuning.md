---
title: 【超初心者】自己紹介ページをスマホで見やすくする（レスポンシブ調整）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-12T16:11:53+09:00'
id: fac23b3f21ee9e306666
organization_url_name: null
slide: false
ignorePublish: false
---

**PCで良さそうでも、スマホだと「詰まる/押しにくい/読みにくい」が起きがちです。**  
今回は、自己紹介ページを**スマホで読みやすく**する最低限の調整をします。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- スマホでの余白・文字サイズを最適化できる  
- 2列カードを1列に切り替えられる  
- ボタンやリンクを押しやすくできる  

---

## 先に結論（やることは3つ）

- スマホでは **余白を少し減らす**  
- 2列レイアウトは **1列に戻す**  
- CTAボタンは **高さと余白を増やして押しやすく**  

---

## 1. まずは「スマホ用の余白」を追加する（コピペOK）

`style.css` の末尾に追加してください。

```css
/* ===== Responsive ===== */
@media (max-width: 560px) {
  .profile {
    margin: 16px auto;
    padding: 20px 16px;
    border-radius: 12px;
  }
}
```

---

## 2. 文字サイズを少しだけ調整する（任意だけど効く）

```css
@media (max-width: 560px) {
  body {
    font-size: 14px;
  }

  .skills h2,
  .works h2,
  .timeline h2,
  .achievements h2,
  .contact h2 {
    font-size: 17px;
  }
}
```

---

## 3. ボタン/リンクを「押しやすく」する（超重要）

小さいリンクは押しづらいので、タップしやすいサイズにします。

```css
@media (max-width: 560px) {
  .btn {
    padding: 12px 14px;
    font-size: 14px;
  }

  .footer-links a {
    padding: 6px 8px;
  }
}
```

---

## 4. 既にある「2列→1列」が入っているか確認

03で入れたカード形式を使っている場合、これが入っていればOKです。

```css
@media (max-width: 560px) {
  .skills-cards {
    grid-template-columns: 1fr;
  }
}
```

---

## 5. よくあるつまずき

- **スマホで横にスクロールが出る**  
  → 画像に `width: 100%` が入っているか確認（WorksのCSSでOKのはず）

- **文字が小さい**  
  → `body { font-size: 14px; }` を入れると改善しやすい

- **ボタンが押しづらい**  
  → `padding` を増やすのが最短です（12px以上推奨）

---

## まとめ

- スマホ対応は「余白」「1列」「押しやすさ」の3点で十分  
- 560px以下の1つのブレークポイントだけでも効果が大きい  
- 最後は実機でスクロールして違和感を潰すのが正解  

---

## 次に読む

- 【超初心者】自己紹介ページを軽くする（画像圧縮・読み込みの基本）  
  → 見た目が整ったら、次は「軽さ（表示速度）」を改善すると完成度が上がります。  
  https://qiita.com/ko_nagai_0801/items/a8760bc0dab986312566
