<script setup>
import SideNav from './SideNav.vue';
import TopNav from './TopNav.vue';
import Post from './Post.vue';
import DynamicTabs from './DynamicTabs.vue';
import ClientInfo from './ClientInfo.vue';
import Posting from './Posting.vue';
</script>

<template>
    <div>
        <top-nav />
        <div class="container-fluid row">
            <div class="col-lg-3 col-md-2 p-0">
                <SideNav />
            </div>
            <div class="col-lg-1 col-md-1"></div>
            <div class="col-lg-5 col-md-5 p-0">
                <Posting />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <DynamicTabs />
                <ClientInfo />
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
