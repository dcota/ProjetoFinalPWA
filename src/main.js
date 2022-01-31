import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Nav from "./Nav.vue";

createApp(App).use(router).mount('#app')
createApp(Header).use(router).mount("#header");
createApp(Nav).use(router).mount("#nav");
createApp(Footer).use(router).mount("#footer")
