<template>
  <div class="card">
    <div class="card-image">
      <Image :src="image" :alt="title"/>
    </div>
  
    <div class="card-content">
      <h3> {{title}}</h3>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    image:String,
    title:String,
    description:String
  })
</script>

<style scoped>
  .card{
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,.1);
  transition:.3s;
  }

  .card:hover{
  transform:translateY(-6px);
  }

  .card-image{
    height:220px;
  }

  .card-content{
    padding:20px;
  }
</style>