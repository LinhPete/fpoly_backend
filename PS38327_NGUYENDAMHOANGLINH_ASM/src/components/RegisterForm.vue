<template>
    <div class="container bg-white border shadow-sm px-4">
    <h2 class="mt-3">Form Đăng Ký Thông Tin</h2>
            <form>
                <div class="mb-3">
                    <label for="username">Số điện thoại hoặc email</label>
                <input type="text" class="form-control" id="username" placeholder="Nhập số điện thoại hoặc email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mật khẩu</label>
                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu" required>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="terms" required>
                    <label class="form-check-label" for="terms">
                        Tôi đồng ý với các điều khoản và điều kiện
                    </label>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Đăng Ký</button>
            </form>
        </div>
</template>