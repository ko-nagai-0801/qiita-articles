---
title: 【超初心者】自己紹介ページの見た目を整える（配色・余白・タイポグラフィ）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-12T16:11:53+09:00'
id: a1ff303ec29d9c2ace8f
organization_url_name: null
slide: false
ignorePublish: false
---

**見た目の“統一感”は、センスより「ルール」で作れます。**  
今回は、自己紹介ページのデザインを **配色・余白・文字** の3点で整えます。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 1つのページ全体に「統一ルール」を作れる  
- 変数（CSSカスタムプロパティ）で配色を管理できる  
- 余白と文字サイズを整えて読みやすくできる  

---

## 先に結論（迷ったらこれ）

- 色は **メイン1色＋グレー** だけで十分  
- 余白は **8の倍数**（8/16/24/32）で揃える  
- 文字は **本文13px〜14px、見出し18px** くらいでOK  

---

## 0. 何を直すと「それっぽく」なるか

- リンク色がバラバラ → 1色に統一
- 余白が場当たり → ルール化
- 文字が大小バラつく → 3段階に固定

---

## 1. CSSに「デザイントークン（変数）」を追加する（コピペOK）

`style.css` の先頭付近に追加してください（`body` より上がおすすめ）。

```css
:root {
  /* 色（迷ったらこの2つでOK） */
  --c-bg: #f7f7f7;
  --c-text: #222;
  --c-primary: #1d4ed8;

  /* グレー（境界線や薄い文字） */
  --c-border: rgba(0, 0, 0, 0.12);
  --c-muted: rgba(0, 0, 0, 0.75);

  /* 余白（8の倍数） */
  --s-1: 8px;
  --s-2: 16px;
  --s-3: 24px;
  --s-4: 32px;

  /* 角丸 */
  --radius: 12px;

  /* 影（うっすら） */
  --shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
```

---

## 2. 既存CSSの色・余白を変数に置き換える（最低限）

まずは「効きやすいところだけ」置き換えればOKです。

```css
body {
  margin: 0;
  font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
  background: var(--c-bg);
  color: var(--c-text);
}

.profile {
  max-width: 560px;
  margin: 40px auto;
  background: #fff;
  padding: var(--s-4) var(--s-3);
  text-align: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* リンク色の統一 */
a {
  color: var(--c-primary);
}
```

> 置き換えは「一気に全部やらない」でOKです。まずは `body / profile / a` だけで効きます。

---

## 3. 見出しサイズを統一する（各セクション共通）

各セクションに `h2` がある場合、見出しを同じサイズに揃えます。

```css
/* セクション見出し（h2）を統一 */
.skills h2,
.works h2,
.timeline h2,
.achievements h2,
.contact h2 {
  font-size: 18px;
  margin: 0 0 12px;
}
```

---

## 4. “薄い文字”のルールを作る（説明文は少し薄く）

```css
/* 説明文は少し薄くして読みやすく */
.profile p,
.skill-card p,
.work-body p,
.timeline-text,
.contact-lead,
.achievements-note {
  color: var(--c-muted);
}
```

---

## 5. つまずきポイント

- **変数が効かない**  
  → `:root { ... }` がCSS内に入っているか確認

- **色が濃すぎる/薄すぎる**  
  → `--c-muted` の透明度を調整（0.6〜0.85の範囲でOK）

- **置き換えが大変**  
  → 最低限 `a` の色だけ統一でも効果があります

---

## まとめ

- 統一感は「ルール」で作れる  
- 色はメイン1色、余白は8の倍数、文字は3段階でOK  
- 変数を入れると“後からの調整”が爆速になる  

---

## 次に読む

- 【超初心者】自己紹介ページをスマホで見やすくする（レスポンシブ調整）  
  → 見た目が整ったら、次は「スマホでも崩れない」を仕上げると完成です。  
  https://qiita.com/ko_nagai_0801/items/fac23b3f21ee9e306666
