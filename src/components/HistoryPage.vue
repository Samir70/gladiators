
<script setup>
import GlassBubble from './GlassBubble.vue';
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { store } from "../store"
import { ref } from "vue"
import moment from 'moment'


const user = ref(store.state.user)

let userHistory = ref("")
let userWorkoutCount = ref("")
let events = ref([])

const getHistory = async () => {
  let result = await fetch(`/.netlify/functions/getHistory`, {
    method: "POST",
    body: JSON.stringify({ username: user.value.username })
  })
    .then(function (response) {
      return response
        .json()
    }).then(function (data) {
      userHistory = data; userWorkoutCount = userHistory.workout.length;
      for (let i = 0; i < userWorkoutCount; i++) {
        let list = '<ul>'
        userHistory.workout[i].exercises.forEach(item => {
          list += `<li>${item}</li>`
        })
        events.value.push({
          title: "Workout " + (Number(i)+1),
          start: moment(userHistory.workout[i].date).format('YYYY-MM-DD'),
          end: moment(userHistory.workout[i].date).format('YYYY-MM-DD'),
          content: list,
          class: 'done'
        });
        console.log(userWorkoutCount)
        const calendarReveal = document.getElementById("workoutcalendar")
        calendarReveal.style = "display:block"
        const workoutCounter = document.getElementById("workoutCounter")
        workoutCounter.style = "display:block"
        document.getElementById("revealbutton").disabled = true;

      }

    })
}


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
  <h2 id="workoutCounter" style="display:none"> You have worked out {{ userWorkoutCount}} times since you began your journey! </h2>
  
  <button id="revealbutton" v-on:click="getHistory">View your history</button>


  <div id=workoutcalendar style="display:none">
    <vue-cal class="vuecal--date-picker" xsmall hide-view-selector :time="false" active-view="month"
      :disable-views="['week']" :events=events style="width: 650px;height: 600px;">
    </vue-cal>

  </div>







</template>

<style scoped>
#profilecontainer {
  width: 85vw;
}

.vuecal {
  background-color: lightslategray;
}

.done {
  background-color: black;

}
</style>