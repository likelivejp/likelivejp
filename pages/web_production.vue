<template>
  <section>
    <div class="container main_container">
      <section>
        <h1 class="title">ウェブサイト制作</h1>
        <div class="columns">
          <div class="column">
            <img src="~assets/images/2984354.png" alt="" />
          </div>
          <div class="column">
            <p>お客様のビジネスを理解した最適なウェブサイトの制作。</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aut illum perferendis nemo. Voluptas
              tenetur magni corporis id, earum exercitationem eaque, cumque, dolorum facilis reprehenderit laudantium
              aliquam nostrum debitis!
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
        <div class="columns is-centered">
          <div class="column is-8">
            <h2 class="title">料金シミュレーター</h2>
            <table class="table is-fullwidth is-narrow">
              <tbody>
                <tr></tr>
                <tr v-for="item in basicItems">
                  <td><img :src="`/images/${item.image}.svg`" alt="" class="option_icon" /></td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price.toLocaleString() }}円</td>
                  <td>
                    <input type="checkbox" v-model="item.checked" class="checkbox" disabled />
                    <input type="checkbox" :name="item.name" class="hidden" />
                  </td>
                </tr>
                <tr v-for="item in optionItems">
                  <td><img :src="`/images/${item.image}.svg`" alt="" class="option_icon" /></td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price.toLocaleString() }}円</td>
                  <td><input type="checkbox" v-model="item.checked" class="checkbox" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="is-centered">
          <div class="price_board">
            合計金額:
            <span>{{ totalPrice }}</span>
            円
          </div>
        </div>
      </section>
      <section>
        <contact />
        <p>{{ optionItems }}</p>
      </section>
    </div>
  </section>
</template>

<script>
import Contact from '~/components/Contact.vue'

const basicItems = [
  { name: '基本制作料金', price: 200000, image: 'startup', checked: true },
  { name: 'スマートフォン対応', price: 0, image: 'smartphone', checked: true },
  { name: 'セキュリティ対応', price: 0, image: 'security', checked: true },
  { name: 'お問い合わせフォーム', price: 0, image: 'web-design', checked: true },
  { name: '技術相談・提案', price: 0, image: 'advise', checked: true }
]
const optionItems = [
  { name: '独自ドメイン対応', price: 12345, image: 'domain', checked: false },
  { name: 'ブログ機能', price: 12345, image: 'blog', checked: false },
  { name: 'SNS連携', price: 12345, image: 'sharing', checked: false },
  { name: '購入ボタン設置', price: 12345, image: 'cart', checked: false },
  { name: 'LINE@', price: 12345, image: 'line', checked: false },
  { name: 'Googleビジネス', price: 12345, image: 'google', checked: false },
  { name: '広告マーケティング', price: 12345, image: 'marketing', checked: false },
  { name: 'キーワードリサーチ', price: 12345, image: 'search', checked: false }
]

export default {
  components: {
    Contact
  },
  data() {
    return {
      basicPrice: 150000,
      basicItems: basicItems,
      optionItems: optionItems
    }
  },
  computed: {
    totalPrice: function() {
      return (
        this.optionItems.reduce(function(sum, item) {
          if (item.checked === true) {
            return sum + item.price
          } else {
            return sum
          }
        }, 0) + this.basicPrice
      ).toLocaleString()
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
  width: 50px;
}

table {
  tbody {
    tr {
      td {
        @include font-size(1.1rem);
        text-align: center;
        vertical-align: middle;
        &:nth-of-type(2) {
          text-align: left;
        }
        &:nth-of-type(3) {
          text-align: right;
        }
      }
    }
  }
}

@keyframes click-wave {
  0% {
    position: relative;
    width: 30px;
    height: 30px;
    opacity: 0.35;
  }
  100% {
    width: 200px;
    height: 200px;
    margin-top: -80px;
    margin-left: -80px;
    opacity: 0;
  }
}

.checkbox {
  $checkbox_color: #67d4b2;
  position: relative;
  top: 3px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease-out 0s;
  color: #ffffff;
  border: none;
  outline: none;
  background: lighten($color: desaturate($checkbox_color, 50), $amount: 28);
  appearance: none;
  &:hover {
    background: lighten($color: $checkbox_color, $amount: 15);
  }
  &:checked {
    background: $checkbox_color;
  }
  &:checked::before {
    font-size: 20px;
    line-height: 30px;
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    content: '✔';
    text-align: center;
  }
  &:checked::after {
    position: relative;
    display: block;
    content: '';
    animation: click-wave 0.65s;
    background: $checkbox_color;
  }
  &.radio {
    border-radius: 50%;
  }
  &.radio::after {
    border-radius: 50%;
  }
  label {
    line-height: 40px;
    display: block;
  }
  &:disabled {
    cursor: not-allowed;
    background: $checkbox_color;
  }
  &:disabled::before {
    font-size: 20px;
    line-height: 30px;
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    content: '✔';
    text-align: center;
  }
}

.price_board {
  background-color: #ffd587;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  display: inline-block;
  span {
    font-weight: bold;
  }
}
</style>
