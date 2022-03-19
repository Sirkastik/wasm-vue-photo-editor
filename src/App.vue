<script setup>
import SidePanel from "./components/SidePanel.vue";
import TopBar from "./components/TopBar.vue";
import MainPanel from "./components/MainPanel.vue";
</script>

<template>
  <div class="cont h-screen flex flex-col">
    <TopBar class="bg-[#090909] flex-1" />
    <div
      class="h-[90vh] w-screen flex gap-10 bg-[#090909] text-gray-400 px-10 pb-6"
    >
      <MainPanel />
      <SidePanel />
    </div>
  </div>
</template>
