<template>
  <div>
  <!--
    <div class="columns">
      <div class="column">
        <img src="~assets/images/it.svg" width="" height="" alt="">
        <h3>ソフトウェア開発</h3>
        <p>
          受注管理・顧客管理など様々な業種向けのシステム開発を承ります。<br>
          既存ソフトウェアで実現できなかった機能を構築します。<br>
          また、サーバー・システムの保守管理まで一貫して行います。
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
