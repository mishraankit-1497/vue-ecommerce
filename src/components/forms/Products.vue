<script>
export default {
    props: {
        productToEdit: {
            type: Object,
            default: () => null
        },

    },
    data() {
        return {
            product: {
                id: "",
                name: "",
                imageUrl: "",
                price: "",
                category: ""
            },
            isEdit: false
        }
    },
    watch: {
        productToEdit: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.product = { ...newValue }
                    this.isEdit = true
                }
            }
        }
    },
    methods: {
        submitProduct() {
            const action = this.isEdit ? "updateProduct" : "addProduct"
            this.$emit(action, this.product)
            this.resetForm();
        },
        resetForm() {
            this.product = {
                id: "",
                name: "",
                imageUrl: "",
                price: "",
                category: ""
            }
            this.isEdit = false;
        }
    }
}
</script>


<template>
    <div class="products-container">
        <a-form class="form-container" @submit.prevent="submitProduct">
            <a-input v-model:value="product.id" placeholder="Enter product id" />
            <a-input v-model:value="product.name" placeholder="Enter product name" />
            <a-input v-model:value="product.imageUrl" placeholder="Enter image url" />
            <a-input v-model:value="product.price" placeholder="Enter price" />
            <a-input v-model:value="product.category" placeholder="Enter product category" />
            <a-button type="primary">{{ isEdit ? 'Update Product': 'Add Product' }}</a-button>
        </a-form>
        <a-divider />
    </div>
</template>

<style scoped>
.products-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.form-container {
    padding: 20px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.07);
    width: 40rem;
}

input {
    margin-bottom: 10px;
}
</style>