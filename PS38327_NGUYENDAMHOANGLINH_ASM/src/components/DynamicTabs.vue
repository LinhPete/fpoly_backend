<script setup>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
</script>
<template>
    <div class="shadow-sm">
        <!-- Nav pills -->
    <ul class="nav nav-tabs mt-3">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#login">Đăng nhập</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#register">Đăng ký</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content" style="max-height: 500px; overflow: auto;">
        <div class="tab-pane fade active show" id="login">
            <LoginForm />
        </div>
        <div class="tab-pane fade" id="register">
            <RegisterForm />
        </div>
    </div>
    </div>
</template>