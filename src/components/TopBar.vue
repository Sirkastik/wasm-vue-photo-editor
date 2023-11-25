<template>
  <div class="w-full flex flex-col md:flex-row gap-4 py-4 md:py-0 items-center md:justify-between px-10 text-gray-400">
    <div class="left">
      <div class="lo flex gap-2 items-center h-14">
        <img src="@/assets/logo.png" class="h-full" alt="" />
        <div class="logo flex flex-col items-end">
          <span class="text-2xl font-black">WASM</span>
          <span class="text-[0.6rem] tracking-widest">PHOTO EDITOR</span>
        </div>
      </div>
    </div>
    <div class="right flex gap-2">
      <span class="bg-[#1a1a1d] text-xl rounded px-5 py-2 cursor-pointer">
        <CompareIcon />
      </span>
      <span class="bg-[#1a1a1d] text-xl rounded px-5 py-2 flex gap-3 ml-1">
        <UndoIcon class="cursor-pointer" />
        <div class="bg-gray-600 h-full w-[1px]"></div>
        <RedoIcon class="cursor-pointer" />
      </span>
      <span class="bg-[#1a1a1d] text-xl rounded px-5 py-2 ml-1 cursor-pointer">
        <UploadIcon />
      </span>
      <span
        class="bg-[#1a1a1d] text-xl rounded px-5 py-2 cursor-pointer"
        @click="downloadImage"
      >
        <DownloadIcon />
        <a class="link" ref="link" href=""></a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadImage() {
      if (!imageUrl.value) return;
      const link = this.$refs.link;
      link.download = `edited-${Date.now().toLocaleString()}.png`;
      link.href = imageUrl.value;
      link.click();
    },
  },
};
</script>

<script setup>
import UndoIcon from "./icons/UndoIcon.vue";
import RedoIcon from "./icons/RedoIcon.vue";
import CompareIcon from "./icons/CompareIcon.vue";
import UploadIcon from "./icons/UploadIcon.vue";
import DownloadIcon from "./icons/DownloadIcon.vue";

import { imageUrl } from "../store/image";
</script>
