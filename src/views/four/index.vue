<template>
  <div id='four'>
    <canvas id="four-canvas" style="border: 1px solid #000;" ></canvas>
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
      this.drawColor();
      this.drawLinearGradien();
      this.drawRadialGradient();
    },
    // 基本颜色 练习
    drawColor() {
      const context = this.context;
      context.beginPath();
      context.rect(20,20, 150, 150);
      context.lineWidth = 5;
      // context.strokeStyle = 'red';
      // context.strokeStyle = "#F00";
      // context.strokeStyle = "rgb(255,0,0)";
      // context.strokeStyle = "rgba(255,0,0, 0.5)";
      // context.strokeStyle = "hsl(0,100%,50%)";
      context.strokeStyle = "hsla(0,100%,50%,1)";
      context.stroke()
    },
    // 线性渐变颜色 练习
    drawLinearGradien() {
      const context = this.context;
      context.beginPath();
      context.rect(220, 20, 150, 150);

      const grd = context.createLinearGradient(220, 95, 370, 95);
      grd.addColorStop(0, 'black');
      grd.addColorStop(0.5, 'white');
      grd.addColorStop(1, 'black');
      
      context.fillStyle = grd;
      context.fill();
    },
    // 径向渐变颜色 练习
    drawRadialGradient() {
      
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
