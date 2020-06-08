<template>
  <div class="index">
    <section class="hero is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav-bar />
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <section class="container">
          <div class="columns is-vcentered is-multiline is-centered">
            <div class="column is-3 is-logo">
              <img src="~assets/logo.svg" width="100%" height="100%" alt />
            </div>
            <div class="column is-7">
              <div class="is-main_q">
                <h2 class="title">
                  Webを使って何か仕掛けたい
                  <span>Webサイトや広告での集客、ネット販売の運用など</span>
                </h2>
                <h2 class="title">
                  業務を効率化・自動化がしたい
                  <span>大掛かりな改善から小さな作業自動化なども</span>
                </h2>
                <h2 class="title">
                  夢を実現したい
                  <span>社会を楽しく・面白くする事業を全力で応援します</span>
                </h2>
              </div>
              <p class="is-main_a">そのお悩み、ライクライブが解決します！</p>
            </div>
          </div>
        </section>
      </div>

      <div class="hero-foot"></div>
    </section>

    <section class="services container">
      <services />
    </section>

    <section class="works container">
      <works />
    </section>

    <section class="staff container">
      <staff />
    </section>

    <section class="contact container">
      <contact :title="contactFormTitle" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.navbar-item {
  color: #fff;
}

.container {
  margin: 0 auto;
  padding: 4rem 2rem;
  max-width: 1080px;
}

.hero {
  background-image: url('~assets/images/hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .container {
    margin: 0 auto;
    padding: 0 1rem;
  }
  .hero-body {
    padding: 0 0 3rem;
  }
}

.container {
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.columns {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 70vh;
}

.is-logo {
  @media screen and (min-width: $tablet_width + 1px) {
  }
  @media only screen and (min-width: $smartphone_width + 1px) and (max-width: $tablet_width) {
    display: none;
  }
  @media screen and (max-width: $smartphone_width) {
    display: none;
  }
}

.is-main_q {
  color: #1beeff;
  background: -webkit-linear-gradient(70deg, #408cff, #1beeff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.is-main_a {
  color: #ff7575;
  background: -webkit-linear-gradient(70deg, #ef00ff, #ff4200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 30px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: bolder;
  @include font-size(2.2rem);
  color: #35495e;
  letter-spacing: 1px;
  text-align: left;
  span {
    @include font-size(1rem);
    display: block;
  }
}
</style>

<script>
import NavBar from '~/components/NavBar.vue'
import Services from '~/components/Services.vue'
import Works from '~/components/Works.vue'
import Staff from '~/components/Staff.vue'
import Contact from '~/components/Contact.vue'

export default {
  layout: 'hero',
  components: {
    NavBar,
    Services,
    Works,
    Staff,
    Contact
  },
  data() {
    return {
      contactFormTitle: 'トップページからのお問い合わせ'
    }
  }
}
</script>
