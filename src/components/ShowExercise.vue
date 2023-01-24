<script setup>
import GlassBubble from './GlassBubble.vue';
const props = defineProps({
    exercise: Object
})
</script>

<template>
    <GlassBubble v-bind:id="exercise._id" class="exercise-bubble">
        <div :id="`${exercise._id}-title`">{{ exercise.name }}</div>
        <div class="exercise-buttons">
            <button class="exercise-button">Start</button>
            <button class="exercise-button">Remove</button>
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
