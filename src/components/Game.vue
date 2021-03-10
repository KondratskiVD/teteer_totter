<template>
  <div class="game-area">
    <DropArea/>
    <TeeterTotter/>
  </div>
</template>

<script>

import TeeterTotter from "@/components/TeeterTotter.vue";
import DropArea from "@/components/DropArea.vue";
export default {
  name: 'Game',
  components: {TeeterTotter, DropArea},
}
</script>
<style scoped>
  .game-area {
    position: relative;
    height: 100%;
    width: 1000px;
    margin: 0 auto;
  }
</style>
