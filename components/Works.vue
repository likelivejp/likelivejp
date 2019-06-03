<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="post in posts">
      <card
        :key="post"
        :title="content['.tmp/json' + post + '.json']['title']"
        :image="content['.tmp/json' + post + '.json']['image']"
        :date="content['.tmp/json' + post + '.json']['created_at']"
        :url="post"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
// content
import { fileMap } from '~/.tmp/summary.json';
import Card from '~/components/Card.vue'

export default {
  components: {
    Card,
  },
  data () {
    return {
      posts: this.$getPaths('works'),
      content: fileMap
    }
  },
}
</script>
