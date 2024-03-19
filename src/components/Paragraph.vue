<script setup>
import Button from "primevue/button"
import { ref } from "vue"

const props = defineProps({
    initialText: {
        type: String,
        default: "Text",
    },
})

const isVisible = ref(true)

const toggleVisibility = () => {
    isVisible.value = !isVisible.value
}
</script>

<template>
    <Button @click="toggleVisibility">{{ isVisible ? "Hide" : "Show" }}</Button>
    <p v-if="isVisible" class="text" id="text">
        {{ props.initialText }}
    </p>
</template>
