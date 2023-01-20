<script setup>

import GlassBubble from './GlassBubble.vue';

</script>

<template>
  <div id="cardio-div">
      <GlassBubble id="cardio-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Starjumps">Starjumps</option>
        </select>
      </GlassBubble>
  </div>
</template>