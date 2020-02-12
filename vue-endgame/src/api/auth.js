// 로그인, 회원가입, 회원 탈퇴
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';  axios.create로 공통화.
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
