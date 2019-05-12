# canvas
canvas 学习专用仓库

注：Canvas是基于状态的绘制

## One

### 准备工作

1. 布置画布：通过添加`<canvas>`标签，添加canvas元素;
2. 获取画布：通过`<canvas>`标签的id，获得canvas对象;
3. 获得画笔：通过canvas对象的getContext("2d")方法，获得2D环境;

### 从线段开始

4. 移动画笔：通过画笔moveTo()移动画笔到起点;
5. 笔画停点：通过画笔lineTo()确定画笔停放点;
6. 配置画笔：通过画笔属性配置所需画笔配置;
7. 确定绘制：通过画笔stroke()进行描边;

> 确定绘制只有两种方法，fill()和stroke()，前者是指填充，后者是指描边。

> 要设置画布的大小，只有这两种方法
  - 在`<canvas>`标签中设置；
  - 在JS代码中设置canvas的属性

## Two

### 绘制折线

- beginPath(): 防止绘制方法重复绘制，在每次绘制之前加上beginPath()，代表下次绘制的起始之处为beginPath()之后的代码。

### 绘制矩形

- closePath(): closePath() 通过添加一条线条连接当前点和子路径起始点来关闭它
- rect(x, y, width, height); // Canvas API中已经帮我们封装好了一个绘制矩形的方法——rect()

- fillStyle 选择油漆桶的颜色
- fill 确定填充

## Three

## Four

## Five

## Six