<template>
    <div class="container bg-white border shadow-sm px-4">
        <h2 class="mt-3">Form đăng nhập</h2>
        <form @submit.prevent="login">
            <div class="mt-3">
                <label for="username" class="form-label">Số điện thoại hoặc email</label>
                <input type="text" class="form-control" id="username" placeholder="Nhập số điện thoại hoặc email"
                    v-model="username" required>
            </div>

            <div class="mt-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" v-model="password"
                    required>
            </div>

            <div class="my-3">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
    </div>

</template>

<script setup>
import { ref, inject } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const Swal = inject('Swal');
const bus = inject('bus');

const username = ref('');
const password = ref('');
const userManager = inject('userManager');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s\-()]{9,15}$/;


function login() {
    let user;
    if (emailRegex.test(username.value)) {
        user = userManager.getUserByEmail(username.value);
    } else if (phoneRegex.test(username.value)) {
        user = userManager.getUserByPhone(username.value);
    }

    if (!user || (user && user.password != password.value)) {
        Swal.fire({
            icon: "error",
            title: "username or password is incorrect",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        localStorage.setItem('authToken', user.id);
        bus.emit('loginSuccess', user.id);
        Swal.fire({
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500
        });
        router.push('/');
    }
}
</script>

<style scoped></style>