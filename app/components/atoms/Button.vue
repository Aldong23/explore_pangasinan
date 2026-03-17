<template>
  <NuxtLink :to="to" class="btn">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: String
})
</script>