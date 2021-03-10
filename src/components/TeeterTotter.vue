<template>
  <div class="teeter-totter">
    <Swing
        ref="swing"
        class="swing"></Swing>
    <Rack class="rack"/>
  </div>
</template>

<script>
import Swing from "@/components/Swing.vue";
import Rack from "@/components/Rack.vue";
export default {
name: "TeeterTotter",
  components: {Swing, Rack},
  mounted() {
    const swingArea = document.querySelector('.swing').getBoundingClientRect();
    this.$store.commit('SET_TEETER_TOTTER_POSITION', swingArea);
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.rack {
  width: 0;
  height: 0;
  margin: 0 auto;
  border-style: solid;
  border-width: 0 75px 150px 75px;
  border-color: transparent transparent #263238 transparent;
}
.swing {
  width: 100%;
  height: 0.5rem;
  background-color: #263238;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
}
.teeter-totter {
  height: 30%;
}
</style>
