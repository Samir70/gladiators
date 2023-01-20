<script>

import GlassBubble from './GlassBubble.vue';

export default {
  data() {
    return {
      show: true,
    };
  },
  components: { GlassBubble },
};

</script>

<template>
      <div id="strength-div" v-if="strength">
      <GlassBubble id="strength-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Curls">Curls</option>
          <option value="Squats">Squats</option>
          <option value="Pushups">Pushups</option>
        </select>
      </GlassBubble>
  </div>
</template>