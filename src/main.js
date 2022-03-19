import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import editor from "./plugins/editor";

import init from "crate";
init().then((_) => console.log("wasm initialized"));

createApp(App).use(editor).mount("#app");
