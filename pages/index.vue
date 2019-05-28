<template>
  <div class="index">
    <first-view />
    <services />
    <works />
    <contact />
    <p>{{foo}}</p>
  </div>
</template>

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
  data () {
    return {
      foo: this.$getPaths()
    }
  }
}
</script>
