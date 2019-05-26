# Four

### 填充颜色

1. 基本颜色
  - 使用颜色字符串填充：`context.fillStyle = "red";`
  - 使用十六进制数字字符串填充：`context.fillStyle = "#FF0000";`
  - 使用十六进制数字字符串简写形式填充：`context.fillStyle = "#F00";`
  - 使用rgb()方法设置颜色：`context.fillStyle = "rgb(255,0,0)";`
  - 使用rgba()方法设置颜色：`context.fillStyle = "rgba(255,0,0,1)";`
  - 使用hsl()方法设置颜色：`context.fillStyle = "hsl(0,100%,50%)";`,HSL即是代表色相（H），饱和度（S），明度（L）三个通道的颜色。
  - 使用hsla()方法设置颜色：`context.fillStyle = "hsla(0,100%,50%,1)";`

2. 渐变颜色
  - 线性：
    1. 添加渐变线：`const grd = context.createLinearGradient(xstart,ystart,xend,yend);`
    2. 为渐变线添加关键色(类似于颜色断点)：`grd.addColorStop(stop,color);`
    3. 应用渐变：`context.fillStyle = grd; context.strokeStyle = grd;`
  - 径向：
    1. 添加渐变圆：`const grd = context.createRadialGradient(x0,y0,r0,x1,y1,r1);`
    2. 为渐变线添加关键色(类似于颜色断点)：`grd.addColorStop(stop,color);`
    3. 应用渐变：`context.fillStyle = grd; context.strokeStyle = grd;`
