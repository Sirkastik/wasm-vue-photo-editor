<template>
  <div
    class="border-b border-b-[#2d2e2f] px-4 py-4 flex justify-around text-xl"
  >
    <rotate-left-icon
      class="cursor-pointer"
      @click="$editor.dispatch('rotate_ccw')"
    />
    <rotate-right-icon
      class="cursor-pointer"
      @click="$editor.dispatch('rotate_cw')"
    />
    <flip-h-icon class="cursor-pointer" @click="$editor.dispatch('flip_v')" />
    <flip-v-icon class="cursor-pointer" @click="$editor.dispatch('flip_h')" />
  </div>
</template>

<script setup>
import RotateLeftIcon from "../icons/RotateLeftIcon.vue";
import RotateRightIcon from "../icons/RotateRightIcon.vue";
import FlipHIcon from "../icons/FlipHIcon.vue";
import FlipVIcon from "../icons/FlipVIcon.vue";
</script>
