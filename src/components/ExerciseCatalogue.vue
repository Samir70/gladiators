<script setup>
import GlassBubble from './GlassBubble.vue';
import ExerciseBody from "./ExerciseCatalogueBody.vue";
</script>

<template>
  <div id="header">
    <h1>All Exercises Catalogue</h1>
  </div>

  <div id="topnav-buttons">
    <!--
    - back to dashboard button
    - logout button?
    - profile buton?
-->
  </div>


  <GlassBubble id="muscles">
    <ExerciseBody>
    </ExerciseBody>
  </GlassBubble>

  <!-- Category filter buttons, cardio, strength, stretches -->
</template>

<style scoped>
</style>
