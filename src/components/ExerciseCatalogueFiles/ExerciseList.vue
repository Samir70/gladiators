<script setup>
import GlassBubble from '../GlassBubble.vue';
import { ref } from 'vue'
import { propsToAttrMap } from '@vue/shared';

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
})

// let results = [{ username: "Bob" }, { username: "Sally" }];
let results = ref([])
const getExercises = async () => {
  try {
    results.value = await fetch("/.netlify/functions/getExercises", {
      method: "POST",
      body: JSON.stringify({
        tag: props.tag
      })
    }).then(response => response.json())
  } catch (error) {
    console.error(error)
  }
}
console.log(props.tag)
getExercises();

</script>

<template>
  <p>{{ results }}</p>
  <p> {{ tag }}</p>
      <div id="strength-div">
      <GlassBubble id="strength-bubble">
        <p>Pick an exercise to see the parts used</p>
        <div id="curls-button">
          <button @click="show = 'curls'">Curls</button>
        </div>
      </GlassBubble>
  </div>
</template>

<style lang="scss" scoped>

$black: #333;
$white: #eee;
$color-1: #00bcd4;
$label-z: 200;
$svg-z: 100;
.muscle-groups {
  // whole thing
  float: left;
  position: sticky;
  background: #eee;
  width: 320px;
  height: 390px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(black, 0.5);
  overflow: hidden;
  border-top: 0.75rem solid $color-1;
  // text is now hidden
  h1 {
    margin: -0.5rem -1rem 1rem;
    padding: 0 1rem 0.75rem;
    background: $color-1;
    color: $white;
    text-align: center;
    font-size: 1.25rem;
  }
  h2 {
    position: relative;
    margin: 0 0 0.5rem;
    font-size: 0.8rem;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-align:left
  }
  h3 {
    text-align:left;
    margin: 0 0 0.5rem;
    font-size: 0.8rem;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-align:left
  }
  label + h2 {
    margin-top: 1rem;
  }
  label {
    width: 50px;
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-size: 0.7rem;
    opacity: 0.5;
    position: left;
    z-index: $label-z;
    border-left: 5px solid transparent;
    padding-left: 6px;
    margin-left: -11px;
    &:hover,
    &.hover {
      opacity: 1;
      border-color: rgba($black, 0.75);
    }
  }
  input:checked + label {
    opacity: 1;
    font-weight: bold;
    color: $color-1;
  }

  //picturess
  svg {
    position: absolute;
    align-items: right;
    right: -1.5rem;
    bottom: 3rem;
    height: 320px;
    z-index: $svg-z;
  }
  svg g[id] path {
    opacity: 0.2;
    transition: opacity 0.25s ease-in-out;
  }
  svg g g[id]:hover path {
    cursor: pointer;
    opacity: 0.5;
    fill: $color-1 !important;
  }
  .muscles-helper {
    display: none;
  }
  $groups: obliques, abs, quads, biceps, adductors, pectorals, deltoids,
    hamstrings, quads, forearms, calves, triceps, glutes, lats, trapezius;
  @each $muscle in $groups {
    $upper: to-upper-case(str-slice($muscle, 1, 1)) + str-slice($muscle, 2);
    label[for="#{$muscle}"]:hover ~ svg ##{$upper} path {
      opacity: 0.75;
    }
    .#{$muscle}:checked ~ svg ##{$upper} path {
      opacity: 0.8;
      fill: $color-1 !important;
    }
  }
}
</style>