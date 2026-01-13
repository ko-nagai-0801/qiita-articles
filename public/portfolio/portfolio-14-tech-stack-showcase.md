---
title: 【超初心者】技術スタックの見せ方（アイコン/文章の使い分け）
tags:
  - HTML
  - CSS
  - 初心者
  - ポートフォリオ
private: false
updated_at: '2026-01-12T12:02:09+09:00'
id: a73f743935fdc35201fb
organization_url_name: null
slide: false
ignorePublish: false
---

**技術スタックは「見せ方」で伝わり方が変わります。**  
アイコン（バッジ）と文章の使い分けだけで、読みやすさが上がります。

---

## デモ / リポジトリ（関連リンク：公開後に差し替えOK）

- デモ（ポートフォリオ）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でやること（3行）

- スタックの見せ方を2パターンで用意
- 使い分けの基準を決める
- HTML/CSSの最低限の型を作る

## 対象読者

- 作品に使った技術を見せたい人
- 文字だけだと読みにくいと感じる人

---

## 0. 使い分けの基準（結論）

- **バッジ（アイコン風）**：ひと目で分かる（HTML/CSS/JS など）
- **文章**：役割や工夫を伝えたい（なぜ使ったか、何に効いたか）

---

## 1. バッジだけで見せる（軽め）

```html
<section class="tech" aria-label="技術スタック">
  <h2>Tech Stack</h2>
  <div class="stack-badges">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>GitHub</span>
  </div>
</section>
```

---

## 2. 文章で補足する（丁寧）

```html
<section class="tech" aria-label="技術スタック">
  <h2>Tech Stack</h2>
  <ul class="stack-list">
    <li><strong>HTML/CSS</strong>：レイアウトとスタイル設計</li>
    <li><strong>JavaScript</strong>：簡単な動き追加（UIの改善）</li>
    <li><strong>GitHub</strong>：バージョン管理 / GitHub Pagesで公開</li>
  </ul>
</section>
```

---

## 3. CSSの最低限（コピペOK）

```css
.tech {
  margin-top: 24px;
  text-align: left;
}

.tech h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

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
  font-weight: 700;
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
```

---

## 4. 1行だけ入れると強くなる「理由」

「使った技術」を並べるだけでなく、1行でOKなので理由を足すと説得力が上がります。

例：
- **HTML/CSS**：基礎を固めるために、まずは1枚ページを丁寧に実装  
- **GitHub Pages**：無料で公開でき、URLで共有できる状態にするため

---

## まとめ

- バッジは「速く伝える」
- 文章は「深く伝える」
- 作品に応じて使い分ければOK

---

## 次に読む

- 【超初心者】成果物の見せ方（サムネ・説明文・リンクの3点セット）  
  → 技術が見えたら、次は「成果物の見せ方」を揃えると完成度が一気に上がります。  
  https://qiita.com/ko_nagai_0801/items/7048084de73a2b6250c9
