
<script setup>
import GlassBubble from './GlassBubble.vue';
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { store } from "../store"
import { ref } from "vue"

const user = ref(store.state.user)
let userHistory = ref("")
let userWorkoutCount = ref("")
let events = ref([])

const getHistory = async () => {
    let result = await fetch(`/.netlify/functions/getHistory`, {
        method: "POST",
        body: JSON.stringify({ username: user.value.username})
    })
    .then(function (response) { return response
    .json() }).then(function (data) {userHistory = data; userWorkoutCount = userHistory.workout.length;
      for(let i=0;i<userWorkoutCount;i++){
  events.value.push({title: "Workout " + i, 
    start: userHistory.workout[i].date.slice(0,10), 
    end: userHistory.workout[i].date.slice(0,10), 
    content:userHistory.workout[i].exercises, 
    class:'done'})
}
console.log(events)
    })}





</script>

<template>

  <button v-on:click="getHistory">View your history</button>
  <p>
    {{ userHistory.workout }}
  </p>
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


    <div id="bodycontainer">
  
  <div>
<vue-cal
    class="vuecal--date-picker"
    xsmall
    hide-view-selector
    :time="false"
    active-view="month"
    :disable-views="['week']"
    :events=events
    style="width: 540px;height: 600px;">
</vue-cal>


  </div>





    </div>


</template>

<style scoped>
#profilecontainer {
  width: 85vw;
}

.vuecal {
  background-color:lightslategray;
}
.done{
  background-color: black;
  
}



</style>