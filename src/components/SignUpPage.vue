<script setup>
import GlassBubble from './GlassBubble.vue';
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter()

const newUserName = ref("")
const newUserEmail = ref("")
const newUserPassword = ref("")

const signUp = async () => {
  console.log(newUserName.value, newUserEmail.value, newUserPassword.value)
  // router.push("dashboard")
  await fetch(`/.netlify/functions/addUser?email=${newUserEmail.value}&username=${newUserName.value}&password=${newUserPassword.value}`)

}
</script>

<template>
  <GlassBubble id="signup-bubble">
    <h1>Sign Up</h1>
    <input id="name-field" type="text" placeholder="Username" v-model="newUserName" required />
    <input id="email-field" type="email" placeholder="Email" v-model="newUserEmail" required />
    <input id="password-field" type="password" placeholder="Password" v-model="newUserPassword" required />
    <p></p>
    <button id="signup-button" v-on:click="signUp">Sign Up</button>
  </GlassBubble>

</template>

<style scoped>
input {
  width: 40vw;
}

#signup-bubble {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

button {
  width: fit-content;
}
</style>