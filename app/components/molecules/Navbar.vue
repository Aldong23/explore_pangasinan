<template>
  <nav class="navbar">
    <div class="logo">Explore Pangasinan</div>

    <div class="links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
  .navbar{
    display:flex;
    justify-content:space-between;
    padding:20px;
    background: #0160D6;
    color:white;
    flex-wrap:wrap;
  }

  .links a{
    margin-left:20px;
    color:white;
    text-decoration:none;
  }
</style>