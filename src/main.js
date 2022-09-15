import App from "./App.vue";
import store from "./vuex/store";
import { createApp } from "vue";
import "./assets/styles/variables.scss";

const app = createApp(App);

app.use(store);

app.mount("#app");
