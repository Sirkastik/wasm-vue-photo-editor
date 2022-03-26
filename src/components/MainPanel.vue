<template>
  <main class="flex-1">
    <div
      class="canvas w-full h-full flex items-center justify-center relative p-14"
      v-show="imageUrl"
    >
      <canvas
        class="bg-black bg-opacity-0 absolute z-10"
        @click="draw"
        :style="{
          left: `${canvas.left}px`,
          top: `${canvas.top}px`,
          width: `${canvas.width}px`,
          height: `${canvas.height}px`,
        }"
      >
      </canvas>
      <img
        @load="loadCanvas($event.path[0])"
        :src="imageUrl"
        alt=""
        class="max-h-full"
      />
    </div>
    <label
      v-show="!imageUrl"
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

const canvas = ref({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
});

const handleUpload = (image) => {
  setImageUrl(window.URL.createObjectURL(image));
  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onloadend = ({ target }) => {
    setBase64(target.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""));
  };
};

const loadCanvas = (image) => {
  console.dir(image);
  const {
    offsetLeft: left,
    offsetTop: top,
    offsetWidth: width,
    offsetHeight: height,
  } = image;
  canvas.value = { left, top, width, height };
};

const draw = (e) => {
  console.log(e);
};
</script>
