<template>
  <div>
    <h2 class="title is-centered">今までのやってきたこと</h2>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="post in posts" :key="post">
        <card
          :title="content['.tmp/json' + post + '.json']['title']"
          :image="content['.tmp/json' + post + '.json']['image']"
          :date="extract_date(content['.tmp/json' + post + '.json']['created_at'])"
          :url="post"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import { fileMap } from '~/.tmp/summary.json'
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      posts: this.$getPaths('works'),
      content: fileMap
    }
  },
  methods: {
    extract_date: function(date) {
      return date.slice(0, date.search(/T/))
    }
  }
}
</script>
