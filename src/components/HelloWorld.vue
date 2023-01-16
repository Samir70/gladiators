<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

// let results = [{ username: "Bob" }, { username: "Sally" }];
let results = ref([])
const getResults = async () => {
  try {
    results.value = await fetch("/.netlify/functions/getUsers").then(response => response.json())
    console.log("temp is", temp)
  } catch (error) {
    console.error(error)
  }
}

getResults();


</script>

<template>
  <h1>{{ msg }}</h1>

  <p v-for="result of results">{{ result.username }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
