import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // request 하기 전에
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      // request 후 에러가 발생한 경우,
      return Promise.reject(error);
    },
  );
  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // response 하기 전에,
      return response;
    },
    function(error) {
      // response 후 에러가 발생한 경우,
      return Promise.reject(error);
    },
  );
  return instance;
}
