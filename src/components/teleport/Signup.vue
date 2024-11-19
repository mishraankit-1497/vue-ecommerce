<script>
import { defineAsyncComponent, ref } from 'vue';
const SignupForm = defineAsyncComponent(() => import("./SignupForm.vue"))

export default {
    components: { SignupForm },
    setup() {
        const showModal = ref(false);
        const closeModal = () => {
            showModal.value = false;
        }
        return { showModal, closeModal }
    }
}
</script>

<template>
    <h1>Welcome to app</h1>
    <button @click="showModal = true">Sign Up</button>
    <!-- Modal rendered using teleport -->
    <!-- <Teleport to="body">
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <SignupForm @close="closeModal"></SignupForm>
            </div>
        </div>
    </Teleport> -->
    <Suspense v-if="showModal">
        <template #default>
            <SignupForm></SignupForm>
        </template>
        <template #fallback>
            <p>Loading.. Signup form</p>
        </template>
    </Suspense>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>