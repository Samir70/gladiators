<script setup>
import GlassBubble from './GlassBubble.vue';

</script>

<template>
    <GlassBubble>
      <div id="homebutton" style="display:inline-block;">

        <button class="button" style="width:120px" @click="$router.push('dashboard')">
          <h2>Home</h2>
        </button>
      </div>
      <div style="display:inline-block;">
        <h1 id="profile-title">My Workout History</h1>
      </div>
    </GlassBubble>


</template>

<style scoped>
#profilecontainer {
  width: 85vw;
}
</style>