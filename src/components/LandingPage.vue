<script setup>
import GlassBubble from './GlassBubble.vue';
</script>

<template>
  <div id="landingpage">
    <GlassBubble id="welcome-bubble">
      <h1 id="landingpage-welcome">Welcome To Gladimakers</h1>
      <img id="gladiator-thumbsup" src="../../public/GladiatorThumbsUp.png" />
      <p id="welcome-blurb">Even if your name isn't Maximus Decimus Meridius, we can still help you achieve your goals.
      </p>
    </GlassBubble>

    <GlassBubble id="buttons-bubble">
      <button @click="$router.push('signinpage')">Sign In</button>
      <button @click="$router.push('signuppage')">Sign Up</button>
    </GlassBubble>
  </div>
</template>

<style scoped>
/* colour pallete idea */
#landingpage {
  width: 85vw;
}

#landingpage-welcome {
  margin: auto;
  width: fit-content;
  font-size: large;
}

#gladiator-thumbsup {
  width: 65vw;
}

#welcome-blurb {
  width: 60vw;
  margin: auto;
}

#welcome-bubble {
  float: right;
  top: 50px;
  width: 65vw;
  padding: 20px 0px 5px;
}

#buttons-bubble {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  float: left;
  top: 50;
  padding: 0px 20px;
  max-width: 25vw;
}

button {
  width: fit-content;
  margin: 2px auto;
}
</style>