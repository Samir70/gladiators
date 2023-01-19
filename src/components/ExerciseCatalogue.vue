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
        <ExerciseBody >
        </ExerciseBody>
    </div>

    <div id="dropdown-for-type">
      <GlassBubble id="exercises-bubble">
        <p>Training Type</p>
        <label>Exercises</label>
        <select>
          <option id="strength" value="strength">Strength</option>
          <!-- figure out if statement, maybe use buttons instead -->


          <option id="flexibility" value="flexibility">Flexibility</option>
          <option id="cardio" value="cardio">Cardio</option>
        </select>
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



#exercises-bubble{
  padding: 10px;
  width: 200px
}

#selection-bubble{
  padding: 10px;
  width: 200px
}

#dropdown-for-type{
  position: absolute;
  right: 9pc;
  top: 10pc
}

#dropdown-for-exercise {
  position: absolute;
  right: 9pc;
  top: 17pc;
}

#placeholder {
  position: absolute;
  right: 9pc;
  top: 17pc;
}

</style>
