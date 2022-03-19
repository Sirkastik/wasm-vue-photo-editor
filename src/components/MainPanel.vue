<template>
  <main class="flex-1">
    <div
      class="canvas w-full h-full p-4 flex items-center justify-center"
      v-if="imageUrl"
    >
      <img :src="imageUrl" alt="" class="max-h-full" />
    </div>
    <label
      v-else
      class="w-full h-full flex flex-col gap-2 items-center justify-center text-gray-700 border border-gray-900 rounded border-dashed"
    >
      <UploadIcon class="cursor-pointer text-3xl" />
      <span>Click here to upload photo</span>
      <input
        class="hidden"
        type="file"
        accept=".png"
        @change="handleUpload($event.target.files[0])"
      />
    </label>
  </main>
</template>

<script setup>
import UploadIcon from "./icons/UploadIcon.vue";
import { ref } from "vue";
import { imageUrl, setBase64, setImageUrl } from "../store/image";

const handleUpload = (image) => {
  setImageUrl(window.URL.createObjectURL(image));
  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onloadend = ({ target }) => {
    setBase64(target.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""));
  };
};
</script>
