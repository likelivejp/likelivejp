---
title: Nuxt.jsとFirebaseで作る次世代静的ウェブサイト
created_at: 2019-06-03
category: nuxtjs
tags: 
  - nuxtjs
  - firebase
  - vue
  - javascript
image: https://likelive.s3-ap-northeast-1.amazonaws.com/nuxtjs-firebase.png
author: t4traw
---
ライクライブのサイトをリニューアルしました。

今までよりも『速く』、今後もっと『インタラクティブ』なサイトにするため、Nuxt.js(Vue.js)でサイトを構築し、ホストにGoogle Firebaseを利用しました。

## Nuxt.jsのメリット

Nuxt.jsはVue.jsでサイト制作をする時に便利なVuexやRouterなどをひとまとめにしたフレームワークです。

制作したい内容によってSPA（シングルページアプリケーション）, SSR（サーバーサイドレンダリング）, 静的化といったさまざまな運用が簡単にできるのが強みです。今流行りのPWAもNuxt.jsでできますね。

今回はNuxt.jsのジェネレート機能を使って静的サイトで構築しました。

静的サイトの出力だけだったらmiddleman, jekyll, Hugo, Hexoなどいろいろありますが、

- コンポーネントの切り出し
- パッケージマネージャーがnpmだけで良いこと
- サイトの形式に柔軟（ブログスタイルやコーポレートサイトなど）
- そして素晴らしいVue.jsのScopedCSS

といった点から、Nuxt.jsを採用しました。いくつかのページを見ていただけたら、ページ遷移のスピードを実感していただけると思います。

これから何回かにわたって、そこまで大きなウェブサイトでなくてもNuxt.jsやVue.jsを使った便利な静的サイトやウェブアプリケーションに関する記事を書いていけたらと思います。

