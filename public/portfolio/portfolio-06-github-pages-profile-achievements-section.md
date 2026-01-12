---
title: 【超初心者】自己紹介ページに実績リストを追加する（資格・受賞・参加）
tags:
  - HTML
  - CSS
  - 初心者
  - GithubPages
private: false
updated_at: '2026-01-12T16:11:53+09:00'
id: c0fff8687a5bc4f9e67c
organization_url_name: null
slide: false
ignorePublish: false
---

**自己紹介ページに「実績リスト（Achievements）」を足して、信頼感をプラスします。**  
長文は不要で、 **箇条書きで3〜5項目** から始めるのが最短です。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 実績（資格・受賞・参加など）をリストで整理できる  
- カテゴリ分けで読みやすくできる  
- ポートフォリオの「信頼の根拠」を足せる  

---

## 前提

- 02（公開まで）  
  https://qiita.com/ko_nagai_0801/items/8b7c6721fe3485e28866
- 05（Timeline）※なくてもOKですが、あると流れが綺麗です  
  https://qiita.com/ko_nagai_0801/items/903c9911a42d4e2ea799

---

## 0. 追加する完成イメージ

- 「Achievements」見出しが追加される
- カテゴリごとに小見出し＋箇条書き
- 読み手が「根拠」を拾いやすくなる

---

## 1. HTMLに実績セクションを追加する（コピペOK）

`index.html` の `<main class="profile">` 内（Timelineの下あたり）に追加してください。

```html
<section class="achievements" aria-label="実績">
  <h2>Achievements</h2>

  <div class="achievements-group">
    <h3>資格 / 学習</h3>
    <ul class="achievements-list">
      <li>HTML/CSSの基礎学習を継続（教材：〇〇）</li>
      <li>GitHub Pagesで公開経験あり</li>
    </ul>
  </div>

  <div class="achievements-group">
    <h3>制作</h3>
    <ul class="achievements-list">
      <li>自己紹介ページ（1カラム）を作成し公開</li>
      <li>作品紹介（サムネ＋説明＋リンク）を実装</li>
    </ul>
  </div>

  <div class="achievements-group">
    <h3>参加 / 発信</h3>
    <ul class="achievements-list">
      <li>Qiitaで学習ログを継続投稿</li>
      <li>Xで制作進捗を共有</li>
    </ul>
  </div>

  <p class="achievements-note">
    ※可能なら「URL」「期間」「数」など、1つでも数字やリンクを入れると信頼感が上がります。
  </p>
</section>
```

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

```css
/* ===== Achievements ===== */
.achievements {
  margin-top: 24px;
  text-align: left;
}

.achievements h2 {
  font-size: 18px;
  margin: 0 0 12px;
}

.achievements-group + .achievements-group {
  margin-top: 14px;
}

.achievements-group h3 {
  font-size: 14px;
  margin: 0 0 8px;
}

.achievements-list {
  margin: 0;
  padding-left: 18px;
}

.achievements-list li {
  font-size: 13px;
  margin-bottom: 8px;
  opacity: 0.95;
}

.achievements-note {
  margin: 14px 0 0;
  font-size: 12px;
  opacity: 0.75;
}
```

---

## 3. よくあるつまずき

- **行間が詰まる**  
  → `li` の `margin-bottom` を増やす（例：10px）

- **見出しとの距離が近い**  
  → `.achievements-group + .achievements-group` の `margin-top` を増やす

- **実績が少なくて不安**  
  → まずは「制作」「学習」「参加」のどれかに分けて、各1〜2個でもOK

---

## まとめ

- 実績リストがあると「信頼感」が出る
- 箇条書きで十分、長文は不要
- 3〜5項目から始めるのが一番楽

---

## 次に読む

- 【超初心者】自己紹介ページに連絡先を追加する（フォーム or CTA）  
  → 実績で信頼感を作ったら、次は「連絡できる導線」を置くと完成度が上がります。  
  https://qiita.com/ko_nagai_0801/items/0728ba92aea68d34ba85
