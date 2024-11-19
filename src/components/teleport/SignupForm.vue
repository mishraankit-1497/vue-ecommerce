<script>
import { reactive } from 'vue';
export default {
    setup(_, { emit }) {
        const form = reactive({
            email: "",
            password: ""
        })
        const handleSubmit = () => {
            console.log("Form submitted", form)
            emit("close")
            alert(`Signed up as ${this.form.email}`)
        }
        return { form, handleSubmit }
    }
}
</script>

<template>
    <h2>Sign Up</h2>
    <div>
        <a-form class="form" @submit.prevent="handleSubmit">
            <a-input class="label"v-model:value="form.email" placeholder="Enter email address" />
            <a-input class="label" v-model:value="form.password" placeholder="Enter password" />
            <button class="button" type="submit" >Sign Up</button>
        </a-form>
    </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.label {
  font-weight: bold;
}
.button {
  margin-top: 10px;
}
</style>