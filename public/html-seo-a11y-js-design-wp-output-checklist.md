---
title: 【教材】ツッコミどころ満載なHTMLで学ぶ「SEO / A11y / JS設計」チェックリスト（WP出力あるある付き）
tags:
  - HTML
  - SEO
  - アクセシビリティ
  - JavaScript
  - WordPress
private: false
updated_at: ''
id: ''
organization_url_name: null
slide: false
ignorePublish: false
---

> **TL;DR**：公開HTMLを「教材」にして、SEO/A11y/JS設計の“レビュー観点”を一気に身につける記事です。  
> 実務でありがちな「直せるけど、説明できない」を潰すために、**指摘 → 理由 → 最小修正例**でまとめます。

> ※この記事は、公開ページから取得できるHTMLを **学習目的で観察** し、改善観点を整理したものです。  
> 特定の企業・個人を批判する意図はなく、**攻撃的な文脈にしない**ことを意識しています。

---

## 教材の出どころ（再現性のために明記）

- 対象：公開ページのトップ（HTML）
- 取得元：`https://saunatiger.com/`（取得日：2025-12-27）
- 取得方法：ブラウザの「ページのソースを表示」または `curl` でHTMLを保存
- 取り扱い：**学習目的の観察**であり、特定の企業・個人を批判する意図はありません（本文では固有名詞の言及を最小化します）

例：取得コマンド（任意）

```bash
curl -L "https://saunatiger.com/" -o raw.html
```

### 想定読者
HTML/CSS/JS初心者で、公開HTMLを“レビュー教材”として読み解く練習をしたい人

---


## この記事で扱うこと

- SEO：検索エンジン向けの基本設計（正規URL、OG、meta）
- A11y：アクセシビリティ（操作性・読み上げ・構造）
- JS設計：依存関係・読み込み・保守性
- WP由来の癖：WordPressの“出力あるある”と事故ポイント

---

# まず前提：これはWordPress由来っぽい？

結論：**かなり高確度で「WPの出力が混ざったHTML」** と判断できます。

## 判断材料（教材として強い“痕跡”）

- 画像パスが `.../uploads/YYYY/MM/...` 形式
- `class="wp-post-image"` の付与
- `srcset` / `sizes` の自動生成（`sizes="auto, ..."` も含む）

※「今もWP稼働」か「WPから静的に書き出した」かは別として、**WP由来の出力が混ざっている**のはほぼ確実です。

---

# まず直すならここ：改善優先度（上からやる）

✅ **最優先（効果大・リスク減）**

1. `lang` 付与（A11y基礎）
2. メニューを `button` 化 + `aria-*`（操作性を底上げ）
3. 外部リンク `rel="noopener noreferrer"`（セキュリティ）
4. canonical / og:url 統一（SEOの土台）

✅ **次点（効くときに効く）**

5. OGキー修正（`og:site_name`）
6. HTML妥当性（p入れ子等）修正
7. JS依存の整理（GSAP世代統一、グローバル依存排除、`document.write` 排除）

---

# SEO：よくある地雷と直し方

## 1) canonical（正規URL）の表記ゆれ

`canonical` と `og:url` の末尾スラッシュが揺れていると、状況によっては **評価や集計が分散**します。  
**canonical / og:url / 内部リンク / 301リダイレクト**を同じ表記に統一します。

例（末尾スラッシュあり派）：

```html
<link rel="canonical" href="https://example.com/">
<meta property="og:url" content="https://example.com/">
```

---

## 2) OGのキーが惜しい

`og:sitename` → **正しくは `og:site_name`**

```html
<meta property="og:site_name" content="サイト名">
```

---

## 3) meta keywords は優先度低

`meta name="keywords"` は現代SEOでは参照されないことが多いです。  
残しても致命傷ではない一方、**優先度は低め**でOKです。

---

## 4) 見出しが画像だけだと情報が落ちる

`<h2><img ...></h2>` のように **見出しが画像のみ**だと、検索エンジン／支援技術への情報伝達が弱くなりがちです。  
**テキスト見出しを入れて、画像は装飾に寄せる**のが強いです。

---

# A11y：最低限ここまで（“操作できない”を潰す）

## 1) `<html lang="ja">` が無い

読み上げ・翻訳・検索にも影響。必須級です。

```html
<html lang="ja">
```

---

## 2) ハンバーガーメニューが `button` じゃない

`span` や `div` でクリックさせる実装は **キーボード操作が崩れやすい**です。  
**button化 + aria属性**が王道。

```html
<button
  type="button"
  class="menu"
  aria-controls="spNav"
  aria-expanded="false"
  aria-label="メニューを開く"
>
  ...
</button>

<nav id="spNav">...</nav>
```

開閉時に `aria-expanded` をJSで切り替えます。

---

## 3) アイコンだけリンクはラベルを付ける

Instagram等の **アイコンのみリンク**は、`aria-label` があると読み上げで困りません。

```html
<a href="..." aria-label="Instagram">...</a>
```

---

# JS設計：事故りやすいポイント（説明できると強い）

## 1) GSAPの世代混在（v2 + v3）は危険

- 競合・挙動不安
- 保守コスト増（どっちの書き方で直す？問題）
- 依存の見通しが悪くなる

→ **どちらかに統一（推奨：v3へ統一）** が安全です。

---

## 2) `document.write` は避ける（年表示でも）

年表示などで `document.write` を使うと、タイミング次第でページ破壊や最適化阻害になり得ます。  
DOM操作に寄せます。

```html
<span id="year"></span>
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
```

---

## 3) グローバル変数依存が多いと事故る

`id` がグローバル変数になる挙動に依存するコードは避けます。  
`getElementById` で明示的に取るのが堅いです。

```js
const splashText = document.getElementById("splash_text");
```

---

# WP由来の癖（事故りポイント）

## 1) HTMLが壊れがち（pの入れ子）

WPエディタやコピペ由来で起きやすい例：

```html
<p>
  <p>本文</p>
</p>
```

`p` は `p` を内包できないので、意図した見た目にならない・CSS崩れの元になります。

---

## 2) `srcset/sizes` は便利だが、alt不足が起きがち

レスポンシブ画像は便利ですが、`alt=""` が増殖しやすいです。  
料理写真など意味のある画像には alt を付けます。

---

# まとめ：レビューに使える“最小チェックリスト”

- [ ] `<html lang="ja">` はあるか
- [ ] メニューは `button` か（`aria-controls` / `aria-expanded` を持つか）
- [ ] `target="_blank"` に `rel="noopener noreferrer"` が付いているか
- [ ] canonical / og:url / 内部リンク表記は統一されているか
- [ ] `og:site_name` のキーは正しいか
- [ ] HTML妥当性が崩れていないか（`p` 入れ子等）
- [ ] JS依存が整理されているか（GSAP混在、`document.write`、グローバル依存）

---

# おまけ：この観察の使いどころ

- 案件で「何が危険か」を説明する材料になる
- チェックリスト化してレビュー力が上がる
- “ありがち”な設計ミスを体系的に覚えられる

---

## （続編候補）

- **この記事の追記（初心者向け・すぐ使える）**
  - SPメニューをA11y準拠で実装する最小コード（button化 + aria + 最小JS）

- **別記事で深掘り（必要になったら）**
  - GSAP v3 へ移行する際の注意点まとめ（v2/TweenMax混在の整理、書き換え方針）
  - WPテーマ側（enqueue / wp_head / wp_footer）の改善観点（依存読み込み・出力設計・保守）
