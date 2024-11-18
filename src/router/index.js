import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
