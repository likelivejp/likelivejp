<template>
  <nav class="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~assets/logo.svg" width="80px" height="100%">
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">今までのお仕事</nuxt-link>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary is-rounded">
              <strong>お問い合わせ</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  watch: {
    '$route' () {
      this.isMenuActive = false
    }
  }
}
</script>

<style>
.navbar {
  background: none;
}
</style>
