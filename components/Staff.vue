<template>
  <div>
    <h2 class="title is-centered">スタッフ</h2>
    <div class="columns is-centered">
      <div class="column is-10">
        <div class="columns is-vcentered is-card">
          <div class="column is-3">
            <img src="~assets/images/staff-masaki.jpg" alt="" />
          </div>
          <div class="column is-9">
            <h2 class="title">森山 真樹 (@masaquid)</h2>
            <div class="career">
              <p>
                前職Webプログラマー・ネットワークエンジニア<br />
                現職ではお客様との交渉・ヒアリングに特化し、エンジニア時代に不足していたスキルを補っています<br />
                <br />
                お客様のご意見を丁寧にヒアリングし、その上で技術的に最適な提案をすることで<br />
                お客様に寄り添った精度の高いサービス製作が出来るような配慮を心がけています。<br />
                <br />
                趣味はロードバイクとゲーム。<br />
                自分を見つめ直して、ストイックに打ち込める所が好きです。
              </p>
              <!-- <p>
                <h4>【略歴】</h4>
                平成14年～ Webサイト製作の学習開始<br>
                平成16年～ プログラミングスクールでJavaを学習<br>
                平成18年～ フリーランスでWeb製作・Javascript/PHPの学習<br>
                平成20年～ PHPプログラマー・ネットワークエンジニアとして就職<br>
                平成23年～ プログラマー離職<br>
                平成24年～ 販促品やオリジナルグッズの販売・製作会社に就職<br>
                平成27年～ RubyやPythonなどの言語学習を通じて、個人規模での開発を再開
              </p> -->
            </div>
            <div class="profession">
              <span class="tag is-warning">エンジニア</span>
              <span class="tag is-warning">ディレクション</span>
              <span class="tag is-warning">プロデュース</span>
              <span class="tag is-warning">セールスプロモーション</span>
            </div>
            <div class="skills">
              <span class="tag is-success">HTML</span>
              <span class="tag is-success">CSS</span>
              <span class="tag is-success">Javascript</span>
              <span class="tag is-success">PHP</span>
              <span class="tag is-success">Ruby</span>
              <span class="tag is-success">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped lang="scss">
.is-card {
  box-shadow: 1px 1px 5px #d0d0d0;
  padding: 5px 20px;
}
.profession {
  span {
    margin-right: 0.2rem;
  }
}
.skills {
  span {
    margin-right: 0.2rem;
  }
}
.columns {
  .column {
    margin: 2rem 0 2rem;
    img {
      border-radius: 9999px;
    }
    p {
      text-align: left;
      margin: 1rem 0;
    }
  }
}
.career {
  p {
    @include font-size(1rem);
  }
  h4 {
    margin: 10px 0 5px;
  }
}
.skills {
  margin-top: 0.8rem;
}

.is-vcentered {
  @media screen and (min-width: $tablet_width + 1px) {
  }
  @media only screen and (min-width: $smartphone_width + 1px) and (max-width: $tablet_width) {
    text-align: center;
    img {
      max-width: 70%;
    }
  }
  @media screen and (max-width: $smartphone_width) {
    text-align: center;
    img {
      max-width: 70%;
    }
  }
}
</style>
