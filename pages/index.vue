<template>
  <div class="index">
    <first-view />

    <section class="container services">
      <services />
    </section>

    <section class="container works">
      <works />
    </section>

    <section id="staff" class="container">
      <staff />
    </section>

    <section class="container contact">
      <contact :title="トップページからのお問い合わせ" />
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
import Staff from '~/components/Staff.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    FirstView,
    Services,
    Works,
    Staff,
    Contact
  }
}
</script>
