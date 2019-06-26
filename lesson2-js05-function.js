// 函数声明
function test1() {
    alert("test1");
}
// 函数表达式(匿名函数表达式)
var test2 = function () {
    alert("test2");
}
// 不定参 传递的数存在arguments中
function sum() {
    console.log(arguments);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// arguments里的值和形参成映射关系,一个值改变,另一个值也会改变
function sum1(a, b) {
    console.log(arguments[0]);// 1
    a = 2;
    console.log(arguments[0]); // 2
    arguments[1] = 3;
    console.log(b); // undefined
    b = 4;
    console.log(arguments[1]); // 3
    // 另外: 实参和形参不对应时(即arguments[i]没有定义),即使定义也不映射


}
sum1(1, 2);

sum1(1);
//练习1
function animalsBark(name) {
    switch (name) {
        case "dog":
            document.write("here is a dog barking");
            break;
        case "cat":
            document.write("here is a cat barking");
            break;
        case "tiger":
            document.write("here is a tiger barking");
            break;
        default:
            document.write("what is this animal?");
            break;
    }
}
function buttonClick1() {
    var animals = window.prompt("input a animal's name");
    animalsBark(animals);

}

// 递归求阶乘
function mul(n){
    // 找到出口(已知结果的传入值)
    if(n == 1){
        return 1;
    }
    return n * mul(n-1); // 把n的递归分解一步
}