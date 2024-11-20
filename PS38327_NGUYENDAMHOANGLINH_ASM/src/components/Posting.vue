<template>
    <div class="container mt-3">
        <div class="card">
            <div class="card-header bg-white d-flex">
                <div class="align-middle border me-3 rounded-circle"
                    style="width: 50px; height: 50px; overflow: hidden;">

                </div>
                <div>
                    <p class="m-0" style="font-weight: bold; font-size: 1.1rem;">Tên người đăng</p>
                </div>
            </div>
            <div class="card-body">
                <form action="">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="title" placeholder="Nhập tiêu đề">
                        <label for="title">Tiêu đề</label>
                    </div>

                    <div class="form-floating mb-3">
                        <textarea name="" id="content" class="form-control" placeholder="Nhập nội dung"></textarea>
                        <label for="content">Nội dung</label>
                    </div>

                    <div class="mb-3">
                        <label for="photo" class="btn btn-primary me-3">
                            Chọn ảnh
                            <input type="file" id="photo" multiple hidden>
                        </label>
                        <span>Đã chọn 1 ảnh</span>
                        <img class="mt-3" src="../assets/banner1.jpg" alt="" style="width: 100%;">
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Đăng bài</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<style scoped>
</style>