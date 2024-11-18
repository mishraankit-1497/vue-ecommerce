<script setup>


const category = {
    title: "",
    imageUrl: "",
    routeName: ""
}

</script>

<template>
    <div class="category-container">
            <a-form class="form-container">
                <a-input v-model:value="category.title" placeholder="Enter category title" />
                <a-input v-model:value="category.routeName" placeholder="Enter route name" />
                <a-input v-model:value="category.imageUrl" placeholder="Enter image url" />
                <a-button type="primary">Add category</a-button>
            </a-form>
        <a-divider />
       
    </div>
</template>

<style scoped>
.category-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.action-container {
    display: flex;
    font-size: 18px;
    cursor: pointer
}

.form-container {
    padding: 20px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.07);
}

input {
    margin-bottom: 10px;
}
</style>