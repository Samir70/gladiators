<script setup>
import GlassBubble from "./GlassBubble.vue";
import ExerciseBody from "./ExerciseCatalogueBody.vue";
</script>

<template>
  <div id="ExerciseCatalogue">
    <div id="header">
      <h1>All Exercises Catalogue</h1>
      <!--
      - back to dashboard button
      - logout button?
      - profile buton?
  -->
    </div>

    <div id="Body">
      <ExerciseBody> </ExerciseBody>
    </div>

    <div id="dropdown-for-type">
      <GlassBubble id="exercises-bubble">
        <p>Training Type</p>
        <button id="strength" value="strength" @click="isShow = !isShow">Strength</button>
        <!-- figure out if statement, maybe use buttons instead -->

        <button id="flexibility" value="flexibility" @click="isShow = !isShow">Flexibility</button>
        <button id="cardio" value="cardio" @click="isShow = !isShow">Cardio</button>
      </GlassBubble>
    </div>

    <!-- If statement to show specific dropdown -->

    <div id="strength">
      <GlassBubble id="selection-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Curls">Curls</option>
          <option value="Squats">Squats</option>
          <option value="Pushups">Pushups</option>
        </select>
      </GlassBubble>
    </div>

    <div id="placeholder">
      <p>Pick summat else</p>
    </div>

    <!-- Category filter buttons, cardio, strength, stretches -->
  </div>
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

#strength {
  position: absolute;
  right: 9pc;
  top: 18pc;
}

#placeholder {
  position: absolute;
  right: 9pc;
  top: 17pc;
}
</style>
