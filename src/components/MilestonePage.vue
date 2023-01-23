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
            <h1 id="profile-title">Milestones</h1>
        </div>
    </GlassBubble>

    <body>



        <form id="milestones-text">
            <label for="milestones"> <b> Milestones</b></label><br>
            <input style="height:150px; width:300px; display: inline-block; margin-left: 30px; background-color:#848C7B;
             border: 2px solid black; border-radius: 20px;" type="text" id="fname" name="fname" value=""><br>

        </form>

    </body>




</template>

<style scoped>
#profilecontainer {
    width: 85vw;
}

.button {
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 80px;
}

</style>