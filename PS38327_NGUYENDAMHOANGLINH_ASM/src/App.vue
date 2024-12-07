<script setup>
import { RouterView } from 'vue-router';
import {inject} from 'vue';
import SideNav from './components/SideNav.vue';
import TopNav from './components/TopNav.vue';

const userManager = inject('userManager');
const postManager = inject('postManager');
const bus = inject('bus');

bus.on('data-change', () => {
  userManager.init();
  postManager.init();
});

userManager.init();
postManager.init();

</script>

<template>
  <div>
    <TopNav />
    <div class="container-fluid row">
      <div class="col-lg-3 col-md-2 p-0">
        <SideNav />
      </div>
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-5 col-md-5 pt-3">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  min-height: 90vh;
  background-color: rgb(247, 247, 247);
}
</style>
