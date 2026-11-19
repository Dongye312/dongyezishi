// var obj = {}
// obj.a = 1


var str = 'hello'  //new String()
str.a = 2  // 正在往字符串对象上添加一个属性 a
//对了，str是原始类型，不能添加属性， delete str.a
console.log(str.a);  // 不报错  读取的是[[PrimitiveValue]]
