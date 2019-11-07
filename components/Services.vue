<template>
  <div>
    <div class="columns">
      <div class="column">
        <img src="~assets/images/it.svg" width="" height="" alt="">
        <h3>IT顧問サービス</h3>
        <p>
          ネットワーク構築やサービスの選択に、適切な人材をアサイン出来ていない事業主様へ。<br>
          無料ソフトウェアの選定・オリジナルシステムの開発など、業務内容に合わせた環境提案をさせていただきます。<br>
          <br>
          その他、基本的なPC操作方法や、Word・Excelの使い方、社内エンジニアの育成などもサポートさせていただきます。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/automation.svg" width="" height="" alt="">
        <h3>業務効率化・自動化</h3>
        <p>
          大規模な開発予算がない場合や、すでにある業務の一部を改善したいお客様に。<br>
          マイクロスケールな開発で必要十分な業務効率化を図ります。<br>
          また別のアプローチとして、すでに慣れ親しんだ既存ソフトウェアの橋渡しをするツールを開発・導入することで低単価でオペレーションレスな運用を実現します。
        </p>
        <!-- <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link> -->
      </div>
      <div class="column">
        <img src="~assets/images/coding.svg" width="" height="" alt="">
        <h3>Webサイト製作</h3>
        <p>
          お客様ごとのゴールに合わせたパッケージ単位でのでのご提案をさせていただきます。<br>
          売上・集客が目的のお客様や、サイトのブランド力を高めたいお客様向けなど、それぞれ最適な方法をご提案させていただきます。
          <br>
          自社紹介用のサイト立ち上げなどが目的のお客様には、最新のSaaSサービスを利用したランニングコスト無料のプランもご用意しております。
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
