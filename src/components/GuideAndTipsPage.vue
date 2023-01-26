<script setup>
import GlassBubble from './GlassBubble.vue';
import ProfileButton from './Buttons/ProfileButton.vue';
import LogoutButton from "./LogoutButton.vue";

</script>

<template>
  <div id="guidepage">
  <h1>Guide and Tips Page</h1>

  <GlassBubble id="userguide-nav-bubble">

    <button class="button" @click="$router.push('dashboard')"> 
<p>Dashboard</p>
</button>

<ProfileButton />

<LogoutButton />

<br>
  </GlassBubble>
  
  <br>

  <GlassBubble id="info">
    <h1>Strength Training Guide</h1>
    <br>
    <h2> Endurance Training</h2>
    <p> Weight - 50% to 65% of 1 Rep Max</p>
    <p>REPS - 12 to 20</p>
    <p>Sets - 2 to 4</p>
    <br>
    <h2> Hypertrophy Training</h2>
    <p> Weight - 70% to 85% of 1 Rep Max</p>
    <p>REPS - 8 to 12</p>
    <p>Sets - 3 to 4</p>
    <br>
    <h2> Maximal Strength Training</h2>
    <p> Weight - 85% to 100% of 1 Rep Max</p>
    <p>REPS - 1 to 5</p>
    <p>Sets 3 - 6</p>
  </GlassBubble>
</div>

</template>

<style scoped>

@media only screen and (max-width: 600px) {
  #guidepage {
    flex-direction: column;
    margin: auto;
  }

  #userguide-nav-bubble {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }
  #info {
    flex-direction: row;
    margin: auto;
    transform: scale(0.75);
    height: fit-content;
  }
}

button {
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: black;
  padding: 1px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 80px;
}
</style>