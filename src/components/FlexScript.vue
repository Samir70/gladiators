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
  <div id="flex-div" v-if="flex">
      <GlassBubble id="flex-bubble">
        <p>Pick an exercise to see the parts used</p>
        <label>Exercises</label>
        <select>
          <option value="Pecstretch">Pec stretch</option>
        </select>
      </GlassBubble>
  </div>
</template>