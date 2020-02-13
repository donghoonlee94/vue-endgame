<template>
  <div class="contents">
    <h1 class="page-header">메모 수정</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">제목 </label>
          <input id="title" type="text" v-model="title" />
          <p v-if="isTitleValid" class="validation-text warning">
            최대 20글자까지만 작성할 수 있습니다.
          </p>
        </div>
        <div>
          <label for="contents">내용 </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="isContentsValid" class="validation-text warning">
            최대 200글자까지만 작성할 수 있습니다.
          </p>
        </div>
        <button type="submit" class="btn">수정하기</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length > 200;
    },
    isTitleValid() {
      return this.title.length > 20;
    },
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #ffffff;
}
</style>
