<template>
  <div class="w-full border-b border-b-[#2d2e2f] px-4 py-4 flex flex-col gap-4">
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
      <span class="text-sm">Use percentages</span>
    </div>
    <div class="flex gap-3">
      <button
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
import LockIcon from "../icons/LockIcon.vue";
</script>
