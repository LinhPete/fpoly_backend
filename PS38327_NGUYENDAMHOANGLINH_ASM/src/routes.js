import { createRouter, createWebHashHistory } from "vue-router";
import PostList from "./views/PostList.vue";
import Post from "./components/Post.vue";
import Posting from "./components/Posting.vue";
import ClientInfo from "./components/ClientInfo.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const isAuthenticated = false;

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Home', component: PostList },
        { path: '/post/:id', name: 'Post', component: Post },
        { path: '/posting', name: 'Posting', component: Posting, meta: { requiresAuth: true }},
        { path: '/profile', alias: '/me', name: 'ClientInfo', component: ClientInfo, meta: { requiresAuth: true }},
        { path: '/login', name: 'Login', component: LoginForm },
        { path: '/register', name: 'Register', component: RegisterForm },
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('authToken')
    if(to.matched.some((record) => record.meta.requiresAuth) && !token){
        next({name: 'Login'});
    } else {
        next();
    }
});

export default router;