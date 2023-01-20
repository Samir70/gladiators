<script setup>
import { ref } from "vue";
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueFiles/ExerciseCatalogueBody.vue";
import StrengthScript from "./ExerciseCatalogueFiles/StrengthScript.vue";
import FlexScript from "./ExerciseCatalogueFiles/FlexScript.vue";
import CardioScript from "./ExerciseCatalogueFiles/CardioScript.vue";
let show = ref("");
</script>

<template>
  <GlassBubble
    id="userguide-nav-bubble"
    style="position: absolute; left: 100px"
  >
    <button class="button" @click="$router.push('dashboard')">
      <p>Dashboard</p>
    </button>
    <br />
    <button class="button" @click="$router.push('profilepage')">
      <img
        id="profile_logo"
        src="../../public/spartan-helmet.png"
        style="width: 100px; height: 100px; border-radius: 80px"
      />
    </button>

    <br />

    <button class="button" @click="$router.push('/')">
      <p>Log Out</p>
    </button>

    <br />
  </GlassBubble>

  <div id="ExerciseCatalogue">
    <div id="header">
      <h1>All Exercises Catalogue</h1>
    </div>
  </div>

  <GlassBubble>
    <div id="All-button">
      <button @click="show = 'all'">All</button>
    </div>
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

  <div id="Body">
    <ExerciseCatalogueBody> </ExerciseCatalogueBody>
  </div>
</template>

<style scoped>
#Body {
  position: relative;
}

#flexibility {
  position: relative;
}

#cardio {
  position: relative;
  right: -100;
}

#placeholder {
  position: relative;
}

#userguide-nav-bubble {
  width: fit-content;
  position: relative;
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
