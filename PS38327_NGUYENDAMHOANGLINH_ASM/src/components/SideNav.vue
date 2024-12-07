<template>
  <div class="container">
    <div class="list-group">
      <RouterLink class="list-group-item list-group-item-action rounded-3 my-1 border-0" to="/">Trang chủ</RouterLink>
      <RouterLink class="list-group-item list-group-item-action rounded-3 my-1 border-0" to="/me">Thông tin cá nhân</RouterLink>
    </div>
  </div>

</template>

<style scoped>
.container{
  overflow: auto; 
  position: sticky; 
  top: 10vh;
  height: 90vh;
}
a{background-color: rgb(247, 247, 247);}
a:hover {background-color: lightgray;}
</style>