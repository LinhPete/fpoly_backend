<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm sticky-top" style="height: 10vh;">
        <div class="container-fluid px-4">
            <a class="navbar-brand" style="font-size: 2rem;" href="#"><i class="fa-solid fa-ghost"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
                <form class="d-flex bg-light rounded-pill border border-2" style="overflow: hidden; width: 30%;">
                    <div class="input-group ">
                        <input class="form-control border-0" type="text" placeholder="Tìm kiếm tiêu đề ...">
                        <button class="btn" type="button">🔍</button>
                    </div>
                </form>
            </div>
            <div class="dropdown">
                <a class="d-block rounded-circle" href="#" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false"
                    style="font-size: 2rem;">
                    <i class="fa-solid fa-face-smile"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Đăng nhập/ Đăng ký</a></li>
                    <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                    <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>