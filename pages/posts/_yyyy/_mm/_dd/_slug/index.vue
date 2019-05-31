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
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
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
      <div v-html="bodyHtml"></div>
    </article>

  </section>
</template>

<script>
import { sourceFileArray } from '~/.tmp/summary.json';

export default {
  validate({ params }) {
    return sourceFileArray.includes(`content/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.md`);
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/.tmp/json/posts/${params.yyyy}/${params.mm}/${params.dd}/${params.slug}.json`), { params });
  },
  head() {
    const title = `${this.title} - ライクライブ`;
    const url = `https://likelive.jp/posts/${this.params.yyyy}/${this.params.mm}/${this.params.dd}/${this.params.slug}/`;
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

<style scoped lang="scss">
section {
  margin: 6vh auto 0;
  max-width: 920px;
  padding: 0 1rem;
}

article {
  z-index: 9999;
  background-color: #fff;
  padding: 1.5rem;
  header {
    padding: 1rem 0;
    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
    }
  }
}

.post-meta {
  color: #888;
}

.bgfilter {
  position: fixed;
  background-color: #f4f5f5e6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
