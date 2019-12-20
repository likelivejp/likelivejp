<template>
  <section>
    <div class="container main_container">
      <section>
        <h1 class="title">ウェブサイト制作</h1>
        <div class="columns is-variable is-8">
          <div class="column">
            <img src="~assets/images/web_production/business.svg" alt="" />
          </div>
          <div class="column">
            <p>お客様のご要望・ビジネススケールに合わせた最適なウェブサイトを提案・制作します。</p>
            <p>
              私たちはただウェブサイトを制作するのではなく、お客様のパートナーとして
              <br />
              より効率良い、コストパフォーマンスに優れたウェブサイト制作をご提案致します。
              <br />
              <br />
              費用負担の大きい大規模なウェブサイト・サービス制作をしたのに効果がみられない・・・
              <br />
              ウェブでの集客を考えているが、何からはじめて良いかわからない。
              <br />
              お客様に寄り添ったウェブサイト・サービス制作で戦略的にお客様を応援します。
            </p>
            <a href="/contact" class="button is-link is-rounded has-text-weight-bold">見積もりを依頼</a>
          </div>
        </div>
      </section>

      <section>
        <h2 class="title">どんなサイトを作れば良いのか</h2>
        <div class="columns">
          <div class="column">
            <p>
              お客様のご要望は様々かと存じます。
              <br />
              会社の宣伝をしたい……
              <br />
              新しい商材を販売したい……
              <br />
              自社ショッピングサイトを作りたい……
              <br />
              実際の広告・販売の戦略により、作るべきウェブサイトの規模は異なってくるはずです。
            </p>
            <p>
              私たちはお客様の意見を十分にヒアリングした上で、持てる経験と知識を遺憾なく発揮し、無駄なコストをかけず、着実に・最大限に効果がのぞめる方法をご提案させていただきます。
            </p>
            <p>
              また、当然ウェブサイトは作って終わりではありません。
              <br />
              ウェブサイトの運用から広告戦略などのアドバイスも含め、最後までご満足いただける結果が出せるようフォローします。
            </p>
          </div>
          <div class="column">
            <img src="~assets/images/web_production/rush-15.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h2 class="title">充実した標準サービス</h2>
        <div class="columns">
          <div class="column">
            <img src="~assets/images/web_production/rush-8.png" alt="" />
          </div>
          <div class="column">
            <p>ライクライブでは、他社では別途有料オプションになりがちな、</p>
            <ul>
              <li>スマートフォン対応</li>
              <li>お問い合わせフォーム</li>
              <li>セキュリティ対応</li>
            </ul>
            <p>といった、現代では必要不可欠な要素を標準で対応しています。</p>
            <p>
              また、ブログ機能（CMS対応）の追加、ファイルダウンロード機能、独自ドメインの取得代行・設定などにも対応しています。
            </p>
            <p>また、コストが高くなりがちなサーバー費用も、0円で抑える運用方法などを提案しています。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="title">たいとるたいとるたいとる</h2>
        <div class="columns is-variable is-8 is-multiline">
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/web_design.svg" />
              <h3 class="title is-small">コーポレートサイト制作</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/landing_page.svg" />
              <h3 class="title is-small">ランディングページ制作</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/strategy.svg" />
              <h3 class="title is-small">ウェブ戦略</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/shop.svg" />
              <h3 class="title is-small">ネットショップ構築</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/owned_media.svg" />
              <h3 class="title is-small">オウンドメディア制作</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="service_card">
              <img src="~assets/images/web_production/startup.svg" />
              <h3 class="title is-small">その他・ウェブ制作</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <contact />
      </section>
    </div>
  </section>
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Contact
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

.service_card {
  img {
    max-height: 280px;
  }
}
</style>
