<template>
  <div class="contents">
    <div
      class="border-b border-b-[#2d2e2f] px-4 py-2 cursor-pointer"
      @click="$editor.dispatch('brighten')"
    >
      Brightness
    </div>
    <div
      class="border-b border-b-[#2d2e2f] px-4 py-2 cursor-pointer"
      @click="$editor.dispatch('contrast')"
    >
      Contrast
    </div>
    <div
      class="border-b border-b-[#2d2e2f] px-4 py-2 cursor-pointer"
      @click="$editor.dispatch('sharpen')"
    >
      Sharpness
    </div>
    <div
      class="border-b border-b-[#2d2e2f] px-4 py-2 cursor-pointer"
      @click="$editor.dispatch('blur')"
    >
      Blur
    </div>
  </div>
</template>

<script setup></script>
