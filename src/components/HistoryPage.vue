<script setup>
import GlassBubble from './GlassBubble.vue';
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { store } from "../store"
import { ref } from "vue"

const user = ref(store.state.user)


// export default {
//   components: {
//     vueCal
//   },
//   data: () => ({
//     events: [
//       {
//         title: 'Workout 29329',
//         content: '["a","b"]',
//         start: new Date(2023, 0, 25),
//         end: new Date(2023, 0, 25),
//         allDay: true,
//         class: 'red-event'
//       },
//       {
//         title: 'Event 2',
//         start: new Date(2023, 0, 26),
//         end: new Date(2023, 0, 26),
//         class: 'blue-event'
//       }  
//     ]
//   })
// }

const getHistory = async () => {

    let result = await fetch(`/.netlify/functions/getHistory`, {
        method: "POST",
        body: JSON.stringify({ userID: user.value._id})
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.results) })

}



</script>

<template>

  <button v-on:click="getHistory">Click me</button>
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
    :events="events"
    style="width: 540px;height: 600px;">
</vue-cal>


  </div>





    </div>


</template>

<style scoped>
#profilecontainer {
  width: 85vw;
}

.vuecal__header {
background:red !important}
.blue-event{
  background-color: black;
  
}



</style>