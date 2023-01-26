<script setup>
import { ref } from "vue";
import { store } from "../store";
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueFiles/ExerciseCatalogueBody.vue";
import ExerciseList from "./ExerciseCatalogueFiles/ExerciseList.vue";
import ShowExercise from "./ShowExercise.vue";
import ProfileButton from "./Buttons/ProfileButton.vue";
import LogoutButton from "./LogoutButton.vue"


let show = ref("");
let currentworkout = ref(store.state.currentworkout);
let exercisechoice = ref(store.state.currentworkout);
const exercisecount = ref(exercisechoice.value.length);
const exAdded = () => {
  exercisechoice.value = store.state.currentworkout;
  exercisecount.value = exercisechoice.value.length;
  currentworkout.value = store.state.currentworkout;
};

const removeExercise = (exerciseID) => {
  console.log("before removing, workout is", currentworkout.value);
  store.commit("removeFromWorkout", exerciseID);
  exercisechoice.value = store.state.currentworkout;
  currentworkout.value = store.state.currentworkout;
  exercisecount.value = exercisechoice.value.length;
};
</script>

<template>
  <div id="exercise-catalogue">
    <GlassBubble id="userguide-nav-bubble">
      <button class="button" @click="$router.push('dashboard')">
        <p>Dashboard</p>
      </button>
      <ProfileButton />
      <!-- <button class="button" @click="$router.push('profilepage')">
        <img
          id="profile_logo"
          src="/spartan-helmet.png"
          style="width: 50px; height: 50px"
        />
      </button> -->

      <LogoutButton />
    </GlassBubble>

    <div id="ExerciseCatalogue">
      <div id="header">
        <h1>All Exercises Catalogue</h1>
      </div>
    </div>

    <div id="category-buttons">
      <GlassBubble>
        <div id="All-button">
          <button @click="show = 'all'">All</button>
        </div>
      </GlassBubble>

      <GlassBubble>
        <div id="strength-button">
          <button @click="show = 'strength'">Strength</button>
        </div>
      </GlassBubble>

      <GlassBubble>
        <div id="Flexibility-button">
          <button @click="show = 'flex'">Flexibility</button>
        </div>
      </GlassBubble>

      <GlassBubble>
        <div id="Cardio-button">
          <button @click="show = 'cardio'">Cardio</button>
        </div>
      </GlassBubble>
    </div>

    <div
      v-if="exercisecount < 5"
      v-for="choice in ['strength', 'flex', 'cardio']"
    >
      <ExerciseList
        v-if="show == choice || show == 'all'"
        :tag="choice"
        @exercise-added="exAdded"
      ></ExerciseList>
    </div>

    <div id="current-workout">
      <GlassBubble>
        <p>{{ exercisecount }} of 5 exercises selected</p>
        <div>
          <ShowExercise
            v-for="(exercise, i) in currentworkout"
            :exercise="exercise"
            @remove="removeExercise"
            :class="i === cur ? 'active-exercise' : ''"
            :key="Math.random()"
          ></ShowExercise>
        </div>
        <button class="button" @click="$router.push('dashboard')">
          <p>Go to workout!</p>
        </button>
      </GlassBubble>
    </div>
    <br />
    <br />
    <br />
    <div id="Body">
      <ExerciseCatalogueBody> </ExerciseCatalogueBody>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  #exercise-catalogue {
    flex-direction: column;
    margin: auto;
  }

  #userguide-nav-bubble {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }
  #Body {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }

  #current-workout {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }

  #category-buttons {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }
}

#Body {
  position: relative;
}

#current-workout {
  flex: right;
}

button {
  width: fit-content;
  margin: 2px auto;
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: black;
  padding: 1px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 80px;
}
</style>
