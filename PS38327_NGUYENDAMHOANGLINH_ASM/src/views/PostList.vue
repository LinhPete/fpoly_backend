<template>
    <div>
        <Post v-for="(post, index) in posts" :key="index" :index="index" :post="post"/>
    </div>
</template>

<script setup>
    import Post from '../components/Post.vue';
    import {inject} from 'vue';
    const postManager = inject('postManager');
    const posts = postManager.getAllPosts();
</script>

<style>

</style>