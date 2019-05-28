<template>
<section class="container">
  <ul>
    <nuxt-link v-for="post in posts" :key="post" :to="post">{{ contents['.tmp/json' + post + '.json']["title"] }}</nuxt-link>
  </ul>
</section>
</template>

<script>
import { fileMap } from '~/.tmp/summary.json';

export default {
  data () {
    return {
      posts: this.$getPaths(),
      contents: fileMap
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
