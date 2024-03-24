<script setup>
import { ref } from "vue"
import Child from "./Child.vue"

const dataFromChild = ref("no data")
const handleChildEvent = (event) => {
    console.log("parent received emit: ", event)
    dataFromChild.value = event
}
</script>

<template>
    <b>I am parent</b>
    <em class="ml-4 block">
        <Child @childEvent="handleChildEvent" />
    </em>
</template>
