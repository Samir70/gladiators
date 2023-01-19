<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="header">
    <!-- <a href="/tanyaspage">Tanya's Page</a>
    <a href="/hello">Hello World</a> -->
    <!-- <router-link to="/hello">Hello world</router-link> 
    <router-link to="/tanyaspage">Tanya's Page</router-link> -->
    <!-- <router-link to="/exercisecatalogue">Exercise Catalogue</router-link> -->
  </div>
  <!-- <HelloWorld msg="Will this work?" /> -->
  <router-view></router-view>
</template>

<style scoped>

</style>
