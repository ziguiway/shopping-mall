import Vue from "vue";
import VueRouter from "vue-router";
import Goods from "@/views/goods";
import Layout from "@/views/layout";
import Login from "@/views/login";
import Orders from "@/views/orders";
import Pay from "@/views/pay";
import Search from "@/views/search";
import SearchList from "@/views/searchlist";
import LayoutCart from "@/views/layout/LayoutCart.vue";
import LayoutCategories from "@/views/layout/LayoutCategories.vue";
import LayoutUser from "@/views/layout/LayoutUser.vue";
import LayoutHome from "@/views/layout/LayoutHome.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/goods", component: Goods },
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/cart", component: LayoutCart },
      { path: "/categories", component: LayoutCategories },
      { path: "/home", component: LayoutHome },
      { path: "/user", component: LayoutUser },
    ],
  },
  { path: "/login", component: Login },
  { path: "/orders", component: Orders },
  { path: "/pay", component: Pay },
  { path: "/search", component: Search },
  { path: "/searchlist", component: SearchList },
];

const router = new VueRouter({
  routes,
});

export default router;
