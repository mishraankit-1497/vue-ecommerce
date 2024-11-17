import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productsStore", {
  // Defining initial state
  state: () => ({
    categories: [],
    products: [],
  }),
  // Defining actions
  actions: {
    // Defining asynchronous function for API call
    // Getting list of product categories
    async fetchCategories() {
      try {
        const fetchResponse = await axios.get(
          "http://localhost:3000/product-categories"
        );
        this.categories = fetchResponse.data;
      } catch (error) {
        console.log("Failed to fetch categories..", error);
      }
    },
    async fetchProducts() {
      //GET: Getting product list
      try {
        const fetchResponse = await axios.get("http://localhost:3000/shop");
        this.products = fetchResponse.data;
      } catch (error) {
        console.log("Failed to fetch products..", error);
      }
    },
    // POST: Creating new product category
    async createCategory(category) {
      try {
        const fetchResponse = await axios.post(
          "http://localhost:3000/product-categories",
          category
        );
        this.categories.push(fetchResponse.data);
      } catch (error) {
        console.log("Failed to create category", error);
      }
    },
    // DELETE: Deleting product category
    async deleteCategory(categoryId) {
      try {
        await axios.delete(
          `http://localhost:3000/product-categories/${categoryId}`
        );
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        console.log("Failed to delete category", error);
      }
    },
    // POST: Create new product
    async createProduct(product, category) {
      try {
        const categoryProduct = { ...category, ...items[product] };
        console.log(categoryProduct);
        console.log(product);
        console.log(category);
        const response = await axios.post(
          `http://localhost:3000/shop`,
          categoryProduct
        );
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
        const response = await axios.put(
          `http://localhost:3000/shop/${product.id}`,
          product
        );
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products[index] = response.data;
        }
      } catch (error) {
        console.error("Failed to update product", error);
      }
    },
  },
});
