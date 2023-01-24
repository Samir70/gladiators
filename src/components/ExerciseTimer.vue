<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from "vue";
const props = defineProps({
    exerciseTime: Number,
    restTime: Number,
    exerciseName: String
})

const emit = defineEmits(['unitComplete']);

let intervalID = null;
const started = ref(false);
let timerAmount = ref(props.exerciseTime)
const countDown = () => {
    timerAmount.value -= 1
    if (timerAmount.value === 0) {
        emit('unitComplete');
        clearInterval(intervalID)
    }
}
const startTimer = () => {
    started.value = true
    intervalID = setInterval(countDown, 1000);
}
</script>

<template>
    <GlassBubble id="exercise-timer-bubble">
        <p v-if="!started" id="start-workout-button" @click="startTimer">Start {{ exerciseName }}</p>
        <p v-if="started" id="workout-action" class="bold-black-text">Do {{ exerciseName }} for {{ timerAmount }}
            seconds
        </p>
    </GlassBubble>
</template>

<style scoped>
#exercise-timer-bubble {
    text-align: center;
}
</style>