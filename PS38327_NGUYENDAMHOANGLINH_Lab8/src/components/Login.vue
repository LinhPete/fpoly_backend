<template>
  <div>
    <h1>Trang đăng nhập</h1>
  <form @submit.prevent="login">
    <input type="text" placeholder="Nhập tên" v-model="username"><br>
    <button>Đăng nhập</button>
  </form>
  </div>
  
</template>

<script setup>
import {ref} from 'vue';
const username = ref('');
  function login(){
    localStorage.setItem('authToken', username.value);
  }
</script>

<style>

</style>