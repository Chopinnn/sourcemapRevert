<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="triggerTypeError()">触发TypeError</p>
    <el-divider></el-divider>
    <p @click="triggerReferenceError()">触发ReferenceError</p>
    <el-divider></el-divider>
    <p @click="triggerSyntaxError()">触发SyntaxError</p>
  </div>
</template>

<script setup lang="ts">
const triggerTypeError = () => {
  if (typeError.length > 0) {
    console.log('err!')
  }
}
const triggerReferenceError = () => {
  throw new ReferenceError('Hello')
}
const triggerSyntaxError = () => {
  throw new SyntaxError('Hello')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
