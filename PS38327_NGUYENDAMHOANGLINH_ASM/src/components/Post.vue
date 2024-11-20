<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header bg-white d-flex">
        <div class="align-middle border me-3 rounded-circle" style="width: 50px; height: 50px; overflow: hidden;">

        </div>
        <div>
          <p class="m-0" style="font-weight: bold; font-size: 1.1rem;">Tên người đăng</p>
          <p class="m-0" style="font-size: 0.9rem;">Thời gian đăng</p>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">Tiêu đề</h3>
        <p class="card-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, amet sit
          praesentium quisquam numquam totam assumenda, aliquid qui aut, sapiente inventore ea accusantium? Quis quam
          quos tempore repellendus ut magnam.</p>
      </div>
      <img src="../assets/banner1.jpg" alt="" style="width: 100%;">
      <div class="card-footer bg-white p-1">
        <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up text-white bg-primary p-1 rounded-circle"></i> 1000 người
          đã thích</p>
        <hr>
        <div class="d-flex mt-2">
          <button class="btn flex-fill rounded-1"><i class="fa-solid fa-thumbs-up"></i> Thích</button>
          <button class="btn flex-fill rounded-1"><i class="fa-solid fa-comment"></i> Bình luận</button>
        </div>
        <hr>
        <div class="container">
          <h5 class="mb-3">Các bình luận</h5>
          <div class="container mb-3">
            <div class="d-flex mb-2">
              <div class="align-middle border me-3 rounded-circle" style="width: 30px; height: 30px; overflow: hidden;">

              </div>
              <p class="m-0" style="font-weight: bold; font-size: 1.1rem;">Tên người bình luận</p>
            </div>
            <div>

              <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in tenetur voluptate
                quibusdam nisi vel fugit dignissimos unde. Rerum perferendis facere ipsa eaque ad nemo repudiandae magni
                fugit architecto quibusdam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.btn:hover {
  background-color: rgb(235, 235, 235);
}
</style>