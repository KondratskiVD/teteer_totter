<template>
  <div
      class="element"
      :style="{ top: topPosition + 'px' }"
      :ref="'element'"
  />
</template>

<script>
export default {
name: "MovingBlock",
  props: {
    topPosition: {
      type: Number
    }
  }
}
</script>

<style scoped>
.element {
  width: 100px;
  height: 100px;
  background: gray;
  position: absolute;
}
</style>
