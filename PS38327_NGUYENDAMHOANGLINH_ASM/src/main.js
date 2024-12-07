import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import router from './routes';
import UserManager from './data/UserManager';
import PostManager from './data/PostManager';
import bus from './bus';

const app = createApp(App);
app.use(router);
app.provide('userManager', UserManager);
app.provide('postManager', PostManager);
app.provide('Swal', Swal);
app.provide('bus', bus);
app.mount('#app');
