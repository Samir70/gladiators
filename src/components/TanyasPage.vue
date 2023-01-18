<script setup>
import { store } from "../store"
const increment = () => {
  store.commit("increment", 5)
}
</script>

<template>
  <h1>This is Tanya's Page</h1>
  <p>Counter is {{ store.state.count }}</p>
  <button v-on:click="increment">Increment counter</button>
</template>

<style scoped>

</style>
