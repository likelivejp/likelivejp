<template>
  <section class="container">
    <h2 class="title">わたしたちができること</h2>
    <div class="columns is-vcentered is-multiline is-centered">
      <div class="column is-4">
        <img src="~assets/development.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column is-4">
        <img src="~assets/it.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column is-4">
        <img src="~assets/automation.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column is-4">
        <img src="~assets/status.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column is-4">
        <img src="~assets/clipboard.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
      <div class="column is-4">
        <img src="~assets/coding.svg" width="" height="">
        <h3>foobar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dolores</p>
        <nuxt-link to="/" class="button is-rounded">くわしく見る</nuxt-link>
      </div>
    </div>
  </section>
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
  width: 100%;
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
