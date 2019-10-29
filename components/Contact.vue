<template>
  <div class="mail_form">
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="https://sdk.form.run/js/v2/formrun.js"></script>
    <form class="formrun" action="https://form.run/api/v1/r/71dsyybzgy9kj3lu3vmiptft" method="post">
      <div class="field">
        <label class="label">お名前<span class="required">*必須</span></label>
        <input name="お名前" type="text" class="text input">
      </div>

      <div class="field">
        <label class="label">メールアドレス<span class="required">*必須</span></label>
        <input name="メールアドレス" class="text input" type="text" data-formrun-type="email" data-formrun-required>
        <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
      </div>

      <div class="field">
        <label class="label">お問い合わせ<span class="required">*必須</span></label>
        <textarea name="お問い合わせ" class="textarea" data-formrun-required></textarea>
        <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
      </div>

      <div class="_formrun_gotcha">
        <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
        <label for="_formrun_gotcha">If you are a human, ignore this field</label>
        <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
      </div>

      <div class="g-recaptcha" data-sitekey="6Lcy_b8UAAAAAK7j1ZIhK7Q4bVzkKyW6Pxhxk_Dr"></div>

      <button type="submit" class="button is-primary has-text-weight-bold" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
    </form>

  </div>
</template>

<script>
export default {
  components: {
  }
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
