<script>
export default {
  data() {
    return {
      show: true
    }

  },
  components: { GlassBubble },
};

</script>

<script setup>
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueBody.vue";
import StrengthScript from "./StrengthScript.vue";
import FlexScript from "./FlexScript.vue";
import CardioScript from "./CardioScript.vue"
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
      <button @click="show = !show">All</button>
    </div>
  </GlassBubble>

  <GlassBubble>
    <div id="strength-button">
      <button @click="strength = !strength">Strength</button>
    </div>
  </GlassBubble>

  <GlassBubble>
    <div id="Flexibility-button">
      <button @click="flex = !flex">Flexibility</button>
    </div>
  </GlassBubble>

  <GlassBubble>
    <div id="Cardio-button">
      <button @click="cardio = !cardio">Cardio</button>
    </div>
  </GlassBubble>

  <StrengthScript v-if="show"> </StrengthScript>
  <CardioScript> </CardioScript>
  <FlexScript> </FlexScript>

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
