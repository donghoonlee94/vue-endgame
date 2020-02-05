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
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.logMessage = `${data.user.username} 님 환영합니다`;
      this.formInit();
    },
    formInit() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
