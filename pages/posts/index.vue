<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="post in posts">
        <card
          :key="post"
          :title="contents['.tmp/json' + post + '.json']['title']"
          :image="contents['.tmp/json' + post + '.json']['image']"
          :date="contents['.tmp/json' + post + '.json']['created_at']"
          :url="post"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 920px;
  margin: 20vh auto 0;
  padding: 0 1rem;
}
</style>

<script>
// contents
import { fileMap } from '~/.tmp/summary.json';
import Card from '~/components/Card.vue'

export default {
  components: {
    Card,
  },
  data () {
    return {
      posts: this.$getPaths('posts'),
      contents: fileMap
    }
  },
  methods: {

  }
}
</script>
