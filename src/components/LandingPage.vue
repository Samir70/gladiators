<script setup>
import GlassBubble from './GlassBubble.vue';
</script>

<template>
  <div id="landingpage">
    <GlassBubble id="buttons-bubble">
      <button @click="$router.push('signinpage')">Sign In</button>
      <button @click="$router.push('signuppage')">Sign Up</button>
    </GlassBubble>

    <GlassBubble id="welcome-bubble">
      <h1 id="landingpage-welcome">Welcome To Gladimakers</h1>
      <img id="gladiator-thumbsup" src="/GladiatorThumbsUp.png" />
      <p id="welcome-blurb">Even if your name isn't Maximus Decimus Meridius, we can still help you achieve your goals.
      </p>
    </GlassBubble>
  </div>
</template>

<style scoped>
/* colour pallete idea */
#landingpage {
  width: fit-content;
  margin: auto;
}

#landingpage-welcome {
  margin: auto;
  width: fit-content;
  font-size: large;
  padding: 0px 20px;
}

#gladiator-thumbsup {
  width: 65vw;
}

#welcome-blurb {
  width: fit-content;
  margin: auto;
  padding: 0px 10px;
  width: 65vw;
}

#welcome-bubble {
  float: right;
  top: 50px;
  width: fit-content;
  padding: 20px 0px;
}

#buttons-bubble {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  float: left;
  top: 50;
  padding: 0px 20px;
  width: fit-content;
  /* max-width: 25vw; */
}

button {
  width: fit-content;
  margin: 2px auto;
}

@media only screen and (max-width: 600px) {
  #welcome-bubble {
    margin: auto;
    position: unset;
    float: unset;
  }

  #buttons-bubble {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: unset;
    float: unset;
    margin: 0px auto 10px;
    padding: 0px 10px;
  }

  button {
    margin: 2px 10px;
  }
}
</style>