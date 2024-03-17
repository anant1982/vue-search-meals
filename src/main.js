import { createApp } from "vue";
import router from "./routes";
import store from "./store/index";
import "./style.css";
import App from "./App.vue";
import * as filters from "./filters";

const app = createApp(App);
app.config.devtools = true;
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters;
