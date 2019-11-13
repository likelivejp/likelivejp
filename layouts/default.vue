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
