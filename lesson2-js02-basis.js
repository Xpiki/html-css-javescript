// 原始值 栈存放 不可改变
// Number String Boolean undefined null
var a = 10;
var b = a;
a = 20;
document.write(b);
document.write("<br>");
// 引用值 堆存放,存放在内存中,通过地址寻找
// array Object function ...dte RegExp
var arr1 = [1];
var arr2 = arr1;
arr1.push(2);
document.write(arr2);
document.write("<br>");
var arr3 = [1,2];
var arr4 = arr3;
arr3 = [3,4];
// arr3=[3,4]是新申请的一个内存
document.write(arr3);
document.write("<br>");
document.write(arr4); 

// 解析错误
// 一行代码都不会执行
// 逻辑错误 undefined
// 错误代码的后面代码不会执行
// Js语法一个代码块的错误不会影响其他JS代码块

var m = 10;
var n = ++m - 1 + m++;


var x = 123;
var y = 234;
// var z = x;
// x = y;
// y = z;
// 换值运算 
x = x + y;
y = x - y;
x = x - y;