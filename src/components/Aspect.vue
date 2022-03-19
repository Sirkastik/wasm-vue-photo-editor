<template>
  <div
    class="h-8 border-2 border-gray-500 rounded"
    :class="{
      'aspect-[1/1]': aspect === 1 / 1,
      'aspect-[2/3]': aspect === 2 / 3,
      'aspect-[3/2]': aspect === 3 / 2,
      'aspect-[4/3]': aspect === 4 / 3,
      'aspect-[3/4]': aspect === 3 / 4,
      'aspect-[16/9]': aspect === 16 / 9,
      'aspect-[9/16]': aspect === 9 / 16,
    }"
  ></div>
</template>

<script setup>
const props = defineProps(["aspect"]);
</script>
