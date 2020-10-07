import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import sharedStore from '@/store/modules/shared';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Explore",
    component: () => import("../views/Explore.vue")
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/Favorites.vue")
  },
  {
    path: "/popular",
    name: "Popular",
    component: () => import("../views/Popular.vue")
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: () => import("../views/Album.vue"),
    props: true
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  sharedStore.clearSearchText();

  next();
});

export default router;
