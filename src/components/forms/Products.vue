<script setup>
const products = {
    name: "",
    imageUrl: "",
    price: "",
    category: ""
}
</script>


<template>
    <div class="products-container">
        <a-form class="form-container">
            <a-input v-model:value="products.name" placeholder="Enter product name" />
            <a-input v-model:value="products.imageUrl" placeholder="Enter image url" />
            <a-input v-model:value="products.price" placeholder="Enter price" />
            <a-input v-model:value="products.category" placeholder="Enter product category" />
            <a-button type="primary">Add Item</a-button>
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