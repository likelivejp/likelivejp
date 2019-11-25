<template>
  <section>
    <div class="container main_container">
      <section>
        <h1 class="title">ウェブサイト・アプリケーション制作、開発</h1>
        <div class="columns">
          <div class="column">
            <img src="~assets/images/2984354.png" alt="" />
          </div>
          <div class="column">
            <p>
              お客様のビジネスを理解した最適なウェブサイト・アプリケーションの制作・開発。
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia alias numquam ipsum inventore. Iste
              fugiat perferendis incidunt placeat magni exercitationem repellat quas voluptatem voluptates tempora,
              dolores aliquam obcaecati nulla veniam.
            </p>
            <a href="/contact" class="button is-rounded has-text-weight-bold">すぐにお問い合わせ</a>
          </div>
        </div>
      </section>
      <section>
        <h2 class="title">たいとるたいとるたいとる</h2>
        <div class="columns">
          <div class="column">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos quo, quis libero nesciunt molestiae
              dolorem esse, soluta tempora a repellendus sed sequi dignissimos officiis vel. Qui aliquid dolore
              voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos quo, quis libero nesciunt molestiae
              dolorem esse, soluta tempora a repellendus sed sequi dignissimos officiis vel. Qui aliquid dolore
              voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos quo, quis libero nesciunt molestiae
              dolorem esse, soluta tempora a repellendus sed sequi dignissimos officiis vel. Qui aliquid dolore
              voluptatem.
            </p>
          </div>
          <div class="column">
            <img src="https://placehold.it/500/500" alt="" />
          </div>
        </div>
      </section>
      <section>
        <h2 class="title">たいとるたいとるたいとる</h2>
        <div class="columns is-multiline">
          <div class="column is-4"><img src="https://placehold.it/300/fb7452" alt="" /></div>
          <div class="column is-4"><img src="https://placehold.it/300/fdd35f" alt="" /></div>
          <div class="column is-4"><img src="https://placehold.it/300/b8c791" alt="" /></div>
          <div class="column is-4"><img src="https://placehold.it/300/f9e07f" alt="" /></div>
          <div class="column is-4"><img src="https://placehold.it/300/308695" alt="" /></div>
          <div class="column is-4"><img src="https://placehold.it/300/b5d6fb" alt="" /></div>
        </div>
      </section>
      <section>
        <h2 class="title">料金シミュレーター</h2>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td><img src="~assets/images/startup.svg" alt="" class="option_icon" /></td>
              <td>基本料金</td>
              <td>150,000円</td>
              <td><input type="checkbox" checked="checked" disabled /></td>
            </tr>
            <tr v-for="item in items">
              <td><img :src="`/images/${item.image}.svg`" alt="" class="option_icon" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td><input type="checkbox" v-model="item.checked" /></td>
            </tr>
          </tbody>
        </table>

        <span>合計金額: {{ totalPrice }}</span>
      </section>
    </div>
  </section>
</template>

<script>
const items = [
  { name: '技術的相談・ご提案', price: 1200, image: 'advise', checked: false },
  { name: 'オプションB', price: 1400, image: '', checked: false }
]

export default {
  data() {
    return {
      basicPrice: 150000,
      items: items
    }
  },
  computed: {
    totalPrice: function() {
      return (
        this.items.reduce(function(sum, item) {
          if (item.checked === true) {
            return sum + item.price
          } else {
            return sum
          }
        }, 0) + this.basicPrice
      )
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 100px;
}

.title {
  text-align: center;
}

p {
  margin: 2rem 0;
}

.container {
  margin: 5rem auto;
  padding: 0 2rem;
  max-width: 1080px;
}

.option_icon {
  width: 75px;
}
</style>
