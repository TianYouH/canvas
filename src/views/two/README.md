# Two

### 绘制折线

- beginPath(): 防止绘制方法重复绘制，在每次绘制之前加上beginPath()，代表下次绘制的起始之处为beginPath()之后的代码。
- closePath(): closePath() 通过添加一条线条连接当前点和子路径起始点来关闭它
- rect(x, y, width, height); // Canvas API中已经帮我们封装好了一个绘制矩形的方法——rect()

- fillStyle 选择油漆桶的颜色
- fill 确定填充