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

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-track {
  background-color: #1e1d2d;
}

::-webkit-scrollbar-thumb {
  background-color: #45475a;
  border-radius: 40px;
  border: 6px solid transparent;
  background-clip: padding-box;
  transition: border-width 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  border: 5px solid transparent;
  background-color: #f38ba8;
}
</style>