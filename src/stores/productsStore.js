import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "@/utils/utils";

export const useProductStore = defineStore("productsStore", {
  // Defining initial state
  state: () => ({
    products: [],
  }),
  // Defining actions
  actions: {
    // Defining asynchronous function for API call
    async getProducts() {
      //GET: Getting product list
      try {
        const fetchResponse = await fetchProducts();
        this.products = fetchResponse.data;
      } catch (error) {
        console.log("Failed to fetch products..", error);
      }
    },
    // POST: Create new product
    async addProduct(product, category) {
      try {
        const categoryProduct = { ...category, ...items[product] };
        const response = await createProduct(categoryProduct);
        this.products.push([
          ...response.data
            .filter((c) => c.id === categoryProduct.id)
            .map((product) => product),
        ]);
      } catch (error) {}
    },
    // UPDATE: Updating products
    async updateProduct(product) {
      try {
        const response = await updateProduct(product);
        const index = this.products.findIndex(
          (p) => p.id === product.items[0].id
        );
        if (index !== -1) {
          this.products[index] = response.data;
        }
      } catch (error) {
        console.error("Failed to update product", error);
      }
    },
    async removeProduct(productId) {
      try {
        const response = await deleteProduct(productId);
        this.products = this.products.filter((p) => p.id !== productId);
      } catch (error) {
        console.error("Failed to update product", error);
      }
    },
  },
});
