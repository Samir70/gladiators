<script setup>
import GlassBubble from './GlassBubble.vue';
import { useRouter } from "vue-router";
import { store } from "../store"

import { ref } from "vue";

const router = useRouter()

const newUserName = ref("")
const newUserEmail = ref("")
const newUserPassword = ref("")
const signUpStatus = ref({signUpFailed: false, msg: ""})

const signUp = async () => {
  let result = await fetch(`/.netlify/functions/addUser`, {
    method: "POST",
    body: JSON.stringify({ username: newUserName.value, email: newUserEmail.value, password: newUserPassword.value })
  }).then(response => response.json())
  // console.log("From SignUp Page", result)
  if (result.signUpFailed) {
    signUpStatus.value = {signUpFailed: true, msg: result.msg}
  } else {
    store.commit("login", result.newUser)
    router.push("survey")
  }
}
</script>

<template>
  <GlassBubble id="home-link">
   <button @click="$router.push('/')" id="home-button"> Home </button>

 </GlassBubble>
  <GlassBubble id="signup-bubble">
    <h1>Sign Up</h1>
    <form id="signup-form" @submit.prevent="signUp">
      <p id="signup-failed-error" v-if="signUpStatus.signUpFailed">Unable to sign up because: {{ signUpStatus.msg }}</p>
      <input id="name-field" type="text" placeholder="Username" v-model="newUserName" required />
      <input id="email-field" type="email" placeholder="Email" v-model="newUserEmail" required />
      <input id="password-field" type="password" placeholder="Password" v-model="newUserPassword" required />
      <button id="signup-button" v-on:click="signUp">Sign Up</button>
    </form>
  </GlassBubble>
  
  

</template>

<style scoped>
input {
  width: 40vw;
}

#home-link {
  width: fit-content;
  padding: 10px;
}

#signup-bubble #signup-form {
  display: flex;
  flex-direction: column;
  padding: 5px 40px;
}

button {
  width: fit-content;
}

#signup-failed-error {
  color: red;
  font-weight: bold;
}
</style>