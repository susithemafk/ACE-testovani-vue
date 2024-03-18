<template>
    <div>
        <p>Result: {{ result }}</p>
        <button @click="add">Add {{ num }}</button>
        <button @click="subtract">Subtract {{ num }}</button>
        <button @click="multiply">Multiply {{ num }}</button>
        <button @click="divide">Divide {{ num }}</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue"

const props = defineProps({
    initialValue: Number,
    num: Number,
})

const result = ref(props.initialValue)

const add = () => {
    result.value = result.value + props.num
}

const subtract = () => {
    result.value = result.value - props.num
}

const multiply = () => {
    result.value = result.value * props.num
}

const divide = () => {
    result.value = result.value / props.num
}
const reset = () => {
    result.value = props.initialValue
}
</script>
