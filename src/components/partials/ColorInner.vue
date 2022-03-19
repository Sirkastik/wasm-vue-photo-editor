<template>
  <div class="flex gap-6 py-4 px-6">
    <div
      @click="$editor.dispatch('grayscale')"
      class="flex flex-col gap-1 items-center justify-center cursor-pointer bg-gray-700 w-full h-full aspect-[4/2] rounded bg-opacity-40"
    >
      <GrayscaleIcon class="text-2xl" />
      <span class="text-sm">Grayscale</span>
    </div>
    <div
      @click="$editor.dispatch('invert')"
      class="flex flex-col gap-1 items-center justify-center cursor-pointer bg-gray-700 w-full h-full aspect-[4/2] rounded bg-opacity-40"
    >
      <InvertIcon class="text-2xl" />
      <span class="text-sm">Invert</span>
    </div>
  </div>
</template>

<script setup>
import GrayscaleIcon from "../icons/GrayscaleIcon.vue";
import InvertIcon from "../icons/InvertIcon.vue";

// // delete image
// delbtn.classList.add("hidden");
// delbtn.onclick = () => {
//   resetColor(icons[0].parentElement.children);
//   img.src = "";
//   upload.value = "";
//   delbtn.classList.add("hidden");
//   message.classList.remove("hidden");
//   slider.classList.add("hidden");
//   base64 = null;
// };

// // undo
// undo.onclick = () => {
//   let size = imgArr.length;
//   if (size > 1) {
//     imgDataUrl = imgArr[size - 2];
//     img.src = imgDataUrl;
//     base64 = imgArr[size - 2].replace(
//       /^data:image\/(png|jpeg|jpg);base64,/,
//       ""
//     );
//     imgArr.length = size - 1;
//   }
// };

// // download image
// downbtn.onclick = () => {
//   if (base64) {
//     resetColor(icons[0].parentElement.children);
//     link.download = `edited.png`;
//     link.href = imgDataUrl;
//     link.click();
//     delbtn.classList.add("hidden");
//     message.classList.remove("hidden");
//     slider.classList.add("hidden");
//     // downbtn.classList.add("gray")
//     img.src = "";
//     upload.value = "";
//     base64 = null;
//   } else {
//     alert("Please upload an image");
//   }
// };
</script>
