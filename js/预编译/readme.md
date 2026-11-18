# 发生在代码执行前一刻

  (v8引擎内部有一个编译部门和一个执行部门)

  # 函数体内的预编译
  1. 创建一个执行上下文对象 AO: {}
  2. 找形参和变量声明，将形参和变量名作为AO的属性，值为undefined
  3. 将形参和实参统一
  4. 在函数体内找函数声明，将函数名作为AO的属性，值为函数体

  # 全局的预编译
  1. 创建一个全局执行上下文对象 GO: {}
  2. 找全局变量声明，将全局变量名作为GO的属性，值为undefined
  3. 找全局函数声明，将全局函数名作为GO的属性，值为函数体



  function foo(a, b) {
  console.log(b);  //function b() {}
  c = 0
  var c
  a = 3
  b = 2
  console.log(b);  //2
  function b() {}
  console.log(b);  //2
}

AO = {
    a: undefined   1   3,
    b: undefined  function b(){}    2,
    c: undefined  0,
}
foo(1)






GO = {
    global: undefined  100,
    fn: function (){},
}

global = 100
function fn() {
  console.log(global);  //undefined
  global = 200
  console.log(global);  //200
  var global = 300
}
fn()
var global


AO = {
    global: undefined  200  300,
}





GO = {
    a:undefined  10,
    test:undefined (){},
}

var a = 10;
function test() {
  console.log(a);  //undefined
  a = 20;
  console.log(a);  //20
  var a;
}
test();
console.log(a);  //10


AO = {
    a:undefined 20,
}