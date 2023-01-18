<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="header">
    <!-- <a href="/tanyaspage">Tanya's Page</a>
    <a href="/hello">Hello World</a> -->
    <router-link to="/hello">Hello world</router-link> 
    <router-link to="/tanyaspage">Tanya's Page</router-link>
    <router-link to="/exercisecatalogue">Exercise Catalogue</router-link>
  </div>
  <!-- <HelloWorld msg="Will this work?" /> -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
