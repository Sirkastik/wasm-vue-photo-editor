<template>
  <div
    class="fixed bottom-8 left-8 right-8 rounded-lg justify-around flex bg-[#2d2e2f] py-4"
  >
    <div class="contents" v-for="(section, i) in sections" :key="i">
      <div
        class="md:border-b md:border-b-[#1a1a1d] uppercase px-4 py-1 font-medium flex cursor-pointer justify-between items-center text-[14px]"
        @click="toggleSection(i)"
      >
        <span class="hidden md:inline">{{ section.title }}</span>
        <component :is="section.icon"></component>
      </div>
      <div class="fixed bottom-24 right-8 left-8 bg-[#2d2e2f] rounded-lg">
        <component :is="section.$child" v-if="showSection === i"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sections } from "@/store/sidepanel";
import { ref } from "vue";

const showSection = ref(null);

const toggleSection = (i) => {
  if (showSection.value === null) return (showSection.value = i);
  if (showSection.value === i) return (showSection.value = null);
  return (showSection.value = i);
};
</script>
