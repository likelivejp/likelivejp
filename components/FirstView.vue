<template>
  <section class="container">
    <div class="columns is-vcentered is-multiline is-centered">
      <div class="column is-3 is-logo">
        <img src="~assets/logo.svg" width="100%" height="100%">
      </div>
      <div class="column is-7">
        <div class="is-main_q">
          <h2 class="title">WEBを使って何か仕掛けたい<span>制作から運用まで</span></h2>
          <h2 class="title">ITをもっと活用したい<span>IT化や業務効率化</span></h2>
          <h2 class="title">業務を効率化・自動化がしたい<span>ECサイト・ホームページ・WEBアプリケーション</span></h2>
        </div>
        <p class="is-main_a">そのお悩み、ライクライブがスッと解決します！</p>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.columns {
  width: 100%;
}

.is-logo {
@media screen and (min-width: $tablet_width + 1px) {
}
@media only screen and (min-width: $smartphone_width + 1px) and (max-width: $tablet_width) {
}
@media screen and (max-width: $smartphone_width) {
  display :none;
  }
}

.is-main_q {
  color: #00ffd2;
  background: -webkit-linear-gradient(70deg, #66b3ff, #00d0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.is-main_a {
  color: #ff7575;
  background: -webkit-linear-gradient(70deg, #d973fd, #ff7575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 30px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bolder;
  @include font-size(42px);
  color: #35495e;
  letter-spacing: 1px;
  span {
    font-size: 1rem;
    display: block;
  }
}
</style>
