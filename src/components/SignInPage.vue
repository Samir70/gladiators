<script setup>
import GlassBubble from './GlassBubble.vue';
import { useRouter } from "vue-router";
import { store } from "../store"

import { ref } from "vue";

const router = useRouter()

const userEmail = ref("")
const userPassword = ref("")

const signIn = async () => {
  console.log("user wants to sign in")
  let result = await fetch(`/.netlify/functions/loginUser`, {
    method: "POST",
    body: JSON.stringify({ userEmail: userEmail.value, userPassword: userPassword.value })
  }).then(response => response.json())
  console.log("SignIn result:", result)
  return
}

</script>

<template>
  <GlassBubble id="signin-bubble">
    <h1>Sign In</h1>
    <input id="email-field" type="email" placeholder="Email" v-model="userEmail" required />
    <input id="password-field" type="password" placeholder="Password" v-model="userPassword" required />
    <button id="signin-button" v-on:click="signIn" type="submit">Sign In</button>
  </GlassBubble>
</template>

<style scoped>
#signin-form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

input {
  width: 40vw;
}

button {
  margin: 10px 5px;
  width: fit-content;
}
</style>