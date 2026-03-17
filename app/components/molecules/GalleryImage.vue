<template>
<div class="gallery-item">
    <img :src="src" :alt="title">
    <div class="gallery-overlay">
        <h4>{{ title }}</h4>
    </div>
</div>
</template>

<script setup>
    defineProps({
    src:String,
    title:String
    })
</script>