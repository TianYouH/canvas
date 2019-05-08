<template>
  <div id='one'>
    <canvas id="one-canvas" ></canvas>
  </div>
</template>
<script>
export default {
  name: 'one',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('one-canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.startDraw();
  },
  methods: {
    startDraw() {

      // 确定画图路径规划
      this.context.moveTo(100, 100); // 移动画笔 起点
      this.context.lineTo(500, 500); // 笔画停点

      // 配置画笔
      this.context.lineWidth = 5; // 设置画笔线条粗度 5 px
      this.context.strokeStyle = '#aa394c'; // 设置画笔颜色
      // 因为Canvas是基于状态的绘制，所以我们在选择画笔粗细和颜色的同时，其实也是选择了线条的粗细和颜色。

      // 确认绘制
      // 确定绘制只有两种方法，fill()和stroke()，前者是指填充，后者是指描边;
      this.context.stroke();
    }
  }
}
</script>
<style lang='scss' scoped>
#one-canvas {
  border: 1px solid #000;
}
</style>
