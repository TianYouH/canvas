<template>
  <div id='six'>
    <canvas id="six-canvas" style="barder: 1px solid #000;" ></canvas>
  </div>
</template>
<script>
export default {
  name: 'six',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('six-canvas');
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
