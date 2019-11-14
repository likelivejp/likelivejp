---
title: Nuxt.js×Firebaseでサクっと静的サイト制作[1] - 共通cssの作成と読み込み
created_at: 2019-06-11
category: nuxtjs
tags: 
  - nuxtjs
  - vue
  - javascript
  - css
  - sass
image: https://firebasestorage.googleapis.com/v0/b/likelivejp-cdcc9.appspot.com/o/images%2Ffirebase_image.png?alt=media&token=00e158a6-1961-4739-b2f9-2372da1d52ba
author: t4traw
---
前回の記事はこちら -> [Nuxt.jsのセットアップ](/posts/2019/06/10/create_static_website_sample-0)

前回の記事でコンポーネントだけに影響するScoped CSSを書きましたが、複数で使うcssやライブラリのようなcssの読み込みも必要ですよね。

Nuxt.jsでの共通のcssの読み込みはassets/の下にディレクトリを配置し、nuxt.config.jsに読み込む設定を書けばOKです。

> assets/はwebpackのloaderの対象になるディレクトリになります。画像などもassets以下に置けばイイ感じに処理してくれるディレクトリです。また、webpackなどに触られたくないファイルなどはstatic/ディレクリに配置すればOKです😊 詳しくは公式ドキュメント([アセット - Nuxt.js](https://ja.nuxtjs.org/guide/assets/))にて。

## 必要なものをインストール

cssを書くのにsassを使用するので、必要なパッケージを先にインストールしておきます。

```
$ npm i node-sass sass-loader style-loader
```

## 自分で作成したcssをassets下に配置する

今回は、自分で作成するcssを以下のようなディレクトリに配置します。

```
assets
├── css
│   ├── common.scss
│   └── var.scss
```

var.scssには適当に

```scss
$primary_color: #83e6ff;
```

こんな感じで変数宣言をしておき、common.scssには

```scss
h1 {
  color: $primary_color;
}
```

という感じでスタイルを設定しました。

## sassで設定した変数を全体で利用するためにstyleResourcesで読み込む

まず、var.scssなのですが、変数を各vueコンポーネントでも使いたいですよね。その場合、styleResourcesで読み込んであげる必要があります。

```
$ npm install @nuxtjs/style-resources
```

インストールできたら、nuxt.config.jsに設定します。

```
export default {
  mode: 'universal',

  ~~~省略~~~

  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~assets/css/var.scss',
    ]
  },
```

## 共通のcssを読み込む

common.scssをnuxt.config.jsで読み込みます。

```
export default {
  mode: 'universal',

  ~~~省略~~~

  css: [
    '~assets/css/common.scss',
  ],
```

これで共通のcssの読み込みが完了しました😄

さっそく`$ npm run dev`して確認してみます。

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/uQaMZgDcnlQSCmtHGEJyK13dxtR4A6ER.png)

h1要素の色が変わっています。

## レスポンシブなフォントサイズを実現するrfsを導入する

レスポンシブサイトを制作する時に悩むポイントの1つにfont-sizeがあります。デバイスのwidth毎にしっかりサイズ設定を書くのは意外と大変です。

そんな問題を上手に解決してくれるのがrfsというライブラリです。

[rfs - npm](https://www.npmjs.com/package/rfs)

> RFS (simply the abbreviation for Responsive Font Size) is a font size engine which automatically calculates the appropriate font size based on the dimensions of the browser viewport.

rfsを使うと、デバイスの幅に合わせてフォントサイズをよしなに変更してくれます。具体的には`font-siz: calc(nrem + 0.42vw);`といったvwを利用した計算を簡単に実装してくれます。

![](https://raw.githubusercontent.com/twbs/rfs/master/.github/rfs-rescale.gif)

使い方は簡単で、まずはインストールします。

```
$ npm i rfs
```

rfsもvueコンポーネント内など全体で利用したいので、styleResourcesで読み込んであげます。

```
export default {
  mode: 'universal',

  ~~~省略~~~

  styleResources: {
    scss: [
      '@node_modules/rfs/scss.scss',
      '~assets/css/var.scss',
    ]
  },
```

こうしておくだけで、どこでも

```
h1 {
  @include font-size(4rem);
}
```

と書けば、レスポンシブなfont-sizeを実現できます。

ちょっとh1要素の`font-size: 8rem;`にしてみると、rfsを使わなければこんな感じになります。

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/MnP5UYX9EMssVK3kcfSxG9vRneRpVrQC.png)

これを`@include font-size(8rem)`とrfsを使うと、

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/yIZK8xVZWOcQS79cW6MhoWqeIIGHLeCO.png)

イイ感じにfont-sizeを変更してくれました！

---

全体に作用するcssと、sassの変数などを全体で利用する方法を書きました。

これとvueのScoped CSSを組み合わせれば辛いcssライフを卒業できるはずです。実際、僕はこれでかなりハッピーなWEBデザイン生活を送っています😆🎉

次はbulmaの導入について書きます。

## Nuxt.js×Firebaseでサクっと静的サイト制作

- [Nuxt.jsのセットアップ](/posts/2019/06/10/create_static_website_sample-0)
- [共通cssの作成と読み込み](/posts/2019/06/11/create_static_website_sample-1)
- [Bulmaの導入とメニュー開閉スクリプト](/posts/2019/06/12/create_static_website_sample-2)
- [markdownでページ作成](/posts/2019/11/13/create_static_website_sample-3)
- 記事一覧ページの作成
- 静的サイトの生成
- 細々とした設定・チューニング
- Firebaseにデプロイ
