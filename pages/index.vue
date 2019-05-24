<template>
  <div class="index">
    <first-view />
    <services />
    <works />
  </div>
</template>

<script>
import FirstView from '~/components/FirstView.vue'
import Services from '~/components/Services.vue'
import Works from '~/components/Works.vue'

export default {
  components: {
    FirstView,
    Services,
    Works,
  }
}
</script>
