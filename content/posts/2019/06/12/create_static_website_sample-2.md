---
title: Nuxt.js×Firebaseでサクっと静的サイト制作[2] - Bulmaの導入とメニュー開閉スクリプト
created_at: 2019-06-12
category: nuxtjs
tags: 
  - nuxtjs
  - vue
  - javascript
  - bulma
image: https://firebasestorage.googleapis.com/v0/b/likelivejp-cdcc9.appspot.com/o/images%2Ffirebase_image.png?alt=media&token=00e158a6-1961-4739-b2f9-2372da1d52ba
author: t4traw
---
前回の記事はこちら -> [共通cssの作成と読み込み](/posts/2019/06/11/create_static_website_sample-1)

今回はcssフレームワークのBulmaの導入と、メニュー開閉の実装に関することを書きます。

## Bulmaとは？

Bulmaはcssフレームワークの1つです。他に代表的なcssフレームワークといえばBootstrapですが、最近は必要最低限の軽量CSSフレームワークを使い、ある程度自分でスタイル作成・カスタマイズしていくのが主流となっています。軽量CSSフレームワークで有名なのはMilligram, Pure, Skeletonなどがありますね。

僕は最近の制作はほとんどBulmaを採用しています。

レスポンシブデザインや面倒なヘッダー（ナビゲーションバー）などをサクっと作るためのライブラリです。自分で作るよりも遥かに早く正確に作る事ができるので、cssフレームワークは制作のベースに導入する事を強くオススメします。

[Bulma: Free, open source, & modern CSS framework based on Flexbox](https://bulma.io/)

## Bulmaのセットアップ

まずはnpmでインストールします。

```
$ npm i bulma
```

次にnuxt.config.jsに追加するのですが、カスタマイズしないとBulmaそのままなので、自分でassets/cssディレクトリ内にbulma.scssを作成します。

```scss
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

$blue: #51bdff;
$pink: #ffb3b3;
$pink-invert: #fff;
$family-serif: "SF Pro JP", "SF Pro Display", "SF Pro Icons", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
$primary: $blue;
$primary-invert: $pink-invert;
$danger: $orange;
$family-primary: $family-serif;
$navbar-height: 5rem;
$navbar-item-img-max-height: 3rem;

@import "~bulma/sass/utilities/derived-variables.sass";
@import "~bulma/bulma";
```

この辺りはドキュメントを見ながら変数をカスタマイズしていく感じですね。

書けたらnuxt.config.jsのcssで読み込みます。

```
export default {
  mode: 'universal',

  ~~~省略~~~

  css: [
    '~assets/css/bulma.scss',
  ]
}
```

## Navbarを設置してみる

さっそくnavbarを設置してみます。公式サイトにあるnavbarのコードをそのままゴソっとコピーしてきます。

[Navbar | Bulma: Free, open source, & modern CSS framework based on Flexbox](https://bulma.io/documentation/components/navbar/)

それをcomponents/Navbar.vueを作成してペーストします。

```html
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onclick="toggle_menu(this)">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
```

そして、pages/index.vueでNavbar.vueを呼び出します。

```html
<template>
  <div>
    <navbar />
    <div class="container">
      <div>
        <logo />
        <h1 class="title">
          index.vueのh1要素
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Navbar,
    Logo
  }
}
</script>
```

そしてブラウザを確認してみると

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/DyYzdGxZeiSp9uTRyfBFzJbVxRTYJMFn.png)

無事表示されました。

## メニューの開閉を実装する

さて、次はメニューの開閉です。

Nuxt.jsやVue.jsを使わない環境ではシンプルなjsをこんな感じで書いていました。

```js
function toggle_menu(el){
  const target = el.dataset.target;
  const menu = document.getElementById(target);
  el.classList.toggle('is-active');
  menu.classList.toggle('is-active');
}
window.toggle_menu = toggle_menu
```

しかし、これはNuxt.js（というかVue.js）ではうまく動きません。メニューの開閉にはVue.jsの方法で実装する必要があります。

といっても、要はtrue/falseを切り替える変数とメソッドを用意してあげれば良いだけです。

```html
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': menuOpened}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': menuOpened}">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: () => {
    return {
      menuOpened: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpened = !this.menuOpened
    },
  },
  watch: {
    '$route': function () {
      this.menuOpened = false
    }
  }
}
</script>
```

ブラウザでメニューボタンをクリックしてみると、

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/vquR5PiPIlHX4Gxiv0d24D4oHfFFp7At.png)

無事に動きました！😄🎉

## watchについて

このメニュー開閉についてですが、実は今後`<nuxt-link>`というVue routerを使うと、ページが変わってもメニューが開きっぱなしという問題が発生します。

そこでページの遷移を検知し、menuOpenedをfalseにしてあげる必要があります。watchを使って$routeを監視し、変更があったら`this.menuOpened = false`してあげる感じですね。これでちゃんとページ遷移したらメニューを閉じてくれます。

---

コンポーネントの動作やスタイルをコンポーネントの中に書ける（カプセル化）する事で、「あ、メニューの動きをちょっと変えたいな」と思ったら、その`コンポーネント.vue`を見れば理解できるので親切です👍

次はmarkdownでページの作成とパーマリンクに関することを書きます。


## Nuxt.js×Firebaseでサクっと静的サイト制作

- [Nuxt.jsのセットアップ](/posts/2019/06/10/create_static_website_sample-0)
- [共通cssの作成と読み込み](/posts/2019/06/11/create_static_website_sample-1)
- [Bulmaの導入とメニュー開閉スクリプト](/posts/2019/06/12/create_static_website_sample-2)
- [markdownでページ作成](/posts/2019/11/13/create_static_website_sample-3)
- 記事一覧ページの作成
- 静的サイトの生成
- 細々とした設定・チューニング
- Firebaseにデプロイ
