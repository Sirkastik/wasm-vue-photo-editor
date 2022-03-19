<template>
  <div class="border-b border-b-[#2d2e2f] px-4 py-4 flex flex-col gap-4">
    <div class="ratios grid grid-cols-3 grid-rows-3 gap-2">
      <div
        v-for="ratio in ratios"
        :key="ratio.aspect"
        class="free bg-gray-700 w-full h-full aspect-square cursor-pointer rounded bg-opacity-40 flex flex-col items-center justify-center gap-2"
      >
        <div
          class="contents"
          v-if="ratio.aspect === 'Free' || ratio.aspect === 'Original'"
        >
          <FreeCropIcon class="text-4xl" v-if="ratio.aspect === 'Free'" />
          <PhotoIcon class="text-4xl" v-else />
          <span class="text-sm">{{ ratio.aspect }}</span>
        </div>
        <div class="contents" v-else>
          <Aspect
            :aspect="ratio.aspect.split('/')[0] / ratio.aspect.split('/')[1]"
          />
          <span class="flex items-center text-sm">
            {{ ratio.aspect.split("/")[0] }}
            <close-icon class="text-xs" />
            {{ ratio.aspect.split("/")[1] }}
          </span>
        </div>
      </div>
    </div>

    <div class="w-full h-full flex gap-3 items-center">
      <input
        type="text"
        placeholder="480"
        class="focus:ring-blue-600 focus:border-blue-600 shadow-sm sm:text-sm border-gray-500 bg-transparent rounded w-16 h-8"
      />
      <CloseIcon />
      <input
        type="text"
        placeholder="480"
        class="focus:ring-blue-600 focus:border-blue-600 shadow-sm sm:text-sm border-gray-500 bg-transparent rounded w-16 h-8"
      />
      <LockIcon class="ml-auto" />
    </div>
    <div class="flex items-center gap-1 h-5">
      <input
        type="checkbox"
        class="focus:ring-blue-600 h-[14px] w-[14px] text-blue-600 border-gray-300 bg-transparent rounded cursor-pointer"
      />
      <span class="text-sm">Maintain aspect ratio</span>
    </div>

    <div class="flex gap-3">
      <button
        @click="$editor.dispatch('crop')"
        class="bg-blue-600 flex-1 hover:bg-blue-700 text-gray-100 font-semibold rounded-md shadow-sm py-2 text-sm text-center cursor-pointer"
      >
        Apply
      </button>
      <button
        class="bg-gray-600 flex-1 hover:bg-gray-700 text-gray-100 font-semibold rounded-md shadow-sm py-2 text-sm text-center cursor-pointer"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from "../icons/CloseIcon.vue";
import Aspect from "../Aspect.vue";
import FreeCropIcon from "../icons/FreeCropIcon.vue";
import PhotoIcon from "../icons/PhotoIcon.vue";
import LockIcon from "../icons/LockIcon.vue";

const ratios = [
  {
    aspect: "Free",
  },
  {
    aspect: "1/1",
  },
  {
    aspect: "2/3",
  },
  {
    aspect: "3/2",
  },
  {
    aspect: "4/3",
  },
  {
    aspect: "3/4",
  },
  {
    aspect: "16/9",
  },
  {
    aspect: "9/16",
  },
  {
    aspect: "Original",
  },
];
</script>
