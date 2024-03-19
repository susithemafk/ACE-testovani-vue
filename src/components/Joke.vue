<template>
    <div>
        <p v-if="!jokes.length">Loading...</p>
        <ul v-else>
            <li v-for="joke in jokes" :key="joke.id">
                <span data-cy="joke-setup" class="joke__setup">{{ joke.setup }}</span> -
                <span data-cy="joke-punchline" class="joke__punchline">{{ joke.punchline }}</span>
            </li>
        </ul>
        <Button @click="getData">New jokes</Button>
    </div>
</template>

<script setup>
import Button from "primevue/button"
import { onMounted, ref } from "vue"

const props = defineProps({
    fetchingUrl: {
        type: String,
        default: "https://official-joke-api.appspot.com/jokes/ten",
    },
})

const jokes = ref([])

const getData = async () => {
    jokes.value = []
    try {
        const response = await fetch(props.fetchingUrl)
        if (!response.ok) {
            throw new Error("Failed to fetch jokes")
        }
        jokes.value = await response.json()
    } catch (error) {
        console.error("Error fetching jokes:", error)
    }
}
onMounted(getData)
</script>
