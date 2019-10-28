# likelivejp

nuxt.jsで制作しています。

## 記事について

content/postsまたはcontent/worksにmdファイルを作成すればビルドされるようになっています。

### 新規記事の生成

```
$ bin/postgen foobar
```

```
.
├── content
│   └── posts
│       └── 2016
│           └── 01
│               └── 02
│                   └── foobar.md
```

といった具合にテンプレートのmdを生成できます。

## 開発

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost
$ npm run dev
```

## デプロイ

masterにpushされたら自動でfirebaseにデプロイされます。
