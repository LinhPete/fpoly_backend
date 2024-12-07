<template>
    <div>
        <h2 class="my-3">Thông tin cá nhân</h2>
        <form @submit.prevent="updateProfile">
            <div class="mb-5 mx-auto border border-2 rounded-circle d-flex justify-content-center align-content-center"
                style="height: 250px; width: 250px; overflow: hidden;">
                <img id="preview" :src="user.avatar" alt="">
            </div>
            <div class="mb-3">
                <label for="fullName" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên"
                    v-model="user.fullname" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Nhập email" v-model="user.email"
                    required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" v-model="user.phone"
                    required>
            </div>
            <div class="mb-3">
                <label class="form-label">Giới tính</label><br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="user.gender" id="male" value="true" required>
                    <label class="form-check-label" for="male">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="user.gender" id="female" value="false">
                    <label class="form-check-label" for="female">Nữ</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Cập nhật</button>
        </form>
    </div>
</template>

<script setup>
import avatar from '../assets/avatar.png';
import { reactive, inject } from 'vue';

const userManager = inject('userManager');

const currUser = userManager.getSingleUser(localStorage.getItem('authToken'));

const user = reactive({
    id: currUser.id,
    password: currUser.password,
    fullname: currUser.fullname,
    email: currUser.email,
    phone: currUser.phone,
    gender: currUser.gender,
    avatar: currUser.avatar
});

function updateProfile(){
    userManager.updateUser(user.id -1, user);
}
</script>