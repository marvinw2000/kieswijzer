import {createApp} from "vue";
import App from "./App";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount('#app')