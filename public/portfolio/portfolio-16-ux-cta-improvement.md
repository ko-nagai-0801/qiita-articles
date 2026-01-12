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

**作品が見られない最大の原因は「導線が弱い」ことです。**  
CTA（行動ボタン）と配置を“型”で揃えれば、押されやすさが一気に上がります。

---

## この記事でやること（3行）

- CTA（行動ボタン）を作る
- 置く場所を2か所にする
- 文章を短くわかりやすくする

## 対象読者

- 1カラムのポートフォリオを作れた人
- 作品をもっと見てもらいたい人

---

## 0. そもそもCTAとは？

CTA = **Call To Action（行動してもらうためのボタン/リンク）** です。  
例：
- 「作品を見る」
- 「お問い合わせ」
- 「GitHubを見る」

---

## 1. CTAは「2か所」に置く

**おすすめは「プロフィール下」と「フッター前」**です。  
スクロールの途中と最後に置くと、押されやすくなります。

### HTML（例）

~~~html
<a class="primary-cta" href="#works">作品を見る</a>
~~~

---

## 2. CTAの文は短く具体的に

- NG：お問い合わせはこちら
- OK：**作品を見る / GitHubを見る / 連絡する**

**動詞から始める**と行動されやすいです。

---

## 3. 作品セクションへ「戻りやすく」する

CTAのリンク先は **`#works`** のように、
ページ内リンクを使うと迷いません。

~~~html
<section class="works" id="works">
  <h2>Works</h2>
  ...
</section>
~~~

---

## 4. CTAのデザイン（最低限）

~~~css
.primary-cta {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 18px;
  background: #1d4ed8;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
}

.primary-cta:hover {
  opacity: 0.9;
}
~~~

---

## 5. よくある失敗

- **CTAが多すぎる**  
  → 1つに絞る（「作品を見る」だけでOK）

- **CTAが目立たない**  
  → 背景色を付ける、余白を増やす

---

## まとめ

- CTAは「2か所」だけで効果が出る
- 文は短く、動詞で始める
- デザインはシンプルでOK
