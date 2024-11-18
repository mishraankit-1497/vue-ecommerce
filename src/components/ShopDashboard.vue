<script>
import { updateCategory, removeCategory, updateProduct, removeProduct } from '@/utils/utils';
import ProductCategory from './forms/ProductCategory.vue';
import Products from './forms/Products.vue';
import { useCategoryStore } from '@/stores/categoryStore';
import { useProductStore } from '@/stores/productsStore';
import { onMounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    components: { ProductCategory, Products },
    setup() {
        const categoryStore = useCategoryStore();
        const productStore = useProductStore();

        const { categories } = storeToRefs(categoryStore);
        const { products } = storeToRefs(productStore);
console.log(products)
        const handleCategorySubmit = async (category) => {
            if (category.id) {
                await categoryStore.updateCategory(category);
            } else {
                await categoryStore.createCategory(category)
            }
        }

        onMounted(async () => {
            await categoryStore.loadCategories()
            await productStore.getProducts()
        })

        const handleProductSubmit = async (product) => {
            if (product.id) {
                await productStore.updateProduct(product);
            } else {
                await productStore.addProduct(product)
            }
        }

        const findCategory = (categoryId) => {
            return categories.length && categories.find(c => c.id == categoryId)
        }

        const removeCategory = async (categoryId) => {
            await categoryStore.removeCategory(categoryId)
        }
        const removeProduct = async (productId) => {
            await productStore.removeProduct(productId)
        }

        const categoryToEdit = ref(null)
        const productToEdit = ref(null)
        const editCategory = (category) => {
            categoryToEdit.value = category
        }

        const editProduct = (product) => {
            productToEdit.value = product
        }
        return {
            handleCategorySubmit,
            handleProductSubmit,
            findCategory,
            removeCategory,
            removeProduct,
            editCategory,
            editProduct,
            categoryToEdit,
            productToEdit,
            categoryStore,
            productStore,
            categories,
            products,
        }

    }
}

</script>

<template>
    <div>
        <ProductCategory :categoryToEdit="categoryToEdit" @addCategory="categoryStore.createCategory"
            @updateCategory="categoryStore.updateCategory" @submitCategory="handleCategorySubmit" />
        <Products :productToEdit="productToEdit" @addProduct="productStore.addProduct"
            @updateProduct="productStore.updateProduct" :categories="categories" @submitProduct="handleProductSubmit" />
    </div>
    <div>
        <h3>Categories</h3>
        <ul>
            <li v-for="category in categories" :key="category.id">{{ category.title }}
                <button @click="updateCategory(category)">Update</button>
                <button @click="removeCategory(category.id)">Delete</button>
            </li>
        </ul>
    </div>
    <div>
        <h3>Products</h3>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }}
                {Category: {{ findCategory(product.categoryId)?.title || 'Uncategorized' }}}
                <button @click="updateProduct(product)">Update</button>
                <button @click="removeProduct(product.id)">Delete</button>
            </li>
        </ul>
    </div>

</template>