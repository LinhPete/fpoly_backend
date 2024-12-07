<script setup>

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Go to home</RouterLink>
      <RouterLink to="/blogs">Go to blog list</RouterLink>
      <RouterLink to="/login">Go to login</RouterLink>
      <RouterLink to="/profile">Go to profile</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
