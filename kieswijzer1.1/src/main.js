import {createApp} from "vue";
import App from "./App";
import router from "./router";
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount('#app')
