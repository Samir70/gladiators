<script setup>
import { ref } from "vue";
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueBody.vue";
import StrengthScript from "./StrengthScript.vue";
import FlexScript from "./FlexScript.vue";
import CardioScript from "./CardioScript.vue";
let show = ref("")
</script>

<template>
  <div id="ExerciseCatalogue">
    <div id="header">
      <h1>All Exercises Catalogue</h1>
    </div>
  </div>

  <div id="Body">
    <ExerciseCatalogueBody> </ExerciseCatalogueBody>
  </div>

  <GlassBubble>
    <div id="All-button">
      <button @click="show = 'all'">All</button>
    </div>
  </GlassBubble>
  <GlassBubble id="userguide-nav-bubble" style=" position: absolute;
  left: 100px;">

    <button class="button" @click="$router.push('dashboard')">
      <p>Dashboard</p>
    </button>

    <button class="button" @click="$router.push('profilepage')">
      <img
        src="https://cdn.dribbble.com/users/1018252/screenshots/4659653/media/a2417f6c672fe11596822ea7c4cebcc8.png?compress=1&resize=400x300&vertical=top"
        style="width: 150px;
height: 100px; border-radius: 80px;">
      <p>Profile</p>
    </button>

    <br>

    <button class="button" @click="$router.push('landingpage')">
      <p>Log Out</p>
    </button>

    <br>
  </GlassBubble>



  <GlassBubble id="muscles" style=" position: absolute;
  left: 100px; top:400px;">
    <ExerciseBody>
    </ExerciseBody>
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

  <StrengthScript v-if="show == 'strength' || show == 'all'"></StrengthScript>
  <CardioScript v-if="show == 'cardio' || show == 'all'"> </CardioScript>
  <FlexScript v-if="show == 'flex' || show == 'all'"> </FlexScript>

</template>

<style scoped>
#Body {
  position: absolute;
  left: 20px;
  top: -100px;
}

#exercises-bubble {
  padding: 10px;
  width: 200px;
  height: 150px;
}

#selection-bubble {
  padding: 10px;
  width: 200px;
}

#dropdown-for-type {
  position: absolute;
  right: 9pc;
  top: 10pc;
}

#flexibility {
  position: absolute;
  right: 9pc;
  top: 30pc;
}

#cardio {
  position: absolute;
  right: 9pc;
  top: 30pc;
}

#placeholder {
  position: absolute;
  right: 9pc;
  top: 17pc;
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
