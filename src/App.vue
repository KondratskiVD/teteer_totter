<template>
  <div id="app">
    <Game msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>
<style>
  #app {
    height: 100vh;
  }
  body, html {
    padding: 0;
    margin: 0;
  }
</style>
