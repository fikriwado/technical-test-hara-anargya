import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import router from './router'
import App from "./App.vue";
import { Icon } from "@iconify/vue";

createApp(App).component("Icon", Icon).use(router).mount("#app");
