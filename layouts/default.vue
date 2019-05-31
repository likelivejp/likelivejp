<template>
  <div class="default">
    <nav-bar />
    <div class="main">
      <nuxt />
    </div>
    <footer-container />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterContainer from '~/components/FooterContainer.vue'

// document.addEventListener('scroll', () => {
//   const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
//   store.commit('updateScrollTop', scrollTop)
// })

export default {
  components: {
    NavBar,
    FooterContainer
  }
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
