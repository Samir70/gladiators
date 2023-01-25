<script>
import vueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: {
    vueCal
  },
  data: () => ({
    events: [
      {
        title: 'Workout 29329',
        content: '["a","b"]',
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
  })
}



</script>

<template>

</template>