<template>
  <div id='five'>
    <canvas id="five-canvas" style="border: 1px solid #000;" ></canvas>
  </div>
</template>
<script>
export default {
  name: 'five',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('five-canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.startDraw();
  },
  methods: {
    startDraw() {

    }
  }
}
</script>
<style lang='scss' scoped>
</style>
