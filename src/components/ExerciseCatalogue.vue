<script setup>
import { ref } from "vue";
import { store } from "../store";
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueFiles/ExerciseCatalogueBody.vue";
import ExerciseList from "./ExerciseCatalogueFiles/ExerciseList.vue";
let show = ref("");

const currentworkout = ref(store.state.currentworkout);
const exercisecount = ref(store.state.currentworkout.length);
</script>

<script>
export default {
  methods: {
    refreshPage() {
      this.$forceUpdate();
    },
  },
};
</script>

<template>
  <div id="exercise-catalogue">
    <GlassBubble id="userguide-nav-bubble">
      <button class="button" @click="$router.push('dashboard')">
        <p>Dashboard</p>
      </button>
      <button class="button" @click="$router.push('profilepage')">
        <img
          id="profile_logo"
          src="/spartan-helmet.png"
          style="width: 50px; height: 50px"
        />
      </button>

      <button class="button" @click="$router.push('/')">
        <p>Log Out</p>
      </button>
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

    <ExerciseList
      v-if="show == 'strength' || show == 'all'"
      tag="strength"
    ></ExerciseList>
    <ExerciseList
      v-if="show == 'flex' || show == 'all'"
      tag="flex"
    ></ExerciseList>
    <ExerciseList
      v-if="show == 'cardio' || show == 'all'"
      tag="cardio"
    ></ExerciseList>

    <div id="current-workout">
      <GlassBubble>
        <p>{{ exercisecount }} of 5 exercises selected</p>
        <button id="refreshworkout" @click="refreshPage()">
          Refresh Workout
        </button>
        <p>{{currentworkout}}</p>
      </GlassBubble>
    </div>

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
