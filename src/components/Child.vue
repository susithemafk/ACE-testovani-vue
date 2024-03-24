<template>
    <p @click="click">I am child</p>
</template>

<script setup>
const emit = defineEmits(["childEvent"])
const click = () => {
    console.log("emitting event from child to parent: I am child")
    emit("childEvent", "I am child")
}
</script>
