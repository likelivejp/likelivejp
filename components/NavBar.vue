<template>
  <nav class="navbar is-spaced" :class="{'is-transparent': isTransparentNavbar, 'is-fixed-top': isFixedTop}" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~assets/logo.svg" width="80px" height="100%" alt="">
        <p class="name">ライクライブ<span>豊橋市・東三河で最先端のWEB開発・IT戦略を提供できるチーム</span></p>
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu" :class="{'is-active': isMenuActive}">
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
  data: () => {
    return {
      isMenuActive: false,
      isTransparentNavbar: true,
      isFixedTop: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    },
    handleScroll () {
      if (window.scrollY > (window.outerHeight - 230)) {
        this.isTransparentNavbar = false
      } else {
        this.isTransparentNavbar = true
      }
    }
  },
  watch: {
    '$route': function () {
      this.isMenuActive = false
      if (this.$route.path === '/') {
        this.isFixedTop = true
      } else {
        this.isFixedTop = false
      }
    }
  },
  created: function() {
    if (this.$route.path === '/') {
      this.isFixedTop = true
    } else {
      this.isFixedTop = false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
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

.is-transparent {
  background: none;
}
</style>
