<script setup>
import { store } from "../store"
import { ref } from "vue"
import GlassBubble from './GlassBubble.vue';
import ProfileButton from "./Buttons/ProfileButton.vue";
import ShowExercise from "./ShowExercise.vue";

const user = ref(store.state.user)
const currentworkout = ref(store.state.currentworkout)

</script>
<template>
    <div id="dashboard">
        <GlassBubble id="dash-nav-bubble">
            <ProfileButton />

            <button class="button">
                <img id="spotify_logo" src="/spotify_logo.png">
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
            <p v-if="user">{{ user.username }}</p>
            <GlassBubble id="current-workout-bubble">
                <div v-for="exercise of currentworkout">
                <ShowExercise :exercise="exercise"></ShowExercise>
                </div>
                <button class="button" @click="$router.push('exercisecatalogue')">
                    <p>Exercise Catalogue</p>
                </button>
                <button>
                    <p>Random Workout Generator</p>
                </button>
                <button>
                    <p>Workout Complete</p>
                </button>
                <button>
                    <p>Clear All</p>
                </button>

                <p>(remove individual exercise button, for each, similar to like/unlike idea)</p>

            </GlassBubble>
        </div>

        <GlassBubble id="utilities-bubble">
            <p>Utilities</p>
            <button class="button" @click="$router.push('/')">
                <p>Log Out</p>
            </button>

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
    height: 55vmin;
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