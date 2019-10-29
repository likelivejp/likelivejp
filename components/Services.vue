<template>
  <div>
    <div class="columns">
      <div class="column">
        <img src="~assets/images/it.svg" width="" height="" alt="">
        <h3>運用サポート</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column">
        <img src="~assets/images/automation.svg" width="" height="" alt="">
        <h3>業務効率化・自動化</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column">
        <img src="~assets/images/coding.svg" width="" height="" alt="">
        <h3>サイト制作・開発</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
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
