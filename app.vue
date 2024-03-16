<script setup>
useHead({
  title: "StrataWM"
})
</script>

<template>
  <div class="antialiased w-screen h-screen bg-mantle overflow-x-hidden overflow-y-scroll">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

html,
body {
  overflow: hidden;
}
</style>