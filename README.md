[TOC]

**һЩ���õ�js���㣬���ڹ��ߺ���**

smath
---
**��Ӧ���������뵽��ԭ����**

- add : �ӷ�

```
var a = 10;
a.add("20"); //30
smath.add(10,20); //30

//�ӷ�����
js: 0.1+0.2 =0.3000000...004
smath.add(0.1,0.2); // 0.3
```

- sub : ����

```
var a = 10;
a.sub("20"); //-10
smath.sub(10,20); //-10
```
- mul : �˷�

```
var a = 10;
a.mul("20"); //200
smath.mul(10,20); //200
```
- div : ����

```
var a = 10;
a.div("20"); //0.5
smath.div(10,20); //0.5
```

- format : ��ʽ������

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
//�ж�����  
sdate.isLeapYear("2016") //true
sdate.isLeapYear("2015-10-10") //false
sdate.isLeapYear(new Date()) //true
```
- format

```
// ���ڸ�ʽ��  
// ��ʽ YYYY/yyyy/YY/yy ��ʾ���  
// MM/M �·�  
// W/w ����  
// dd/DD/d/D ����  
// hh/HH/h/H ʱ��  
// mm/m ����  
// ss/SS/s/S ��  
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- dateAdd

```
// ���ڼӼ� 
//sdate.dateAdd(date,strInterval,Number)
// date : ���ڻ���
// W/w ����  
// dd/DD/d/D ����  
// hh/HH/h/H ʱ��  
// mm/m ����  
// ss/SS/s/S ��  
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- daysBetween

```
//| ������ʱ��������� ���ڸ�ʽΪ YYYY-MM-dd
sdate.format(date,pattern)
sdate.format(new Date(),'yyyy-MM-dd HH:mm:ss') //2016-10-10 10:10:10
```
- dateDiff
    //| �Ƚ����ڲ� dtEnd ��ʽΪ�����ͻ�����Ч���ڸ�ʽ�ַ���
- datePart
    //| ȡ������������Ϣ  
    //| ���� interval ��ʾ��������  
    //| y �� m�� d�� w���� ww�� hʱ n�� s��  
- toString
    //| ��������ַ�����������ϵͳ��toString����  

