---
title: 【超初心者】自己紹介ページをスマホで見やすくする（レスポンシブ調整）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-11T11:00:13+09:00'
id: fac23b3f21ee9e306666
organization_url_name: null
slide: false
ignorePublish: false
---

**スマホで崩れるポイントだけ直せば、見た目は一気に良くなります。**  
難しいことはせず、幅・文字・余白を少し調整するだけでOKです。

---

## この記事でやること（3行）

- スマホで崩れる原因を把握する
- 画面幅に合わせてレイアウトを調整する
- 文字と余白を読みやすくする

## 対象読者

- 1カラム自己紹介ページを作れた人
- セクションが増えてスマホで見にくい人

---

## 0. スマホで崩れる原因

- 余白が広すぎる
- 2列が狭い
- 文字が詰まって見える

---

## 1. HTMLの確認（1行だけ）

`<head>` に **viewport** が入っているか確認します。

~~~html
<meta name="viewport" content="width=device-width, initial-scale=1">
~~~

---

## 2. CSSのスマホ用調整を追加する

`style.css` の最後に以下を追加します。

~~~css
@media (max-width: 520px) {
  .profile {
    margin: 16px;
    padding: 28px 20px;
  }

  h1 {
    font-size: 22px;
  }

  .skill-cards {
    grid-template-columns: 1fr;
  }

  .work-cards article {
    padding: 10px;
  }

  .links,
  .footer-links {
    flex-wrap: wrap;
  }
}
~~~

---

## 3. よくあるつまずき

- **左右が切れる**  
  → `.profile` の `margin` を小さくする

- **文字が大きすぎる**  
  → `h1` を 20〜22px にする

- **リンクが詰まる**  
  → `flex-wrap: wrap;` を入れる

---

## まとめ

- スマホは「余白と文字」だけで整う
- 2列は1列にするのが基本
- まずは幅520pxを基準に調整すればOK
