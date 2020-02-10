import axios from 'axios';
import store from '@/store/index';

// env 파일에 VUE_APP_API_URL 등록 후 가져옴. VUE_APP을 붙이면 자동으로 로드(들고 올 수 있음)됨.
// vue cli 3.0 이후에 들고 있는 환경 변수 파일.
// .env.development(local)가 제일 높은 우선순위, 배포 단계에는 .env.production (npm run bulid), 둘 다 없으면 .env
// 배포하기 전 => development, 배포 후 => production, 둘 다 없을 경우 env 가 우선순위를 갖는다.

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: store.state.token,
  },
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';  axios.create로 공통화.
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
