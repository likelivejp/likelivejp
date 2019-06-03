<template>
  <div class="mail_form">

    <!-- class, action, methodを変更しないでください -->
    <form class="formrun" action="https://form.run/api/v1/r/me2rz6ov8tce8lzdxd9s1uc5" method="post">
      <!-- ↓自由に要素を追加・編集することができます -->
      <div class="field">
        <label class="label">お名前</label>
        <div class="control">
          <input name="お名前" type="text" class="input">
        </div>
      </div>

      <div class="field">
        <label class="label">メールアドレス [必須]</label>
        <div class="control">
          <input class="input" name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required>
          <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
        </div>
      </div>

      <div class="field">
        <label class="label">お問い合わせ [必須]</label>
        <div class="control">
          <textarea class="textarea" name="お問い合わせ" data-formrun-required></textarea>
        <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
        </div>
      </div>

      <div>
        <label class="checkbox">
          <input type="checkbox" name="個人情報利用同意" data-formrun-required>
          個人情報利用同意 [必須]
        </label>
        <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
      </div>

      <!-- ボット投稿をブロックするためのタグ -->
      <div class="_formrun_gotcha">
        <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
        <label for="_formrun_gotcha">If you are a human, ignore this field</label>
        <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
      </div>

      <hr>

      <button class="button is-large" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
    </form>
    <script src="https://sdk.form.run/js/v2/formrun.js"></script>
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
  text-align: center;
}
</style>
