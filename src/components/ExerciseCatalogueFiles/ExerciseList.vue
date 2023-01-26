<script setup>
import GlassBubble from "../GlassBubble.vue";
import { ref } from "vue";
import { propsToAttrMap } from "@vue/shared";
import { useRouter } from "vue-router";
import { store } from "../../store"

document
  .querySelectorAll(".muscle-groups svg g g[id]")
  .forEach(function (group) {
    // For the hover
    group.addEventListener("mouseover", function (el) {
      let id = el.path[1].id.toLowerCase();
      if (!id) id = el.path[2].id.toLowerCase();
      let label = document.querySelectorAll("label[for=" + id + "]")[0];
      if (label.classList) label.classList.add("hover");
      else label.className += " " + "hover";
    });
    group.addEventListener("mouseout", function (el) {
      let id = el.path[1].id.toLowerCase();
      if (!id) id = el.path[2].id.toLowerCase();
      let label = document.querySelectorAll("label[for=" + id + "]")[0];
      let clss = "hover";
      if (label.classList) label.classList.remove(clss);
      else
        label.className = label.className.replace(
          new RegExp("(^|\\b)" + clss.split(" ").join("|") + "(\\b|$)", "gi"),
          " "
        );
    });
    // For the click
    group.addEventListener("click", function (el) {
      let id = el.path[1].id.toLowerCase();
      if (!id) id = el.path[2].id.toLowerCase();
      let input = document.getElementById(id);
      if (input.checked) input.checked = false;
      else input.checked = true;
    });
  });

const props = defineProps({
  tag: String,
});

const emit = defineEmits(["exerciseAdded"])

const router = useRouter()

// let results = [{ username: "Bob" }, { username: "Sally" }];
let exercises = ref([]);
const getExercises = async () => {
  try {
    exercises.value = await fetch("/.netlify/functions/getExercises", {
      method: "POST",
      body: JSON.stringify({
        tag: props.tag,
      }),
    }).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
};

const addExercise = async (exercise) => {
  console.log("add exercise to array", exercise)

  store.commit("add_to_workout", exercise);
  emit("exerciseAdded", exercise)
  // router.push("dashboard")
  return
}

const removeExercise = async (exercise) => {
  console.log("remove exercise from array", exercise)
  store.commit("remove_from_workout", exercise);
  // router.push("dashboard")
  return
}

const showDescription = async(exercise) => {
  let desc = exercise.description
  window.alert(desc)
}

console.log(props.tag);
getExercises();
</script>

<!-- <script>

export default {
  methods: {
    getExercises() {
    }
  }
};

</script> -->

<template>

  <h2>Pick an exercise</h2>
  <p>Click an exercise to view instructions</p>
  <div id="exercise-buttons">
    <GlassBubble>
      <p v-for="exercise of exercises">
        <button @click="showDescription(exercise)">{{ exercise.name }}</button>
        <button @click="addExercise(exercise);">Add to Workout</button>
      </p>
    </GlassBubble>
  </div>
</template>









<style scoped>

</style>
