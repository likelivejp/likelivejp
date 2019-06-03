<template>
<nuxt-link :to="url">
  <div class="content">
    <div class="content-image">
      <img :src="image">
    </div>
    <div class="content-body">
      <div class="media">
        <div class="media-content">
          <p class="title">{{ title }}</p>
        </div>
      </div>
      <div class="content-date">
        <time datetime="2019-05-22">2019-05-22</time>
      </div>
    </div>
  </div>
</nuxt-link>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: String,
    image: String,
    url: String,
    date: String
  },
}
</script>

<style scoped lang="scss">
.content {
  $content_box_color: #6d6862;
  color: $content_box_color;
  .content-image {
    overflow: hidden;
    width: 100%;
    height: 150px;
    position: relative;
    margin-bottom: 0.4rem;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      width: 100%;
      height: auto;
    }
  }
  .content-body {
    display: block;
    .title {
      font-size: 1.2rem;
      color: $content_box_color;
    }
  }
  .content-date {
    text-align: right;
  }
}
</style>
