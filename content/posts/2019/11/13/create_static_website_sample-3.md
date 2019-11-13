---
title: Nuxt.js×Firebaseでサクっと静的サイト制作[3] - マークダウンでページ作成
created_at: 2019-11-13
category: nuxtjs
tags:
  - nuxtjs
  - vue
  - javascript
  - markdown
  - processmd
  - markdownit
image: https://firebasestorage.googleapis.com/v0/b/likelivejp-cdcc9.appspot.com/o/images%2FhzvTriP1qg1UrQPemVgq40Tu0KqfgGvw.png?alt=media&token=d17fddd1-c20b-4c48-bc20-163225c006ea
author: t4traw
---

前回の記事はこちら -> [Bulma の導入とメニュー開閉スクリプト](/posts/2019/06/12/create_static_website_sample-2)

今回はマークダウンに関する部分を書きます。

ここ数年で、すっかりプレーンテキストのフォーマットとしてマークダウンが定着してきましたね👏

自分マークダウンなしではテキストを書くのが億劫になるほど慣れてしまいました。サイトの記事にあたる部分はやはりマークダウンで書きたいと思います。

nuxtjsでマークダウンを利用する時マークダウンを一度jsonに変換した方がなにかと便利なので、processmdというツールを使用して変換したいと思います。

## processmdのインストールを動作

まずはnpmでインストールします。

```
$ npm install processmd
```

processmdは、cliでmd(マークダウンファイル)を渡すと、

```markdown
---
title: てすとたいとる
created_at: 2019-11-13
category: test
tags:
  - sample
image: https://placehold.it/100/100
---

てすとてすと
```

↑ のmdファイルを

```json
{
  "title": "てすとたいとる",
  "created_at": "2019-11-13T00:00:00.000Z",
  "category": "test",
  "tags": ["sample"],
  "image": null,
  "bodyContent": "てすとてすと",
  "bodyHtml": "<p>てすとてすと</p>\n",
  "dir": ".tmp/json",
  "base": "foobar.json",
  "ext": ".json",
  "sourceBase": "foobar.md",
  "sourceExt": ".md"
}
```

こんな感じでいい具合にjsonへ変換してくれます。FrontMatterも配列だったら配列にしてくれます。

さらにオプション`--stdout`を渡すことで、一覧のsummary.jsonも生成してくれます。

```json
{
  "fileMap": {
    ".tmp/json/foobar.json": {
      "title": "てすとたいとる",
      "created_at": "2019-11-13T00:00:00.000Z",
      "category": "test",
      "tags": ["sample"],
      "image": null,
      "dir": ".tmp/json",
      "base": "foobar.json",
      "ext": ".json",
      "sourceBase": "foobar.md",
      "sourceExt": ".md"
    }
  },
  "sourceFileArray": ["content/posts/2019/11/13/foobar.md"]
}
```

このsummary.jsonは記事の一覧などを作る時に重宝します。

最終的にはこんな感じのコマンドになります。

```
$ npx processmd "content/**/*.md" --stdout --outputDir .tmp/json > .tmp/summary.json
```

## マークダウンをhtmlに変換する

さっそくページを作成していきたいのですが、先にマークダウンをhtmlに変換する関数を作ってあげます。

するどい方は「↑のprocessmdでbodyHtmlの中にhtml生成されてるじゃない？」と思いますが、これだとマークダウンの中にhtmlを書いた時にエスケープされて出力されてしまうんですよねー。

変換にはmarkdownitというライブラリを使用します。

```
$ npm install markdown-it
```

マークダウンを自分で変換する関数を`plugins/md_to_html.js`に作成します。

```
import Vue from 'vue'
import MarkdownIt from 'markdown-it'

Vue.prototype.$mdToHtml = md => {
  let mdit = new MarkdownIt({
    html: true
  })
  return mdit.render(md)
}
```

これで`$mdToHtml`を呼び出して使えるようになりました😁

## 実際の運用などについて

マークダウンを置く場所は ↓ の感じにしておきます。

```
content/posts/2019/11/13/foobar.md
```

そして、

```
pages/posts/_yyyy/_mm/_dd/_slug/index.vue
```

を生成します。

vueファイルの中身はこんな感じにしておきます。

```html
<template>
  <section class="container">
    <article>
      <header>
        <img :src="image" alt="" />
        <h1>{{ title }}</h1>
        <div class="post-meta-data">
          <time>{{ created_at.slice(0, created_at.indexOf("T", 0)) }}</time>
        </div>
      </header>
      <div v-html="mdToHtml(bodyContent)" class="post-body"></div>
    </article>
  </section>
</template>

<script>
import { sourceFileArray } from "~/.tmp/summary.json"

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `content/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.md`
    )
  },
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/.tmp/json/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.json`),
      { params }
    )
  },
  head() {
    const title = `${this.title}`
    return {
      title: title,
    }
  },
  methods: {
    mdToHtml: function(md) {
      return this.$mdToHtml(md)
    }
  }
}
</script>

<style scoped lang="scss">
article {

}
</style>
```

htmlの方は変数を当てているだけなので、scriptの方をメインに説明します。

```js
  validate({ params }) {
    return sourceFileArray.includes(
      `content/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.md`
    )
  },
```

pages以下のディレクトリ名を`_yyyy/_mm/_dd/_slug`とする事で、vueファイルの中でparamsとして受け取れます。

↑のvalidateはurlが存在するかのチェックをしています。

```js
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/.tmp/json/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.json`),
      { params }
    )
  },
```

生成したjsonファイルを読み込んでいます。ちなみに↑の2つをmdとjsonではなく、HeadlessCMSやサーバーのAPIを使う事で流行りのJAMstack（JavaScript, APIs, and prerendered Markup）な感じのアプリケーションが作れます😆 またいずれJAMstackについては記事に書きたいと思います。

[※参考: 非同期なデータ](https://ja.nuxtjs.org/guide/async-data/)

```js
  head() {
    const title = `${this.title}`
    return {
      title: title,
    }
  },
```

title要素を設定しています。`<head>`まわりに関しては、また『細々とした設定・チューニング』の記事で書きます。

```js
  methods: {
    mdToHtml: function(md) {
      return this.$mdToHtml(md)
    }
  }
```

さきほど作成したmdをhtmlに変換する関数を設定しています。

これで、`<div v-html="mdToHtml(bodyContent)" class="post-body"></div>`と書けば、マークダウン+htmlの記事もいい感じにレンダリングできます✨

次は実際にデプロイ前の静的サイトの生成に関することを書きます。

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
