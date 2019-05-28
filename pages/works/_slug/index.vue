<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="post-meta"><time>{{ params.date }}</time></div>
    <div v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { sourceFileArray } from '~/.tmp/summary.json';

export default {
  validate({ params }) {
    return sourceFileArray.includes(`contents/works/${params.slug}.md`);
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/.tmp/json/works/${params.slug}.json`), { params });
  },
  head() {
    const title = `${this.title} - ライクライブ`;
    const url = `https://likelive.jp/works/${this.params.slug}/`;
    return {
      title: title,
      meta: [
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
      ],
      link: [{ rel: 'canonical', href: url }],
    };
  },
};
</script>

<style scoped>
.post-meta {
  font-size: 0.8em;
  color: #888;
  margin-top: -1rem;
  margin-bottom: 2.4rem;
  text-align: right;
}
</style>
