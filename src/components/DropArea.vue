<template>
  <div class="drop-area">
    <div class="control">
      <button @click="startGame">Старт</button>
    </div>
    <MovingBlock
        class="moving-block"
      :top-position="topPosition"
    />


  </div>
</template>

<script>
import MovingBlock from "@/components/MovingBlock.vue";
import {mapState} from 'vuex'
export default {
  name: "DropArea",
  components: {MovingBlock},
  data() {
    return {
      pause: true,
      topPosition: 0,
      time: 0
    }
  },
  computed: {
    ...mapState({
      TeeterTotterPosition: state => state.TeeterTotterPosition
    })
  },
  methods: {
    startGame() {
      this.pause = !this.pause
      if(!this.pause) {
        this.timer()
      } else (
          clearTimeout(this.time)
      )
    },
    timer() {
      this.time = setInterval(() => {
        this.incrementBlockDropboxTop()
      },10)
    },
    incrementBlockDropboxTop() {
      this.topPosition += 1;
      const { x: x1, bottom: y1, right: x2, bottom: y2, } = document.querySelector('.moving-block').getBoundingClientRect()
      let { x: x3, y: y3, right: x4, bottom: y4 } = this.TeeterTotterPosition
      // y3 += this.TeeterTotterPosition.height
      // y4 -= this.TeeterTotterPosition.height
      const isOver = this.crossPoint(x1, y1, x2, y2, x3, y3, x4, y4)
      if (isOver) {
        clearTimeout(this.time)
      }

    },
    crossPoint(x1, y1, x2, y2, x3, y3, x4, y4){
      const a_dx = x2 - x1;
      const a_dy = (y2 - y1);
      const b_dx = x4 - x3;
      const b_dy = (y4 - y3);
      const s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
      const t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
      return (s >= 0 && s <= 1 && t >= 0 && t <= 1) ? [x1 + t * a_dx, y1 + t * a_dy] : false;
    }
  }
}
</script>

<style scoped>
  .drop-area{
    height: 65%;
    width: 85%;
    margin: 0 auto;
    position: relative;
  }
  .control {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
