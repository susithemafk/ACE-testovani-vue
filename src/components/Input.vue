<script setup>
import { ref, watch } from "vue"

const inputValue = ref("")
// watch(
//     () => inputValue.value,
//     (newValue, oldValue) => {
//         console.log(`New value: ${newValue}, old value: ${oldValue}`)
//     }
// )
</script>

<template>
    <input v-model="inputValue" />
</template>
