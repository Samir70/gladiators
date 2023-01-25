<script>
  import GlassBubble from './GlassBubble.vue';


// import datepicker from "vue-awesome-datepicker";
// import "vue-awesome-datepicker/dist/font-default.css"; //if you want default fonts
// export default {
//   components: {
//     datepicker,
//   },
//   data() {
//     return { date: {},dateGreg:{} };
//   },
// };
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    vueCal
  },
  data: () => ({
    events: [
      {
        title: 'Event 1',
        start: new Date(2023, 0, 25),
        end: new Date(2023, 0, 25),
        allDay: true,
        class: 'red-event'
      },
      {
        title: 'Event 2',
        start: new Date(2023, 0, 26),
        end: new Date(2023, 0, 26),
        class: 'blue-event'
      }
    ]
  }),

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

.blue-event{
  background-color: black;
  
}



</style>