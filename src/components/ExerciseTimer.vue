<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref, onBeforeUnmount } from "vue";
const props = defineProps({
    exerciseTime: Number,
    restTime: Number,
    circuits: Number,
    exerciseName: String
})

const emit = defineEmits(['unitComplete', 'restComplete']);

let intervalID = null;
const started = ref(false);
const resting = ref(false)
let timerAmount = ref(props.exerciseTime)
const countDown = () => {
    timerAmount.value -= 1
    if (timerAmount.value === 0) {
        resting.value = !resting.value
        if (resting.value) {
            timerAmount.value = props.restTime
            // console.log("emitting unit complete")
            emit('unitComplete');
        } else {
            timerAmount.value = props.exerciseTime
            // console.log("emitting rest complete")
            emit('restComplete')
        }
    }
}
const startTimer = () => {
    if (started.value) {
        started.value = false
        clearInterval(intervalID)
    } else {
        started.value = true
        intervalID = setInterval(countDown, 1000);
    }
}

onBeforeUnmount(() => {
    // console.log("beforeUnmount will stop the countdown timer")
    clearInterval(intervalID)
});
</script>

<template>
    <GlassBubble id="exercise-timer-bubble" @click="startTimer">
        <p v-if="circuits > 0">Circuits completed: {{ circuits }}</p>
        <p v-if="!started" id="start-workout-button">Start workout. First up: {{ exerciseName }}</p>
        <p v-if="started && !resting" id="workout-action">
            Do {{ exerciseName }} for {{ timerAmount }} seconds
        </p>
        <p v-if="started && resting" id="workout-rest">Rest for {{ timerAmount }} seconds</p>
        <p v-if="started">Click to pause</p>
    </GlassBubble>
</template>

<style scoped>
#exercise-timer-bubble {
    text-align: center;
    cursor: pointer;
}

p {
    color: black;
    font-weight: bold;
}
</style>