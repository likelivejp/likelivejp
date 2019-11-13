<template>
  <div>
    <section class="container">
      <Works />
    </section>
  </div>
</template>

<script>
import Works from '~/components/Works.vue'

export default {
  components: {
    Works
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 920px;
  margin: 10vh auto 0;
  padding: 0 2rem;
}
</style>
