<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">닉네임: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // response.data 의 구조 분해 문법
      const { data } = await registerUser(userData);
      console.log(data);
      this.initForm();
      this.logMessage = `${data.username} 님 가입을 환영합니다.`;
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
