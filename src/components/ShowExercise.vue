<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from 'vue';
const props = defineProps({
    exercise: Object
})

const emit = defineEmits(["skip", "done"])

let startButton = ref("Start")
function increment() {
    startButton.value = 120;
    setInterval(() => startButton.value -= 1, 1000)
}

</script>

<template>
    <GlassBubble v-bind:id="exercise._id" class="exercise-bubble">
        <div :id="`${exercise._id}-title`">{{ exercise.name }}</div>
        <div class="exercise-buttons">
            <button v-on:click="increment" class="exercise-button">{{ startButton }}</button>
            <button class="exercise-button" @click="emit('skip', exercise._id)">Skip</button>
            <button class="exercise-button" @click="emit('done', exercise._id)">Done</button>
        </div>
    </GlassBubble>
</template>

<style scoped>
.exercise-bubble {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 10px;
    color: black;
    font-weight: bold;
    text-transform: capitalize;
}

.exercise-button {
    margin: 0px 3px;
}
</style>
