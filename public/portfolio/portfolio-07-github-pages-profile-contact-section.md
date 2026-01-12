---
title: 【超初心者】自己紹介ページに連絡先を追加する（フォーム or CTA）
tags:
  - HTML
  - CSS
  - 初心者
  - GitHubPages
private: false
updated_at: '2026-01-11T11:00:13+09:00'
id: 0728ba92aea68d34ba85
organization_url_name: null
slide: false
ignorePublish: false
---

**ポートフォリオは「連絡できる」だけで完成度が上がります。**  
GitHub Pagesはサーバー処理ができないので、まずは **CTA（ボタン）** で連絡手段を用意します。

---

## デモ / リポジトリ（公開後に差し替えOK）

- デモ（GitHub Pages）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 「Contact」セクションを追加できる  
- ボタン（CTA）で迷わない導線を作れる  
- GitHub Pagesでも使える連絡手段を選べる  

---

## 先に結論（迷ったらこれ）

- GitHub Pagesなら、まずは **メール（mailto）＋SNS＋GitHub** のCTAで十分です  
- フォームが欲しい場合は **Googleフォーム等の外部サービス** にリンクします（自前フォームは不可）

---

## 0. 追加する完成イメージ

- 「Contact」見出し
- 一言メッセージ
- ボタンが2〜3個（メール / GitHub / X など）

---

## 1. HTMLにContactセクションを追加する（コピペOK）

`index.html` の `<main class="profile">` 内、最後の方（実績の下など）に追加してください。

```html
<section class="contact" aria-label="連絡先">
  <h2>Contact</h2>
  <p class="contact-lead">
    ご相談・ご連絡は、以下からお気軽にどうぞ。
  </p>

  <div class="contact-actions">
    <a class="btn" href="mailto:yourname@example.com">メールで連絡</a>
    <a class="btn btn-outline" href="https://github.com/ユーザー名" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a class="btn btn-outline" href="https://x.com/ユーザー名" target="_blank" rel="noopener noreferrer">X（Twitter）</a>
  </div>

  <p class="contact-note">
    ※フォームが必要な場合は、Googleフォームなど外部フォームへのリンクにします。
  </p>
</section>
```

> `mailto:` のメールアドレスだけ、必ず自分用に差し替えてください。

---

## 2. CSSを追加する（コピペOK）

`style.css` の末尾に追記してください。

```css
/* ===== Contact ===== */
.contact {
  margin-top: 24px;
  text-align: left;
}

.contact h2 {
  font-size: 18px;
  margin: 0 0 10px;
}

.contact-lead {
  font-size: 13px;
  margin: 0 0 12px;
  opacity: 0.9;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* ボタン（CTA） */
.btn {
  display: inline-block;
  padding: 10px 12px;
  border-radius: 12px;
  background: #1d4ed8;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
}

.btn:hover {
  opacity: 0.92;
}

.btn-outline {
  background: #fff;
  color: #1d4ed8;
  border: 1px solid rgba(29, 78, 216, 0.35);
}

.contact-note {
  margin: 12px 0 0;
  font-size: 12px;
  opacity: 0.75;
}

/* キーボード操作の見え方（任意だけどおすすめ） */
.btn:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.35);
  outline-offset: 2px;
}
```

---

## 3. よくあるつまずき

- **メールボタンを押しても何も起きない**  
  → 端末にメールアプリが設定されていない場合があります（その場合はSNSリンクも用意すると安心）

- **ボタンが横に入り切らない**  
  → `contact-actions` に `flex-wrap: wrap;` が入っているか確認

- **フォームを置きたい**  
  → GitHub Pagesはサーバー処理がないので、外部フォームへのリンクが現実的です

---

## まとめ

- 連絡先は「置くだけ」で完成度が上がる  
- GitHub PagesならCTAが最短・安全  
- フォームは外部サービスへのリンクでOK  

---

## 次に読む

- 【超初心者】自己紹介ページにフッター/SNSまとめを追加する  
  → 連絡導線を置いたら、最後はフッターで全体を締めると「完成作品」になります。  
  https://qiita.com/ko_nagai_0801/items/bc964207dad0c8ff10a8
