import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "shop",
      component: () => import("../components/ShopDashboard.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../components/teleport/Signup.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../components/forms/ProductCategory.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../components/forms/Products.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/category'
    }
  ],
})

export default router
