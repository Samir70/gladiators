<script setup>
import { store } from "../store"
import { ref } from "vue"
import GlassBubble from './GlassBubble.vue';
import ProfileButton from "./Buttons/ProfileButton.vue";
// import CurrentWorkout from "./CurrentWorkout.vue";

// import ButtonIcon from './ButtonIcon.vue';

const user = ref(store.state.user)

</script>
<template>
    <div id="dashboard">
        <h1>Gladiator Dashboard</h1>
        <p v-if="user">{{ user.username }}</p>

        <!-- Navigation -->

        <GlassBubble id="dash-nav-bubble">
            <ProfileButton />

            <button class="button">
                <img id="spotify_logo" src="spotify_logo.png">
                <p>Spotify</p>
            </button>

            <button class="button">
                <img id="weather" src="weather.png">
                <p>Weather</p>
            </button>

            <button class="button">
                <img id="clock" src="clock.png">
                <p>date/time</p>
            </button>
        </GlassBubble>

        <!-- Utilities -->
        <GlassBubble id="utilities-bubble">

            <p>Utilities</p>

            <br>

            <button class="button" @click="$router.push('/')">
                <p>Log Out</p>
            </button>

            <br>

            <button class="button" @click="$router.push('guideandtipspage')">
                <p>User Guide</p>
            </button>

            <br>

            <button class="button">
                <p>Facilities Finder</p>
            </button>

            <br>

            <button class="button">
                <p>Leaderboard</p>
            </button>

            <br>

            <button class="button">
                <p>Lifting Calculator</p>
            </button>

            <br>

            <button class="button">
                <p>Stop Watch</p>
            </button>
        </GlassBubble>


        <!-- Exercise catalogue -->
        <GlassBubble id="exercise-catalogue-bubble">

            <button class="button" @click="$router.push('exercisecatalogue')">
                <p>Exercise Catalogue</p>
            </button>
        </GlassBubble>

        <br>

        <GlassBubble id="current-workout-bubble">
            <p>current workout</p>

            <br>

            <button class="button">
                <p>Random Workout Generator</p>
            </button>

            <br>

            <button class="button">
                <p>Workout Complete</p>
            </button>

            <br>

            <button class="button">
                <p>Clear All</p>
            </button>

            <p>(remove individual exercise button, for each, similar to like/unlike idea)</p>

        </GlassBubble>

    </div>
</template>




<style scoped>
#dashboard {
    width: 95vw;
}

body,
.glass_bubble::before {
    background-position: 40%;
    background-size: cover;
    background-attachment: fixed;
}

button img {
    width: 100px;
    height: 100px;
    border-radius: 80px;
}

/* .background {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} */

h1,
h2 {
    font-family: 'Roboto', sans-serif;
    color: rgb(0, 0, 0);
}

h1 {
    font-size: 4vmin;
    letter-spacing: .6vmin;
    text-transform: uppercase;
}

h2 {
    font-size: 2.7vmin;
    letter-spacing: .3vmin;
}

#dash-nav-bubble {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 3px;
}

#utilities-bubble {
    width: 30vmin;
    height: 90vmin;
    float: right;
    /* position: adsolute; */
    /* top: 300px; */
}

#exercise-catalogue-bubble {
    width: 60vmin;
    height: 30vmin;
    position: absolute;
    left: 350px;
    /* margin-left: auto;
  margin-right: auto; */
}

#current-workout-bubble {
    position: relative;
    width: 60vmin;
    height: 55vmin;
    position: absolute;
    left: 350px;
    top: 450px;

    /* margin-left: auto;
  margin-right: auto; */
}

/* .innercard {
    position: relative;
    width: 70vmin;
    height: 50vmin;
    display: flex;
    justify-content: center;
    align-items: center;
} */

.text {
    position: absolute;
    top: 16vmin;
}

@media (min-width: 731px) {

    h1 {
        font-size: 3vmin;
    }

    h2 {
        font-size: 2.4vmin;
    }

    .card,
    .innercard {
        width: 60vmin;
        height: 45vmin;
    }

    .text {
        top: 15vmin;
    }

    /* 
    .button {
        bottom: 16vmin;
    }

    button {
        width: 25vmin;
        height: 7vmin;
    } */
}
</style>