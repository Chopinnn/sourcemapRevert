<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="triggerTypeError()">hjz触发TypeError1</p>
    <el-divider></el-divider>
    <p @click="triggerReferenceError()">hjz触发ReferenceError1</p>
    <el-divider></el-divider>
    <p @click="triggerSyntaxError()">hjz触发SyntaxError1</p>
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
