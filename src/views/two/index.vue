<template>
  <div id="two">
    <canvas id="two-canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: 'two',
  data() {
    return {
      canvas: null,
      context: null
    };
  },
  mounted() {
    this.canvas = document.getElementById('two-canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');

    // this.startDrawBrokenLine();
    // this.startDrawRectangle();

    // this.drawRect(150, 50, 50, 50, "red", 5, "blue");
    // this.drawRect(250, 50, 50, 50, "green", 5, "red");
    // this.drawRect(350, 50, 50, 50, "yellow", 5, "black");

    this.test();
  },
  methods: {
    // 绘制折线
    startDrawBrokenLine() {
      const context = this.context;
      context.beginPath(); // 为了让绘制方法不重复绘制，我们可以在每次绘制之前加上beginPath()，代表下次绘制的起始之处为beginPath()之后的代码
      context.moveTo(0, 0);
      context.lineTo(100, 100);
      context.lineTo(0, 200);
      // context.closePath(); // 使用closePath()闭合图形
      context.lineWidth = 5;
      context.strokeStyle = '#000';
      context.stroke();

      context.beginPath();
      context.moveTo(100, 0);
      context.lineTo(200, 100);
      context.lineTo(100, 200);
      // context.closePath();
      context.lineWidth = 4;
      context.strokeStyle = 'blue';
      context.stroke();

      context.beginPath();
      context.moveTo(200, 0);
      context.lineTo(300, 100);
      context.lineTo(200, 200);
      // context.closePath();
      context.lineWidth = 3;
      context.strokeStyle = 'red';
      context.stroke();
    },
    // 绘制矩形
    startDrawRectangle() {
      const context = this.context;

      context.beginPath();
      context.moveTo(400, 200);
      context.lineTo(700, 200);
      context.lineTo(700, 400);
      context.lineTo(400, 400);
      // context.lineTo(400, 200); //最后一笔可以不画
      context.closePath(); // 使用closePath()闭合图形

      context.fillStyle = 'red'; //选择油漆桶的颜色
      context.lineWidth = 10;
      context.strokeStyle = '#000';

      context.fill(); // 确定填充
      context.stroke();
    },
    // 封装 测试
    drawRect(x, y, width, height, fillColor, borderWidth, borderColor) {
      const context = this.context;
      context.beginPath();
      context.rect(x, y, width, height); // Canvas API中已经帮我们封装好了一个绘制矩形的方法——rect()
      // context.closePath(); // 可以不用closePath()

      context.lineWidth = borderWidth;
      context.strokeStyle = borderColor;
      context.fillStyle = fillColor;

      context.fill();
      context.stroke();
    },
    test() {
      const context = this.context;

      context.beginPath();
      context.rect(0, 0, 800, 600);
      context.fillStyle = '#AA9033';

      context.fill();

      for (var i = 0; i < 20; i++) {
        this.drawRect(200 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i, null, 5, '#000');
        this.drawRect(205 + 10 * i, 105 + 10 * i, 390 - 20 * i, 390 - 20 * i, null, 5, '#fff');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#two-canvas {
  border: 1px solid #000;
}
</style>
