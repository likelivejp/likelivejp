---
title: Nuxt.jsとFirebaseで作る次世代静的ウェブサイト
created_at: 2019-06-03
category: nuxtjs
tags: 
  - nuxtjs
  - firebase
  - vue
  - javascript
image: https://t4traw.s3-ap-northeast-1.amazonaws.com/dropshare/mjOZoMuEaHUvyOP4LHmspyZN7TaflsGM.png
author: t4traw
---
ライクライブのサイトをリニューアルしました。

今までよりも『速く』、今後もっと『インタラクティブ』なサイトにするため、Nuxt.js(Vue.js)でサイトを構築し、ホストにGoogle Firebaseを利用しました。

## Nuxt.jsのメリット

Nuxt.jsはVue.jsでサイト制作をする時に便利なVuexやRouterなどをひとまとめにしたフレームワークです。

[Nuxt.js - ユニバーサル Vue.js アプリケーション](https://ja.nuxtjs.org/)

制作したい内容によってSPA（シングルページアプリケーション）, SSR（サーバーサイドレンダリング）, 静的化といったさまざまな運用が簡単にできるのが強みです。今流行りのPWAもNuxt.jsでできますね。

今回はNuxt.jsのジェネレート機能を使って静的サイトで構築しました。

静的サイトの出力だけだったらmiddleman, jekyll, Hugo, Hexoなどいろいろありますが、

- コンポーネントの切り出し
- パッケージマネージャーがnpmだけで良いこと
- サイトの形式に柔軟（ブログスタイルやコーポレートサイトなど）
- そして素晴らしいVue.jsのScopedCSS

といった点から、Nuxt.jsを採用しました。いくつかのページを見ていただけたら、ページ遷移のスピードを実感していただけると思います。

## Firebaseのメリット

2019年現在で静的サイトをホスティングするのなら以下の4つがメジャーな候補になると思います。

- Firebase
- Netlify
- Amazon S3
- GitHub Pages

この中で、今回はFirebaseを採用しました。

Firebaseは、Googleが運営するmBaaS(mobile Backend as a Service)というモバイル・アプリケーションのサーバーサイドを簡単に提供してくれるバックエンドサービスです。

[Firebase](https://firebase.google.com/?hl=ja)

このFirebaseのサービスの中に『ホスティング』という静的ファイルをホスティングしてくれるサービスがあるのですが、無料の範囲内でも十分に高速で素晴らしいサービスとなっています。

Googleが運営するサーバー＆CDNにFastlyを利用しているので、単純に速度を求めるならFirebaseが良さそうです。静的サイトだけでなく、少しデータベースや認証機能などを導入しようと思った時にサクっと使えるのも良いですね！

ただ、FirebaseはCI(Continuous Integration)を使わないとデプロイが大変です。デプロイの簡単さを求めるならNetlifyかGitHub Pagesをオススメします。

---

これから何回かにわたって、大規模なウェブサイトでなくてもNuxt.jsやVue.jsを使った便利な静的サイトやウェブアプリケーション制作・開発に関する記事を書いていけたらと思います。

それでは。
