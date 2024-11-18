import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// product category api calls
export const createProductCategory = (category) =>
  apiClient.post("/product-categories", category);
export const fetchCategories = () => apiClient.get("/product-categories");
export const updateCategory = (category) =>
  apiClient.put("/product-categories", category);
export const removeCategory = (categoryId) =>
  apiClient.delete(`/product-categories/${categoryId}`);

// products api call
export const createProduct = (product) => apiClient.post("/shop", product);
export const fetchProducts = () => apiClient.get("/shop");
export const updateProduct = (product) => apiClient.put("/shop", product);
export const removeProduct = (productId) =>
  apiClient.delete(`/shop/${productId}`);
