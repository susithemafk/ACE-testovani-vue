<script setup>
import { ref } from "vue"

const props = defineProps({
    initialText: {
        type: String,
        default: "Text",
    },
})
</script>

<template>
    <p class="text" id="text">
        {{ props.initialText }}
    </p>
</template>
