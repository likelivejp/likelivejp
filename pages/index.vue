<template>
  <div class="index">
    <first-view />

    <section class="container services">
      <h2 class="title">わたしたちができること</h2>
      <services />
    </section>

    <section class="container works">
      <h2 class="title">いままでやってきたこと</h2>
      <works />
    </section>

    <section class="container contact">
      <h2 class="title">おといあわせ</h2>
      <contact />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.container {
  margin: 10rem auto;
  padding: 0 2rem;
  max-width: 1080px;
}
</style>

<script>
import FirstView from '~/components/FirstView.vue'
import Services from '~/components/Services.vue'
import Works from '~/components/Works.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    FirstView,
    Services,
    Works,
    Contact,
  },
  beforeMount () {
    this.$store.commit('fixedTopNavbar')
  },
  beforeDestroy () {
    this.$store.commit('nonFixedTopNavbar')
  }
}
</script>
