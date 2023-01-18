<script setup>
import { ref } from 'vue'
import { store } from "../store"

defineProps({
  msg: String,
})

// let results = [{ username: "Bob" }, { username: "Sally" }];
let results = ref([])
const getResults = async () => {
  try {
    results.value = await fetch("/.netlify/functions/getUsers").then(response => response.json())
  } catch (error) {
    console.error(error)
  }
}

getResults();

const increment = () => {
  store.commit("increment", 5)
}

</script>

<template>
  <h1>Home page</h1>
  <p>Counter is {{ store.state.count }}</p>
  <button v-on:click="increment">Increment counter</button>

  <p v-for="result of results">{{ result.email }}</p>
</template>

<style scoped>

</style>
