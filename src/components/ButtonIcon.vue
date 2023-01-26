<script setup>
</script>

<template>
  <div class="button-class">
    <slot><p>This Button was passed no child components!</p></slot>
  </div>
  
</template>

<style scoped>
.button {
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: rgb(0, 0, 0);
  padding: 1px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 80px;
}
</style>