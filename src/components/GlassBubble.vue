<script setup>
</script>

<template>
  <div class="bubble-class">
    <slot><p>This Glass Bubble was passed no child components!</p></slot>
  </div>
  
</template>

<style scoped>
.bubble-class {
    background: rgba(255, 255, 255, 0.2);
    border: .1vmin solid rgba(219, 219, 219, 0.1);
    border-radius: 40px;
    padding: 10px;
    overflow: hidden;
    box-shadow: 0 .5vmin 1vmin rgba(0, 0, 0, .4);
    margin: 10px;
}
</style>
