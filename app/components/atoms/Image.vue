<template>
    <img :src="src" :alt="alt" class="image">
</template>

<script setup>
    defineProps({
        src:String,
        alt:String
    })
</script>

<style scoped>
.image{
    width:100%;
    height:100%;
    object-fit:cover;
}
</style>