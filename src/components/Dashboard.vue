<script setup>
import GlassBubble from './GlassBubble.vue';
import ProfileButton from "./Buttons/ProfileButton.vue";
import ShowExercise from "./ShowExercise.vue";
import LogoutButton from "./LogoutButton.vue"
import { store } from "../store";
import { ref } from "vue";

import ExerciseTimer from "./ExerciseTimer.vue";
// import {getExercises} from "./ExerciseCatalogueFiles/ExerciseList.vue";

const user = ref(store.state.user)
let currentworkout = ref(store.state.currentworkout)
let cur = ref(0)
let circuitCount = ref(0)


// Eventually get the next two from user data in store
const unitTime = 30
const restTime = 10

const unitComplete = () => {
    console.log("user has completed", currentworkout.value[cur.value].name)
    cur.value += 1;
    if (cur.value === currentworkout.value.length) {
        circuitCount.value += 1
        cur.value = 0
    }
}

const removeExercise = (exerciseID) => {
    console.log("before removing, workout is", currentworkout.value)
    store.commit("removeFromWorkout", exerciseID)
    currentworkout.value = store.state.currentworkout
}
const clearWork = () => {
    store.commit("clearAll")
    currentworkout.value = store.state.currentworkout
}

// const randomize = () => {
//     let randomArray = [getExercises()]
//     console.log(randomArray)
// }
const addToHistory = async () => {
  //console.log(currentworkout)
  let result = await fetch(`/.netlify/functions/completeWorkout`, {
    method: "POST",
    body: JSON.stringify({ username: user.value.username, workout: currentworkout.value, completionDate: Date.now()})
  })
    .then(function (response) {
      return response
        .json()
    }).then(function (data) {console.log(data.value);
        clearWork()
    }
    )}


</script>
<template>
    <div id="dashboard">
        <GlassBubble id="dash-nav-bubble">
            <ProfileButton />

            <button class="button">
                <img id="spotify_logo.png" src="/spotify_logo.png">
                <p>Spotify</p>
            </button>

            <button class="button">
                <img id="weather" src="/weather.png">
                <p>Weather</p>
            </button>

            <button class="button">
                <img id="clock" src="/clock.png">
                <p>date/time</p>
            </button>
        </GlassBubble>

        <div id="catalogue-current-container">
            <h1>Gladiator Dashboard</h1>
            <p v-if="user" class="bold-black-text">{{ user.username }}</p>
            <GlassBubble id="current-workout-bubble">
                <ExerciseTimer v-if="currentworkout.length > 0" :circuits="circuitCount" :exercise-time="unitTime" :rest-time="restTime"
                    :exercise-name="currentworkout[cur].name" @unit-complete="unitComplete" />
                <div >
                    <ShowExercise v-for="( exercise, i ) in currentworkout" :exercise="exercise" @remove="removeExercise"
                        :class="i === cur ? 'active-exercise' : ''" :key="Math.random()"></ShowExercise>
                </div>
                <button class="button" @click="$router.push('exercisecatalogue')">
                    <p>Exercise Catalogue</p>
                </button>
                    <!-- <button class="button" @click="randomize"> -->
                   <button>
                    <p>Random Workout Generator</p>
                </button>
                <button class="button" @click="addToHistory">
                    <p>Workout Complete</p>
                </button>
                <button class="button" @click="clearWork">
                    <p>Clear All</p>
                </button>

            </GlassBubble>
        </div>

        <GlassBubble id="utilities-bubble">

            <LogoutButton />

            <button class="button" @click="$router.push('guideandtipspage')">
                <p>User Guide</p>
            </button>

            <button class="button">
                <p>Facilities Finder</p>
            </button>

            <button class="button">
                <p>Leaderboard</p>
            </button>

            <button class="button">
                <p>Lifting Calculator</p>
            </button>

            <button class="button">
                <p>Stop Watch</p>
            </button>
        </GlassBubble>

    </div>
</template>




<style scoped>
#dashboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: fit-content;
}

#catalogue-current-container {
    display: flex;
    flex-direction: column;
}

button img {
    width: 100px;
    height: 100px;
    border-radius: 80px;
}

h1 {
    font-family: 'Roboto', sans-serif;
    color: rgb(0, 0, 0);
    font-size: 4vmin;
    letter-spacing: .6vmin;
    text-transform: uppercase;
}

#dash-nav-bubble {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 3px;
}

#utilities-bubble {
    display: flex;
    flex-direction: column;
    width: fit-content;
}

#exercise-catalogue-bubble {
    width: 60vmin;
    height: 30vmin;
}

#current-workout-bubble {
    display: flex;
    flex-direction: column;
    width: 60vmin;
}

.active-exercise {
    border: 2px solid green;
}

@media only screen and (max-width: 990px) {
    #dashboard {
        flex-direction: column;
        margin: auto;
    }

    #dash-nav-bubble {
        flex-direction: row;
        margin: auto;
        transform: scale(0.75);
    }

    #catalogue-current-container {
        margin: auto;
    }

    #utilities-bubble {
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
        max-width: 85vw;
    }

    #exercise-catalogue-bubble {
        width: 90vmin;
    }

    #current-workout-bubble {
        width: 90vmin;
    }
}
</style>