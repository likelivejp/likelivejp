<template>
  <div>
    <h2 class="title is-centered">わたしたちができること</h2>
    <div class="columns">
      <div class="column">
        <img src="~assets/images/it.svg" width="" height="" alt="" />
        <h3>IT顧問サービス</h3>
        <p>
          ネットワーク構築やサービスの選択に、適切な人材をアサイン出来ていない事業主様へ。<br />
          無料ソフトウェアの選定・オリジナルシステムの開発など、業務内容に合わせた提案をさせていただきます。
        </p>
        <p>
          その他、基本的なPC操作方法や、Word・Excelの使い方、社内エンジニアの育成などもサポートさせていただきます。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/automation.svg" width="" height="" alt="" />
        <h3>業務効率化・自動化</h3>
        <p>
          大規模な開発予算がない場合や、すでにある業務の一部を改善したいお客様に。<br />
          マイクロスケールな開発で必要十分な業務効率化を図ります。
        </p>
        <p>
          また別のアプローチとして、すでに慣れ親しんだ既存ソフトウェアの橋渡しをするツールを開発・導入することで低単価でオペレーションレスな運用を実現します。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/coding.svg" width="" height="" alt="" />
        <h3>Webサイト製作</h3>
        <p>
          お客様に寄り添ったヒアリング結果を元に、ゴールに合わせてパッケージ単位でご提案をさせていただきます。
        </p>
        <p>
          通常のWebサイト製作の他、Googleビジネスをはじめとした主要サービスへの連携、LINE@への登録など一括して請け負います<br />
          また最新SaaSサービスを利用した低ランニングコストプランもご用意しております。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped lang="scss">
.columns {
  .column {
    text-align: center;
    margin: 2rem 0 2rem;
    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 2rem 0 1rem;
    }
    img {
      width: 50%;
    }
    p {
      text-align: left;
      margin: 1rem 0;
    }
  }
}
</style>
