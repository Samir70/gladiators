<script setup>
import GlassBubble from './GlassBubble.vue';


</script>

<template>
  <h1>Guide and Tips Page</h1>

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

</template>

<style scoped>
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