<template>
  <div>
    <div class="container main_container">
      <h1 class="title">WEB制作</h1>
      <div class="columns">
        <div class="column">
          <img src="~assets/images/2984354.png" alt="" />
        </div>
        <div class="column">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Aliquam unde eaque praesentium, iure eius, soluta<br />
            eveniet nisi dolores magni quasi incidunt possimus modi<br />
            voluptates dicta itaque ducimus cum accusamus atque?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.container {
  margin: 5rem auto;
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
