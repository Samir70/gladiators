<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from 'vue';
const props = defineProps({
    exercise: Object
})

let startButton = ref("Start")
function increment() {
    startButton.value = 120;
    setInterval(()=> startButton.value -=1,1000)}

</script>

<template>
    <GlassBubble v-bind:id="exercise._id" class="exercise-bubble">
        <div :id="`${exercise._id}-title`">{{ exercise.name }}</div>
        <div class="exercise-buttons">
            <button v-on:click="increment" class="exercise-button">{{ startButton }}</button>
            <button class="exercise-button">Skip</button>
            <button class="exercise-button">Done</button>
        </div>
    </GlassBubble>
</template>

<style scoped>
.exercise-bubble {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 10px;
}
.exercise-button {
    margin: 0px 3px;
}
</style>
