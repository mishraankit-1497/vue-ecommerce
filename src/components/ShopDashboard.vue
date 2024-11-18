<script>
import { updateCategory, removeCategory, updateProduct, removeProduct } from '@/utils/utils';
import ProductCategory from './forms/ProductCategory.vue';
import Products from './forms/Products.vue';
import { useCategoryStore } from '@/stores/categoryStore';
import { useProductStore } from '@/stores/productsStore';
export default {
    components: { ProductCategory, Products },
    setup() {
        const categoryStore = useCategoryStore();
        const productStore = useProductStore();

        const { categories } = categoryStore;
        const { products } = productStore;

        const handleCategorySubmit = async (category) => {
            if (category.id) {
                await categoryStore.updateCategory(category);
            } else {
                await categoryStore.createCategory(category)
            }
        }

        const handleProductSubmit = async (product) => {
            if (product.id) {
                await productStore.updateProduct(product);
            } else {
                await productStore.addProduct(product)
            }
        }

        const findCategory = (categoryId) => {
            return categories.find(c => c.id == categoryId)
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
            productToEdit
        }

    }
}

</script>

<template>
    <div>
        <ProductCategory @submitCategory="handleCategorySubmit" />
        <Products :categories="categories" @submitProduct="handleProductSubmit" />
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