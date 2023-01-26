
<script setup>
import GlassBubble from './GlassBubble.vue';
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { store } from "../store"
import { ref } from "vue"
import moment from 'moment'


const user = ref(store.state.user)

let loggedIn = ref(user.value === null ? false : true)

let userHistory = ref("")
let userWorkoutCount = ref(0)
let events = ref([])
let showCalendar = ref(false)

const getHistory = async () => {
  let result = await fetch(`/.netlify/functions/getHistory`, {
    method: "POST",
    body: JSON.stringify({ username: user.value.username })
  })
    .then(function (response) {
      return response
        .json()
    }).then(function (data) {
      userHistory = data;
      console.log("Userhistory:", userHistory)
      userWorkoutCount.value = userHistory.workout.length;
      showCalendar.value = true;
      for (let i = 0; i < userWorkoutCount.value; i++) {
        let list = '<ul>'
        userHistory.workout[i].exercises.forEach(item => {
          list += `<li>${item}</li>`
        })
        events.value.push({
          title: "Workout " + (Number(i) + 1),
          start: moment(userHistory.workout[i].date).format('YYYY-MM-DD'),
          end: moment(userHistory.workout[i].date).format('YYYY-MM-DD'),
          content: list,
          class: 'done'
        });
        // const calendarReveal = document.getElementById("workoutcalendar")
        // calendarReveal.style = "display:block"
        // document.getElementById("revealbutton").disabled = true;

      }

    })
}
if (loggedIn.value) {
  getHistory()
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

  <h2 id="workoutCounter" v-if="loggedIn"> You have worked out {{ userWorkoutCount }} times since you began your
    journey! </h2>
  <h2 v-else> You are not logged in.</h2>

  <div id=workoutcalendar v-if="showCalendar">
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