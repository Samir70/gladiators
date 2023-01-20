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
  <div id="cardio-div" v-if="cardio">
      <GlassBubble id="cardio-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Starjumps">Starjumps</option>
        </select>
      </GlassBubble>
  </div>
</template>