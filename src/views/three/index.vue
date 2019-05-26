<template>
  <div id="three">
    <canvas id="three-canvas" style="border: 1px solid #000;"></canvas>
  </div>
</template>
<script>
export default {
  name: 'three',
  data() {
    return {
      canvas: null,
      context: null
    };
  },
  mounted() {
    this.canvas = document.getElementById('three-canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.startDraw();
  },
  methods: {
    startDraw() {
      this.drawLineCap();
      this.drawLineJoin();
      this.drawMiterLimit();
    },
    // 属性 lineCap 测试
    drawLineCap() {
      const context = this.context;

      // 画两个基线
      context.beginPath();
      context.moveTo(50, 0);
      context.lineTo(50, 200);
      context.moveTo(200, 0);
      context.lineTo(200, 200);
      context.lineWidth = 1;
      context.strokeStyle = '#000';
      context.stroke();

      // lineCap
      context.beginPath();
      context.moveTo(50, 20);
      context.lineTo(200, 20);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineCap = 'butt';
      context.stroke();

      context.beginPath();
      context.moveTo(50, 60);
      context.lineTo(200, 60);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineCap = 'round';
      context.stroke();

      context.beginPath();
      context.moveTo(50, 100);
      context.lineTo(200, 100);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineCap = 'square';
      context.stroke();
    },
    // 属性 lineJoin 测试
    drawLineJoin() {
      const context = this.context;
      console.log('你好世界');

      context.beginPath();
      context.moveTo(300, 18);
      context.lineTo(409, 18);
      context.lineTo(409, 180);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineJoin = 'miter';
      context.stroke();

      context.beginPath();
      context.moveTo(300, 58);
      context.lineTo(509, 58);
      context.lineTo(509, 180);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineJoin = 'bevel';
      context.stroke();

      context.beginPath();
      context.moveTo(300, 88);
      context.lineTo(609, 88);
      context.lineTo(609, 180);
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.lineJoin = 'round';
      context.stroke();
    },
    // 属性 miterLimit
    drawMiterLimit() {
      const context = this.context;

      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(300, 300);
      context.lineTo(100, 500);
      context.lineJoin = 'miter';
      context.miterLimit = 10;
      context.lineWidth = 10;
      context.strokeStyle = 'red';
      context.stroke();

      context.beginPath();
      context.moveTo(300, 200);
      context.lineTo(500, 300);
      context.lineTo(300, 400);
      context.lineJoin = 'miter';
      context.miterLimit = 10;
      context.lineWidth = 10;
      context.strokeStyle = 'blue';
      context.stroke();

      context.beginPath();
      context.moveTo(500, 290);
      context.lineTo(700, 300);
      context.lineTo(500, 310);
      context.lineJoin = 'miter';
      context.miterLimit = 10;
      context.lineWidth = 10;
      context.strokeStyle = 'black';
      context.stroke();
    }
  }
};
</script>
<style lang="scss" scoped></style>
