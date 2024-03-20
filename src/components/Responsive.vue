<template>
    <div class="flex gap-4">
        <Button v-if="isDesktop" data-cy="btn-desktop" class="bg-red-500">This is desktop</Button>
        <Button v-if="isTablet" data-cy="btn-tablet" class="bg-green-500">This is tablet</Button>
        <Button v-if="isMobile" data-cy="btn-mobile" class="bg-blue-500">This is mobile</Button>
    </div>
</template>

<script setup>
import Button from "primevue/button"
import { onMounted, onUnmounted, ref } from "vue"

const breakpoints = {
    desktop: parseInt(import.meta.env.VITE_TAV_BREAKPOINT_LG),
    tablet: parseInt(import.meta.env.VITE_TAV_BREAKPOINT_MD),
    mobile: parseInt(import.meta.env.VITE_TAV_BREAKPOINT_SM),
}

const screenWidth = ref(window.innerWidth)

const isDesktop = ref(screenWidth.value >= breakpoints.desktop)
const isTablet = ref(screenWidth.value >= breakpoints.tablet && screenWidth.value < breakpoints.desktop)
const isMobile = ref(screenWidth.value < breakpoints.tablet)

const updateBreakpoints = () => {
    screenWidth.value = window.innerWidth
    isDesktop.value = screenWidth.value >= breakpoints.desktop
    isTablet.value = screenWidth.value >= breakpoints.tablet && screenWidth.value < breakpoints.desktop
    isMobile.value = screenWidth.value < breakpoints.tablet
}

onMounted(() => {
    window.addEventListener("resize", updateBreakpoints)
})

onUnmounted(() => {
    window.removeEventListener("resize", updateBreakpoints)
})
</script>
