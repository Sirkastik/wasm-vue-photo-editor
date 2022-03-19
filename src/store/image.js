import { ref, computed } from "vue";

const state = ref({
  base64Image: null,
  imageUrl: null,
  blur_sigma: 1,
  threshold: 1,
  c_value: 20,
  brighten_value: 20,
  x: 0,
  y: 0,
  width: 1800,
  height: 1800,
});

export const params = computed(() => {
  return state.value;
});

export const base64Image = computed(() => {
  return state.value.base64Image;
});

export const imageUrl = computed(() => {
  return state.value.imageUrl;
});

export const setBase64 = (data) => {
  state.value.base64Image = data;
};

export const setImageUrl = (url) => {
  state.value.imageUrl = url;
};
