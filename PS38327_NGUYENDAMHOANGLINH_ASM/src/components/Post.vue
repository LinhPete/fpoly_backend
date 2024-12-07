<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header bg-white d-flex">
        <div class="align-middle border me-3 rounded-circle" style="width: 50px; height: 50px; overflow: hidden;">

        </div>
        <div>
          <p class="m-0" style="font-weight: bold; font-size: 1.1rem;">{{ post.author }}</p>
          <p class="m-0" style="font-size: 0.9rem;">{{ post.postedDate }}</p>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-content">{{ post.content }}</p>
      </div>
      <img :src="post.banner" alt="" style="width: 100%;">
      <div class="card-footer bg-white p-1">
        <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up text-white bg-primary p-1 rounded-circle"></i>
          {{ post.likes }} người
          đã thích</p>
        <hr>
        <div class="d-flex mt-2">
          <button class="btn flex-fill rounded-1" @click="like"><i class="fa-solid fa-thumbs-up"></i> Thích</button>
          <button class="btn flex-fill rounded-1" @click="toggleComment"><i class="fa-solid fa-comment"></i> Bình luận</button>
        </div>
        <hr>
        <div class="container">
          <h5 class="mb-3">Các bình luận</h5>
          <div class="container mb-3">
            <div  v-show="isCommentVisible" class="mb-3">
              <form @submit.prevent="submitComment">
                <div class="mt-3">
                  <textarea v-model="commentText" cols="60" rows="3" placeholder="Nhập bình luận của bạn"
                    class="form-control mb-3"></textarea>
                </div>
                <button type="submit" class="btn btn-success">Gửi bình luận</button>
              </form>
            </div>
            <div v-for="(comment, index) in comments" :key="index">
              <div class="d-flex mb-2">
                <div class="align-middle border me-3 rounded-circle"
                  style="width: 30px; height: 30px; overflow: hidden;">

                </div>
                <p class="m-0" style="font-weight: bold; font-size: 1.1rem;">{{ comment.name }}</p>
              </div>
              <div>
                <p class="m-0">{{ comment.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { inject, ref } from 'vue';
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
});

const postManager = inject('postManager');
const userManager = inject('userManager');
const bus = inject('bus');

function like() {
  props.post.likes++;
  postManager.updatePost(props.index, props.post);
  bus.emit('data-change');
}

const commentText = ref('');

const comments = ref([]);

function submitComment() {
    if(commentText.value){
        comments.value.push({
            name: userManager.getSingleUser(localStorage.getItem('authToken')).fullname || 'Guest',
            text: commentText.value
        });

        commentText.value = '';
    }
}

const isCommentVisible = ref(false);

function toggleComment() {
  isCommentVisible.value = !isCommentVisible.value;
}
</script>

<style scoped>
.btn:hover {
  background-color: rgb(235, 235, 235);
}
</style>