<script setup>
import GlassBubble from './GlassBubble.vue';
import ExerciseBody from "./ExerciseCatalogueBody.vue";
</script>

<template>
  <div id="header">
    <h1>All Exercises Catalogue</h1>
  </div>

  <GlassBubble id="userguide-nav-bubble">

<button class="button" @click="$router.push('dashboard')"> 
<p>Dashboard</p>
</button>

<button class="button" @click="$router.push('profilepage')">
    <img src="https://cdn.dribbble.com/users/1018252/screenshots/4659653/media/a2417f6c672fe11596822ea7c4cebcc8.png?compress=1&resize=400x300&vertical=top" style="width: 150px;
height: 100px; border-radius: 80px;">
    <p>Profile</p>
</button>

<br>

<button class="button" @click="$router.push('landingpage')"> 
<p>Log Out</p>
</button>

<br>
</GlassBubble>



  <GlassBubble id="muscles">
    <ExerciseBody>
    </ExerciseBody>
  </GlassBubble>

  <!-- Category filter buttons, cardio, strength, stretches -->
</template>

<style scoped>

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
