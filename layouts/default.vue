<template>
  <div class="default">
    <nav-bar />
    <nuxt />
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

<style>

</style>
