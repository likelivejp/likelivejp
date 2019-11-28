<template>
  <div class="mail_form">
    <h2 class="title is-centered">お問い合わせ</h2>
    <form class="formrun" action="/mailform" method="post">
      <div class="field">
        <label class="label">お名前<span class="required"> *必須</span></label>
        <input name="お名前" type="text" class="text input" />
      </div>

      <div class="field">
        <label class="label">メールアドレス<span class="required"> *必須</span></label>
        <input name="メールアドレス" class="text input" type="text" />
      </div>

      <div class="field">
        <input name="タイトル" type="hidden" class="text input" :value="title" />
      </div>

      <div class="field">
        <label class="label">お問い合わせ<span class="required">*必須</span></label>
        <textarea name="お問い合わせ" class="textarea"></textarea>
      </div>

      <button type="submit" class="button is-primary has-text-weight-bold">
        送信
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['title'],
  components: {}
}
</script>

<style scoped lang="scss">
.mail_form {
  max-width: 500px;
  margin: 0 auto;
}

.required {
  color: $red;
  font-size: 80%;
}
</style>
