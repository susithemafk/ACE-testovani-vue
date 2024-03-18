<script setup>
import { ref, defineEmits } from "vue"
const emit = defineEmits(["valueChanged", "testEmit", "test"])

const value = ref("Default value")

const click = () => {
    value.value = "New value"
    emit("valueChanged", value.value)
    emit("testEmit", 123)
}

const func = () => {
    emit("test", 123456)
}
</script>

<template>
    <button @click="click" @myevent="func" class="btn">Click me</button>
    <p>{{ value }}</p>
</template>
