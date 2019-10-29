<template>
  <div>
    <div class="columns">
      <div class="column">
        <img src="~assets/images/it.svg" width="" height="" alt="">
        <h3>IT顧問サービス</h3>
        <p>
          生産性の向上や、業務効率化にITを活用しましょう<br>
          人材不足で適切なソフトウェア導入検討が出来ていない場合や、更なるサービス提供・顧客満足度を高めるたいといったお客様に<br>
          新規サービスの製作はもちろん、既存ソフトウェアの導入検討などもお手伝いします
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/coding.svg" width="" height="" alt="">
        <h3>業務効率化・自動化</h3>
        <p>
          大規模な開発予算がない場合や、すでにある業務の一部を改善したいお客様に。<br>
          マイクロスケールな開発で必要十分な業務効率化を図ります。<br>
          また別のアプローチとして、すでに慣れ親しんだ既存ソフトウェアの橋渡しを
          するツールを開発・導入することで低単価でオペレーションレスな運用を実現します。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/automation.svg" width="" height="" alt="">
        <h3>Webサイト製作</h3>
        <p>
          コーポレートサイトから、スピードの必要なランディングページまで<br>
          お客様のご要望に応じて柔軟に対応致します。<br>
          サイトの構築から保守管理まで一貫して行います。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}

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
