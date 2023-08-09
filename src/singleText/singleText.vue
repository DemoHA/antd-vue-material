<template>
  <span class="single-text" :style="{ color, fontSize: size + unit }"><slot></slot></span>
</template>
<script setup lang="ts">
defineProps<{
  size: number;
  color: string;
  unit: string;
}>();
</script>
<style scoped>
.single-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
}
</style>
