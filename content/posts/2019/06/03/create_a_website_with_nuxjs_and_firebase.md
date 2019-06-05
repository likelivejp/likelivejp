---
title: NuxtJSとFirebaseで作る次世代静的サイト
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
こんにちは。@t4trawです。

ライクライブのサイトをリニューアルしました。

リニューアルするにあたってのファースト・プライオリティーは『スピード』でした。

## 細々した改善点

### nuxt.jsでhtml要素にlang属性を設定する

nuxt.jsの初期状態ではhtml要素にlang属性が設定されておらず、「<html> element does not have a [lang] attribute 」と怒られてしまいます。ので、nxut.config.jsのheadの部分に

```js
export default {
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
  // 以下省略
```

といった具合にlang属性を設定してあげます。

### 装飾的な画像に空のalt属性を設定する

HTML5では、「代替テキストが必要ではないimg要素に関しては省略が可能」のはずなのですが、Lighthouseでは「Image elements do not have [alt] attributes」と怒られてしまいます。

> Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute.

とあるので、装飾的な画像には空のalt属性をしっかり設定しました。

