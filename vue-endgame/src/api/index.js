import axios from 'axios';
import { setInterceptors } from './common/interceptors';
// import store from '../store';

// env 파일에 VUE_APP_API_URL 등록 후 가져옴. VUE_APP을 붙이면 자동으로 로드(들고 올 수 있음)됨.
// vue cli 3.0 이후에 들고 있는 환경 변수 파일.
// .env.development(local)가 제일 높은 우선순위, 배포 단계에는 .env.production (npm run bulid), 둘 다 없으면 .env
// 배포하기 전 => development, 배포 후 => production, 둘 다 없을 경우 env 가 우선순위를 갖는다.

// instance로 Token을 같이 실어보내지만, axios.create는 처음 create 될 때 store.state.token 값을 본다.
// 그렇기에, state.token은 아무런 값을 가지지 않은 상태로, token이 정상적으로 보내지지 않는다.
// 이를 해결하기 위해 axios interceptor를 사용하면 된다.

// 엑시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token
    // }
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';  axios.create로 공통화.
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 조회 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
