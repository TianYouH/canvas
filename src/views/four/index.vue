<template>
  <div id='four'>
    <canvas id="four-canvas" style="barder: 1px solid #000;" ></canvas>
  </div>
</template>
<script>
export default {
  name: 'four',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('four-canvas');
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
