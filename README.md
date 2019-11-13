# likelivejp

## 記事について

content/postsまたはcontent/worksにmdファイルを作成すればビルドされるようになっています。

```
.
├── content
│   └── posts
│       └── 2016
│           └── 01
│               └── 02
│                   └── foobar.md
```

といった具合のディレクトリ構成でお願いします。

## 開発

``` bash
# 依存パッケージのインストール
$ npm install

# 新規記事の生成
$ npm run new YOUR_PAGE_TITLE

# ローカルサーバーの起動
$ npm run dev
```

## デプロイ

masterにpushされたら自動でfirebaseにデプロイされます。
