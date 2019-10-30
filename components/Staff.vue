<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-10">
        <div class="columns is-vcentered is-card">
          <div class="column is-3">
            <img src="~assets/images/staff-1.png" alt="">
          </div>
          <div class="column is-9">
            <h2 class="title">Staff name</h2>
            <div class="career">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. mollitia totam voluptas incidunt. </p>
              <p>At enim nisi vero quidem odit facilis ea minus optio error? Perferendis necessitatibus dolores numquam saepe voluptatem libero, </p>
            </div>
            <div class="skills"><span class="tag is-success">html</span><span class="tag is-success">css</span><span class="tag is-success">javascript</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="scss">
.is-card {
  box-shadow: 1px 1px 5px #d0d0d0;
  padding: 5px 20px;
}
.skills {
  span {
    background-color: #a5d8b7;
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
