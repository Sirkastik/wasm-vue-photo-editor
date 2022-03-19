import {
  grayscale,
  invert,
  flip_horizontal,
  rotate_90,
  rotate_180,
  rotate_270,
  blur,
  sharpen,
  brighten,
  crop,
  contrast,
} from "crate";
import { setBase64, setImageUrl, base64Image, params } from "../store/image";

const actions = {
  grayscale: { method: grayscale, params: [] },
  invert: { method: invert, params: [] },
  flip_h: { method: flip_horizontal, params: [] },
  flip_v: { method: rotate_180, params: [] },
  rotate_cw: { method: rotate_90, params: [] },
  rotate_ccw: { method: rotate_270, params: [] },
  blur: {
    method: blur,
    params: ["blur_sigma"],
  },
  sharpen: {
    method: sharpen,
    params: ["blur_sigma", "threshold"],
  },
  brighten: {
    method: brighten,
    params: ["brighten_value"],
  },
  crop: {
    method: crop,
    params: ["x", "y", "width", "height"],
  },
  contrast: {
    method: contrast,
    params: ["c_value"],
  },
};

const getParams = (arr) => {
  if (!arr.length) return [];
  const values = arr.map((param) => params.value[param]);
  return values;
};

const dispatch = (action) => {
  const fn = actions[action].method;
  const parameters = getParams(actions[action].params);
  const base64 = base64Image.value;
  const img = fn(base64, ...parameters);
  setImageUrl(img);
  setBase64(img.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""));
};

export default {
  install: (app, options) => {
    app.config.globalProperties.$editor = {
      dispatch: dispatch,
    };
  },
};
