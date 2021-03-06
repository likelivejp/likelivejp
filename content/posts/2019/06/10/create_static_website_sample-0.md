---
title: Nuxt.js×Firebaseでサクっと静的サイト制作[0] - Nuxt.jsのセットアップ
created_at: 2019-06-10
category: nuxtjs
tags: 
  - nuxtjs
  - vue
  - javascript
image: https://firebasestorage.googleapis.com/v0/b/likelivejp-cdcc9.appspot.com/o/images%2Ffirebase_image.png?alt=media&token=00e158a6-1961-4739-b2f9-2372da1d52ba
author: t4traw
---
これからNuxt.js(Vue.js)やFirebaseを使った静的サイトやWEBアプリケーションの制作・開発の記事を書いていきたいと思います。

最初はシンプルな静的サイト制作方法を書きます。

## 環境について

前提としてNode.jsがインストールされているものとします。

- nodejs(12.4.0)

## まずはセットアップ

さっそく制作を開始しましょう。nuxt.jsはコマンドライン1行で必要なものをサクっと準備してくれます。コマンド入力後、いくつか質問されるので必要に応じて入力や選択をしてください。

今回はシンプルに何もオプションを使わずにセットアップしました。『firebase-sample』というのはプロジェクト名ですので、適宜読みかえてください😊

```
$ npx create-nuxt-app firebase-sample

npx: 379個のパッケージを18.064秒でインストールしました。
> Generating Nuxt.js project in /Users/YOUR_USER_NAME/.ghq/github.com/likelivejp/firebase-sample
? Project name firebase-sample
? Project description My ultimate Nuxt.js project
? Use a custom server framework none
? Choose features to install (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Use a custom UI framework none
? Use a custom test framework none
? Choose rendering mode Universal
? Author name YOUR_NAME
? Choose a package manager npm

~~~省略~~~

  To get started:

        npm run dev

  To build & start for production:

        npm run build
        npm start
```

これで制作の準備が完了しました。さっそくサーバーを起動してみましょう。

```
$ npm run dev
```

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/Kjc8p2PH3Bj980cmROGa18D9XLhLX6Mf.png)

こんな具合にNuxt.jsのロゴが表示されていたら成功です。

## Vueのルールや書き方について

Nuxt.jsの良いところは、Vue.jsのお作法がひと目みたらわかるようになっているところだと思います。

上記のNuxt.jsのロゴ部分はpages/index.vueとcomponents/Logo.vueにコードが書いてあるのですが、pages/index.vueの中身を見てみると、

```html
<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        firebase-sample
      </h1>
      <h2 class="subtitle">
        My ultimate Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
```

こんな感じになっていると思います。

1つのvueファイルの中にそのコンポーネントで必要なコードとscript、styleを書けば良いという事が一目瞭然です。

またコンポーネントの呼び出しに関しても

```js
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
```

でコンポーネントを読み込んで、`<logo />`で呼び出せば良いという事も分かりやすいです。ちなみにLogoSampleだったら、`<logo-sample />`になります。

この大文字小文字の作法をしらなくて、誰もが「あれ？」と最初にハマりがちなのですが、わかりやすくて良いですね。

## cssをScopedに

上記のstyleですが、シンプルな`<style>`になっているので、これをScoped CSSにします。Scoped CSSとはCSSの影響範囲をコンポーネントの中だけに限定する方法です。

方法は簡単で、

```
<style scoped>
```

とstyle要素にscopedを追加するだけでOKです。

ちょっと実験してみます。Logo.vueを以下のようにし、

```html
<template>
  <h1 class="title">
    Logo.vueのh1要素
  </h1>
</template>

<style>
h1 {
  color: red;
}
</style>
```

index.vueをこんな感じにしてみます。

```html
<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        index.vueのh1要素
      </h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
```

そしてブラウザを見てみると、

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/bNpIGd4PJ6EcQWW6sc9LsQuby1CO0eae.png)

両方のh1要素が赤色になってしまいます。

Logo.vueのstyle要素にscopedを指定してみます。

![](https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/qhKfqEv0yu2CHx8409zSVcM7tppOS4sv.png)

Logo.vueのh1要素のみ赤くなりました。

WEB開発者ツールで見てみると、h1要素に「data-v-2a183b29」といった属性が設定されていて、styleも

```css
h1[data-v-05d4cbf4] {
    color: red;
}
```

といった具合にセレクターへ属性を挿入してくれているんですね。なので、コンポーネントの中だけにスタイルが適用されるようになっています。

ちなみにindexが親でLogoが子といった関係なので、逆にindexのほうにscopedを指定しても子のコンポーネントに影響してしまうので注意が必要です。

---

次は共通のcssと読み込みについて書きたいと思います。

それでは。

## Nuxt.js×Firebaseでサクっと静的サイト制作

- [Nuxt.jsのセットアップ](/posts/2019/06/10/create_static_website_sample-0)
- [共通cssの作成と読み込み](/posts/2019/06/11/create_static_website_sample-1)
- [Bulmaの導入とメニュー開閉スクリプト](/posts/2019/06/12/create_static_website_sample-2)
- [markdownでページ作成](/posts/2019/11/13/create_static_website_sample-3)
- 記事一覧ページの作成
- 静的サイトの生成
- 細々とした設定・チューニング
- Firebaseにデプロイ
