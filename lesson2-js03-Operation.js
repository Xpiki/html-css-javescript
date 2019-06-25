// 逻辑运算符 && || ！ (注意!并不是返回true或者false,而是返回表达式的值再判断布尔值)
// 1. &&
// 第一种情况,当第一表达式结果为真，那么它会看第二个表达式转换为布尔值的结果，
// 如果只有两个表达式的话,直接返回第二个表达式的值
var a = 1 && 2;
document.write(a);
document.write("<br>");

var b = 1 && 0;
document.write(b);
document.write("<br>");

var e = 1 && 2 + 2;
document.write(e);
document.write("<br>");

// undefined,null,NaN,"",0,false ==>false

// 第二种情况,当第一表达结果为假,则不会看第二表达式,直接返回第一表达式的结果
var c = 0 && 1;
document.write(c);
document.write("<br>");

var d = 0 && 0;
document.write(d);
document.write("<br>");

// 表达式逐一往后运算,如果为真则继续往后,有false则终止
var f = 1 && 1 & 1;
document.write(f);
document.write("<br>");

//2. || (有一个为真则真，全假为假)
// 遇到真就终止
// 应用:IE兼容性(function(e))
// IE浏览器 无法获取到e的值,IE浏览器想要获取e的值需要使用window.event
// var event = e || window.event;
// 如果e为真则终止否则使用window.event;

var g = 0 || false || 1;
document.write(g);
document.write("<br>");

var h = 1 || 0 || 1;
document.write(h);
document.write("<br>");

// 3. ! (把值取布尔值之后取反)
var i = !123;
document.write(i);
document.write("<br>");