<template>
    <h2 class="my-3">Thông tin cá nhân</h2>
    <form>
        <div class="mb-5 mx-auto border border-2 rounded-circle" style="height: 250px; width: 250px; overflow: hidden;">
            <img id="preview" class="mx-auto" src="" alt="" style="width: 110%; height: 110%;">
        </div>
        <div class="mb-3">
            <label for="photo">Thay đổi ảnh đại diện</label>
            <input class="form-control" type="file" id="photo" onchange="previewImage(event)">
        </div>
        <div class="mb-3">
            <label for="fullName" class="form-label">Họ và tên</label>
            <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên" required>
        </div>
        <div class="mb-3">
            <label for="nickName" class="form-label">Tên hiển thị</label>
            <input type="text" class="form-control" id="nickName" placeholder="Nhập tên hiển thị" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label">Số điện thoại</label>
            <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" required>
        </div>
        <div class="mb-3">
            <label class="form-label">Giới tính</label><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="male" value="male" required>
                <label class="form-check-label" for="male">Nam</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="female" value="female">
                <label class="form-check-label" for="female">Nữ</label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Cập nhật</button>
    </form>
</template>

<script>
export default {
    method: {
        previewImage(event) {
            const preview = document.getElementById('preview');
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function () {
                preview.src = reader.result;
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }
}

</script>