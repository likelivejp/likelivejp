<template>
  <section class="container">
    <style>
      html {
        background: url({{image}});
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
      }
      html:before {
        content: '';
        background: inherit;
        filter: blur(4px);
        position: fixed;
        top: -5px;
        left: 0px;
        right: 0px;
        bottom: -5px;
        z-index: -1;
      }
    </style>
    <div class="bgfilter"></div>
    <article>
      <header>
        <h1>{{ title }}</h1>
        <div class="post-meta"><time>{{ created_at.slice(0, created_at.indexOf('T', 0)) }}</time></div>
      </header>
      <div v-html="mdToHtml(bodyContent)" class="post-body"></div>

      <contact :title="title" />
    </article>
  </section>
</template>

<script>
import Contact from '~/components/Contact.vue'

import { sourceFileArray } from '~/.tmp/summary.json'

export default {
  validate({ params }) {
    return Object.assign({}, require(`~/.tmp/json/works/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.json`), { params })
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/.tmp/json/works/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.json`), { params })
  },
  head() {
    const title = `${this.title} - ライクライブ`
    const url = `https://likelive.jp/works/${this.params.yyyy}/${this.params.mm}/${this.params.dd}/${this.params.slug}/`
    return {
      title: title,
      meta: [
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
      ],
      link: [{ rel: 'canonical', href: url }],
    }
  },
  methods: {
    mdToHtml: function (md) {
      return this.$mdToHtml(md)
    }
  },
  components: {
    Contact
  }
}
</script>

<style scoped lang="scss">
section {
  margin: 6vh auto 0;
  max-width: 920px;
  padding: 0 1rem;
}
</style>
