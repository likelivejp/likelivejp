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
    Works,
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 920px;
  margin: 20vh auto 0;
  padding: 0 1rem;
}
</style>

