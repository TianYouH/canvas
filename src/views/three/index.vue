<template>
  <div id='three'>
    <canvas id="three-canvas" style="border: 1px solid #000;" ></canvas>
  </div>
</template>
<script>
export default {
  name: 'three',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('three-canvas');
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
