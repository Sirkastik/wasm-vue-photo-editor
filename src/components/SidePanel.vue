<template>
  <div class="panel h-full w-80 bg-[#1a1a1d] rounded-lg overflow-y-auto">
    <div class="contents" v-for="(section, i) in sections" :key="i">
      <div
        class="bg-[#2d2e2f] border-b border-b-[#1a1a1d] uppercase px-4 py-1 font-medium flex cursor-pointer justify-between items-center text-[14px]"
        @click="showSection[i] = !showSection[i]"
      >
        {{ section.title }} <component :is="section.icon"></component>
      </div>
      <component :is="section.$child" v-show="showSection[i]"></component>
    </div>
  </div>
</template>

<script setup>
import { sections } from "@/store/sidepanel";
import { ref } from "vue";

const showSection = ref([true, true, true, true, true]);
</script>
