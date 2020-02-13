// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

// 학습노트 모두 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 학습노트 단일 조회 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습노트 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습노트 수정 API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습노트 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
