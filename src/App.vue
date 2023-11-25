<script setup>
import SidePanel from "./components/SidePanel.vue";
import SidePanelMobile from "./components/SidePanelMobile.vue";
import TopBar from "./components/TopBar.vue";
import MainPanel from "./components/MainPanel.vue";
</script>

<template>
  <div class="cont h-screen flex flex-col">
    <TopBar class="md:flex-1" />
    <div
      class="flex-1 md:flex-auto mb-24 md:mb-0 md:h-[90vh] w-screen flex flex-col md:flex-row gap-10 text-gray-400 px-10 pb-6"
    >
      <MainPanel class="md:flex-1 mt-4 md:my-5 md:mx-12 h-full md:h-auto" />
      <SidePanel class="hidden md:block" />
      <SidePanelMobile class="md:hidden" />
    </div>
  </div>
</template>
