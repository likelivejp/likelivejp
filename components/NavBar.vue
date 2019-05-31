<template>
  <nav class="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~assets/logo.svg" width="80px" height="100%">
        <p class="name">ライクライブ<span>豊橋市・東三河で最先端のWEB開発・IT戦略を提供できるチーム</span></p>
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/posts" class="navbar-item">ブログ</nuxt-link>
        <nuxt-link to="/works" class="navbar-item">今までのお仕事</nuxt-link>
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
      this.$store.commit('closeMenu')
    }
  }
}
</script>

<style scoped lang="scss">
.name {
  font-size: 1.2rem;
  font-weight: bold;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: normal;
    @media screen and (min-width: $tablet_width + 1px) {}
    @media only screen and (min-width: $smartphone_width + 1px) and (max-width: $tablet_width) {}
    @media screen and (max-width: $smartphone_width) {
      display: none;
    }
  }
}


.navbar {
  background: none;
}
</style>
