import { createRouter, createWebHashHistory } from "vue-router";

import App from '../pages/Accueil.vue';
import ListeUnivers from "../pages/ListeUnivers.vue";
import CreateRoti from "../pages/RotiCreate.vue";

const routes = [
  { path: "/", component: App },
  { path: "/liste-univers", component: ListeUnivers },
  { path: "/create-roti", component: CreateRoti },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
