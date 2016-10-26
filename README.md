[TOC]

**一些常用的js计算，日期工具函数**

smath
---
**相应方法都加入到了原型中**

- add : 加法

```
var a = 10;
a.add("20"); //30
smath.add(10,20); //30

//加法问题
js: 0.1+0.2 =0.3000000...004
smath.add(0.1,0.2); // 0.3
```

- sub : 减法

```
var a = 10;
a.sub("20"); //-10
smath.sub(10,20); //-10
```
- mul : 乘法

```
var a = 10;
a.mul("20"); //200
smath.mul(10,20); //200
```
- div : 除法

```
var a = 10;
a.div("20"); //0.5
smath.div(10,20); //0.5
```

- format : 格式化数字

```
var a = 10;
a.format("#.00"); //10.00
a.format("00#.00"); //0010.00
a.format("#,#.00"); //1,0.00
smath.format(a,'#.00'); //10.00
smath.format("00#.00"); //0010.00
smath.format("#,#.00"); //1,0.00
```
sdate
---
- isLeapYear

```
//判断闰年  
sdate.isLeapYear("2016") //true
sdate.isLeapYear("2015-10-10") //false
sdate.isLeapYear(new Date()) //true
```
- format

```
// 日期格式化  
// 格式 YYYY/yyyy/YY/yy 表示年份  
// MM/M 月份  
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- dateAdd

```
// 日期加减 
//sdate.dateAdd(date,strInterval,Number)
// date : 日期基数
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- daysBetween

```
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- dateDiff
    //| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串
- datePart
    //| 取得日期数据信息  
    //| 参数 interval 表示数据类型  
    //| y 年 m月 d日 w星期 ww周 h时 n分 s秒  
- toString
    //| 日期输出字符串，重载了系统的toString方法  

