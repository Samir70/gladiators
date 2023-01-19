<script setup>
import GlassBubble from './GlassBubble.vue';

</script>

<template> 
  <GlassBubble id="welcome-bubble">
    <h1 id="landingpage-welcome">Welcome To Gladimakers</h1>
    <img id="gladiator-thumbsup" src="../../public/GladiatorThumbsUp.png" />
    <p id="welcome-blurb">Even if your name isn't Maximus Decimus Meridius, we can still help you achieve your goals.</p>
  </GlassBubble>

  <GlassBubble id="buttons-bubble">
    <button>Sign In</button>
    <button>Sign Up</button>
  </GlassBubble>
</template>

<style scoped>
/* colour pallete idea */
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
}
#buttons-bubble {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  float: left;
  top: 50;
  width: 25vw;
}
button {
  width: fit-content;
  margin: 2px auto;
}
</style>