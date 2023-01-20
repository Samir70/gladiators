<script setup>
import GlassBubble from './GlassBubble.vue';

</script>

<template>
  <div id="flex-div">
      <GlassBubble id="flex-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Pecstretch">Pec stretch</option>
        </select>
      </GlassBubble>
  </div>
</template>