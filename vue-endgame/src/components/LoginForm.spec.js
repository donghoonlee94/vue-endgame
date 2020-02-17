// import Vue from 'Vue';
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
    // const instance = new Vue(LoginForm).$mount();
    // expect(wrapper.vm.username).toBe('');
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // const idInput = wrapper.find('#username');
    // console.log(idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    const warningText = wrapper.find('.warning');
    // exists 있으면 true, 없으면 false, toBeTruthy : 앞에 있는 게 true일지 예측
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const button = wrapper.find('button');
    // username이 test이기 때문에 이메일 형식이 아니라 disabled가 되서 toBeTruthy가 통과된다.
    expect(button.element.disabled).toBeTruthy();
  });
});
