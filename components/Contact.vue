<template>
  <div class="mail_form">
    <form class="formrun" v-if="isSubmit === false" @submit.prevent="onSubmit">
      <h2 class="title is-centered">お問い合わせ</h2>
      <div class="field">
        <label for="company" class="label">企業・団体名</label>
        <input type="text" v-model="company" name="company" class="text input" />
      </div>

      <div class="field">
        <label for="name" class="label">担当者名 (氏名)<span class="required">*必須</span></label>
        <input type="name" v-model="name" name="name" class="text input" />
      </div>

      <div class="field">
        <label for="tel" class="label">電話番号<span class="required">*必須</span></label>
        <input type="tel" v-model="tel" name="tel" class="text input" />
      </div>

      <div class="field">
        <label for="email" class="label">メールアドレス<span class="required">*必須</span></label>
        <input type="email" v-model="email" name="email" class="text input" />
      </div>

      <div class="field">
        <label for="content" class="label">本文<span class="required">*必須</span></label>
        <textarea v-model="content" name="content" rows="7" class="textarea"></textarea>
      </div>

      <div class="field is-centered">
        <button type="submit" class="button is-primary is-large has-text-weight-bold">
          送信
        </button>
      </div>
    </form>
    <div v-if="isSubmit === true">
      <h2 class="title">お問い合わせありがとうございます</h2>
      <p>お送りいただきました内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['title'],
  data() {
    return {
      company: '',
      name: '',
      tel: '',
      email: '',
      content: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('formName', this.title)
      params.append('company', this.company)
      params.append('name', this.name)
      params.append('tel', this.name)
      params.append('email', this.email)
      params.append('content', this.content)

      axios.post('/mailform', params).then(() => {
        this.isSubmit = true
      })
    }
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
