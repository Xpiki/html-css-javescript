for(var i = 0; i < 10; i++){
    document.write(i);
}
document.write("<br>");
var j = 0;
while(j<10){
    document.write(j);
    j++;
}
document.write("<br>");
var k = 0;
for(;k<10;){
    document.write(k);
    k++;
}
document.write("<br>");
// 当变量到0之后,循环自动停止
var l = 100;
for(;l--;){
    document.write(l);
}
document.write("<br>");

var m = 0;
while(m<100){
    if(m % 7 == 0 || m % 10 == 7){
        document.write(m + " ");
    }
    m++;
}
document.write("<br>");
// 1.var i = 0;
// 2.if(i < 10){
//   document.write(i);
// } 
// 3.i++
// 4.if(i < 10)
// 先执行一边1，判断2，执行语句，执行3