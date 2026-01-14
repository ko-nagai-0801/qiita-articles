---
title: 【超初心者】ポートフォリオの導線改善（CTAと配置の型）
tags:
  - HTML
  - CSS
  - 初心者
  - ポートフォリオ
private: false
updated_at: '2026-01-12T10:18:23+09:00'
id: 16e5c273e428f96e3e15
organization_url_name: null
slide: false
ignorePublish: false
---

**作品や実績があっても、「次に何をすればいいか」が分からないと離脱します。**  
そこで、CTA（行動ボタン）を置いて、読み手を迷わせない導線を作ります。

---

## デモ / リポジトリ（関連リンク：公開後に差し替えOK）

- デモ（ポートフォリオ）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- CTAの「置き場所」の型が分かる  
- ボタンの文言を迷わず決められる  
- すぐ使えるCTAブロックを実装できる  

---

## 0. 先に結論（CTAは2か所でOK）

- **ファーストビュー直下**（最初に行動できる）
- **ページ下部**（読み終わった後に行動できる）

---

## 1. CTAの最小テンプレ（コピペOK）

```html
<section class="cta" aria-label="導線">
  <h2>まずはここから</h2>
  <p>制作のご相談・お問い合わせは、下記からお願いします。</p>

  <div class="cta__actions">
    <a class="btn" href="mailto:yourname@example.com">メールで連絡</a>
    <a class="btn btn-outline" href="https://github.com/ユーザー名" target="_blank" rel="noopener noreferrer">GitHubを見る</a>
  </div>
</section>
```

---

## 2. CSS（コピペOK）

```css
.cta {
  margin-top: 24px;
  padding: 16px;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 12px;
  background: #fff;
  text-align: left;
}

.cta h2 {
  font-size: 16px;
  margin: 0 0 8px;
}

.cta p {
  font-size: 13px;
  margin: 0 0 12px;
  opacity: 0.9;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

> 既に07で `.btn` を定義している場合は、CTA側のボタンCSSはそのまま流用できます。

---

## 3. CTA文言のおすすめ（迷ったらこれ）

- **メールで連絡**
- **GitHubを見る**
- **作品を見る**
- **見積もり相談**

> 「次にやってほしい行動」をそのまま書くのが正解です。

---

## 4. よくあるつまずき

- **CTAが目立たない**  
  → `border` を少し濃くする or `padding` を増やす

- **ボタンが押しづらい**  
  → `padding` を増やす（12px以上）

- **リンクが不安**  
  → 外部リンクは `rel="noopener noreferrer"` を付ける

---

## まとめ

- CTAは2か所（上と下）で十分  
- 文言は「してほしい行動」をそのまま書く  
- CTAがあるだけで離脱が減りやすい  

---

## 次に読む

- 【超初心者】作品の改善ログの書き方（Before/Afterで伝える）  
  → 導線が整ったら、次は「改善の積み上げ」を見せるとさらに信頼が上がります。  
  https://qiita.com/ko_nagai_0801/items/5f97545a9ec4077827db
