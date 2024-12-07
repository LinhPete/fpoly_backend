<template>
    <div class="container bg-white border shadow-sm px-4">
        <h2 class="mt-3">Form Đăng Ký Thông Tin</h2>
        <form @submit.prevent="register()">
            <div class="mb-3">
                <label for="name" class="form-label">Họ tên</label>
                <input type="text" class="form-control" id="name" placeholder="Nhập số điện thoại " v-model="newUser.fullname"
                    required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại " v-model="newUser.phone"
                    required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Nhập email" v-model="newUser.email"
                    required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" v-model="newUser.password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu" v-model="confirmPassword"
                    required>
            </div>
            <button type="submit" class="btn btn-primary mb-3">Đăng Ký</button>
        </form>
    </div>
</template>

<script setup>
import { ref,reactive, inject } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const userManager = inject('userManager');
const Swal = inject('Swal');
const bus = inject('bus');

const newUser = reactive({
    id: userManager.getAllUsers().length + 1,
    password: "",
    fullname: "",
    email: "",
    phone: "",
    gender: true,
    avatar: ""
});

const confirmPassword = ref('');

function register(){
    if(newUser.password != confirmPassword.value){
        Swal.fire({
            icon: "error",
            title: "password and confirm password not matched",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        userManager.addUser(newUser);
        bus.emit('data-change');
        Swal.fire({
            icon: "success",
            title: "Register success, you can now log in",
            showConfirmButton: false,
            timer: 1500
        });
        router.push("/login");
    }
}
</script>