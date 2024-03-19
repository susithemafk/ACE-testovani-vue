<template>
    <form @submit.prevent="submit" data-cy="form" :class="props.class" class="flex flex-col gap-4 items-center">
        <div class="flex flex-col gap-2 w-64">
            <label for="name">Name</label>
            <InputText id="name" v-model="inputs.name.value" aria-describedby="name-help" :class="{ 'p-invalid': !inputs.name.valid }" @input="validateInput('name', $event.target.value)" />
            <small id="name-help" class="p-error" v-if="!inputs.name.valid">Invalid name</small>
        </div>

        <div class="flex flex-col gap-2 w-64">
            <label for="email">Email</label>
            <InputText id="email" v-model="inputs.email.value" aria-describedby="email-help" :class="{ 'p-invalid': !inputs.email.valid }" @input="validateInput('email', $event.target.value)" />
            <small id="email-help" class="p-error" v-if="!inputs.email.valid">Invalid email</small>
        </div>

        <Button type="submit" data-cy="submit" class="" :disabled="!inputs.name.valid || !inputs.email.valid || !inputs.email.value || !inputs.name.value">Submit</Button>
    </form>
</template>

<script setup>
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import { ref } from "vue"

const inputs = ref({
    name: {
        value: "",
        valid: true,
    },
    email: {
        value: "",
        valid: true,
    },
})

const props = defineProps({
    class: String,
})

function validateInput(input, value) {
    switch (input) {
        case "name":
            const namePattern = /^[a-zA-Z]+$/
            inputs.value[input].valid = namePattern.test(value)
            break

        case "email":
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            inputs.value[input].valid = emailPattern.test(value)
            break
    }
}

const submit = () => {
    console.log("Submitted")
    inputs.value.name.value = ""
    inputs.value.email.value = ""
    alert("Success")
}
</script>
