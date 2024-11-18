import {
  fetchCategories,
  updateCategory,
  createProductCategory,
  deleteCategory,
} from "@/utils/utils";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async loadCategories() {
      try {
        const response = await fetchCategories();
        this.categories = response.data;
      } catch (error) {
        console.log("Failed to fetch category", error);
      }
    },
    async createCategory(category) {
      try {
        const response = await createProductCategory(category);
        this.categories.push(response.data);
      } catch (error) {
        console.log("Failed to create category", error);
      }
    },
    async updateCategory(category) {
      try {
        const response = await updateCategory(category);
        const index = this.categories.findIndex((c) => c.id === category.id);
        // if found
        if (index !== -1) {
          this.categories.splice(index, 1, response.data);
        }
      } catch (error) {
        console.log("Failed to update category", error);
      }
    },
    async removeCategory(categoryId) {
        try {
          const response = await deleteCategory(categoryId);
          this.categories = this.categories.filter(c => c.id !== categoryId)
        } catch (error) {
          console.log("Failed to delete category", error);
        }
      },
  },
});
