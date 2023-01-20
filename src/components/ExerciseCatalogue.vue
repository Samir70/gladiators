<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  components: { GlassBubble },
};
</script>

<script setup>
import GlassBubble from "./GlassBubble.vue";
import ExerciseCatalogueBody from "./ExerciseCatalogueBody.vue";
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
      <button @click="show = !show">Strength</button>
    </div>
  </GlassBubble>

  <GlassBubble>
    <div id="Flexibility-button">
      <button @click="show = !show">Flexibility</button>
    </div>
  </GlassBubble>

  <GlassBubble>
    <div id="Cardio-button">
      <button @click="show = !show">Cardio</button>
    </div>
  </GlassBubble>

  <div id="strength-div">
    <p v-if="show">
      <GlassBubble id="strength-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Curls">Curls</option>
          <option value="Squats">Squats</option>
          <option value="Pushups">Pushups</option>
        </select>
      </GlassBubble>
    </p>
  </div>

  <div id="flex-div">
    <p v-if="show">
      <GlassBubble id="flex-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Pecstretch">Pec stretch</option>
        </select>
      </GlassBubble>
    </p>
  </div>

  <div id="cardio-div">
    <p v-if="show">
      <GlassBubble id="cardio-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Starjumps">Starjumps</option>
        </select>
      </GlassBubble>
    </p>
  </div>
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
