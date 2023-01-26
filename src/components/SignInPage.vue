<script setup>
import GlassBubble from './GlassBubble.vue';
import { useRouter } from "vue-router";
import { store } from "../store"

import { ref } from "vue";

const router = useRouter()

const userEmail = ref("")
const userPassword = ref("")
const failedLogin = ref(false)

const signIn = async () => {
  // console.log("user wants to sign in")
  let result = await fetch(`/.netlify/functions/loginUser`, {
    method: "POST",
    body: JSON.stringify({ email: userEmail.value, password: userPassword.value })
  }).then(response => response.json())
  // console.log("SignIn result:", result)
  if (result === "Failed login") {
    failedLogin.value = true
  } else {
    store.commit("login", result)
    router.push("dashboard")
  }
}

</script>

<template>
  <GlassBubble id="home-link">
    <button @click="$router.push('/')" id="home-button"> Home </button>
    <button @click="$router.push('signuppage')" id="signup-button"> Sign Up </button>
  </GlassBubble>
  <GlassBubble id="signin-bubble">
    <h1>Sign In</h1>
    <form id="signin-form" @submit.prevent="signIn">
      <p id="failed-login-warning" v-if="failedLogin">Sorry. At least one of email/password is wrong</p>
      <input id="email-field" type="email" placeholder="Email" v-model="userEmail" required />
      <input id="password-field" type="password" placeholder="Password" v-model="userPassword" required />
      <button id="signin-button" v-on:click="signIn" type="submit">Sign In</button>
    </form>
  </GlassBubble>
</template>

<style scoped>
#signin-bubble {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
#signin-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

#home-link {
  width: fit-content;
  padding: 10px;
}

input {
  width: 40vw;
}

button {
  margin: 10px 5px;
  width: fit-content;
}

#failed-login-warning {
  color: red;
  font-weight: bold;
}
</style>