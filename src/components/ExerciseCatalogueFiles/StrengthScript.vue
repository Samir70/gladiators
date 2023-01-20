<script setup>
import GlassBubble from '../GlassBubble.vue';
</script>

<template>
      <div id="strength-div">
      <GlassBubble id="strength-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Curls">Curls</option>
          <option value="Squats">Squats</option>
          <option value="Pushups">Pushups</option>
        </select>
      </GlassBubble>
  </div>
</template>