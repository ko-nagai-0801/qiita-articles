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

**成果物は「作った」だけだと伝わりません。**  
最低限、**サムネ・説明文・リンク**の3点セットにするだけで、読み手が迷わなくなります。

---

## デモ / リポジトリ（関連リンク：公開後に差し替えOK）

- デモ（ポートフォリオ）：`https://ユーザー名.github.io/リポジトリ名/`
- リポジトリ（GitHub）：`https://github.com/ユーザー名/リポジトリ名`

---

## この記事でできるようになること（3行）

- 作品カードの「型」を作れる  
- 説明文を短く・強く書ける  
- リンク導線（デモ / GitHub）を迷わず置ける  

---

## 0. 先に結論（成果物はこの順で見せる）

**「何を作った → 何のために → どこが工夫」**  
これを1〜2行でOKです。

例：
- 学習用に自己紹介ページを制作（HTML/CSS）。GitHub Pagesで公開し共有できる状態にした。

---

## 1. 作品カードの最小テンプレ（コピペOK）

```html
<article class="work">
  <img
    src="thumb.webp"
    alt="作品のサムネイル"
    width="640"
    height="360"
    loading="lazy"
  >
  <div class="work__body">
    <h3 class="work__title">作品タイトル</h3>
    <p class="work__desc">
      何を作ったか（誰に/何を/目的）を1〜2行で。
    </p>
    <div class="work__links">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">デモを見る</a>
      <a href="https://github.com/xxx" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </div>
</article>
```

---

## 2. CSSの最低限（コピペOK）

```css
.work {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.work img {
  width: 100%;
  height: auto;
  display: block;
}

.work__body {
  padding: 12px;
}

.work__title {
  margin: 0 0 6px;
  font-size: 14px;
}

.work__desc {
  margin: 0 0 10px;
  font-size: 13px;
  opacity: 0.9;
}

.work__links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.work__links a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
}

.work__links a:hover {
  text-decoration: underline;
}
```

---

## 3. 説明文（1〜2行）を強くするコツ

### NG（抽象的）
- 頑張って作りました
- 学習しました

### OK（具体）
- **HTML/CSSの学習用に、1ページの自己紹介サイトを制作し公開**
- **作品カード（画像＋説明＋リンク）を実装し、見やすさを改善**

---

## 4. チェックリスト（公開前）

- [ ] サムネは重すぎない（100〜200KB目安）
- [ ] 説明文は1〜2行で言い切っている
- [ ] デモとGitHubのリンクがある
- [ ] `target="_blank"` には `rel="noopener noreferrer"` を付けた

---

## まとめ

- 成果物は「サムネ・説明文・リンク」で伝わる  
- 説明文は短く、具体的に  
- リンク導線を揃えるだけで完成度が上がる  

---

## 次に読む

- 【超初心者】ポートフォリオの導線改善（CTAと配置の型）  
  → 成果物が揃ったら、次は「見せたい場所へ誘導する」導線を整えると強くなります。  
  https://qiita.com/ko_nagai_0801/items/16e5c273e428f96e3e15
