<script setup>
import {ref} from "vue";
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

  <StrengthScript v-if="show=='strength'|| show=='all'"></StrengthScript>
  <CardioScript v-if="show=='cardio'|| show=='all'"> </CardioScript>
  <FlexScript v-if="show=='flex'|| show=='all'"> </FlexScript>

</template>


-->

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
</style>
