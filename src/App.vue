<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <RouterLink to="/week1">Week1</RouterLink>
      <!-- <RouterLink to="/review">Review</RouterLink> -->
      <!-- <RouterLink to="/async">Async</RouterLink> -->
      <RouterLink to="/week2">Week2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
