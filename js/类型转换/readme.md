# 弱类型语言
再定义变量的时候，不需要定义变量的类型，变量的类型是在执行期间由执行引擎来确定的

# == vs ===
 == 会发生类型转换，而 === 不会发生类型转换

 # 类型转换
 1. 显式类型转换
   1. Number(x)    将 x 转换为数字类型
   2. String(x)    将 x 转换为字符串类型
   3. Boolean(x)   将 x 转换为布尔类型
   
2. 隐式类型转换
  当代码中出现四则运算符+ - * / % > < <= >= !  !=时，符号的左右两边不是原始值，V8 会进行隐式类型转换，将非原始类型转换为原始类型

# valueOf、 toString
valueof（）将对象转换为原始值
toString（）将对象转换为字符串


# 引用类型转原始类型
  1. 引用类型转字符串
    - 值调用 toString() 方法
    - 值调用 valueOf() 方法
    - String({})  ==>   ToObject({})   ==>   {}.toString() 对象原型上的toString  ==>   "[Object Object]"

  2. 引用类型转数字
    - Number({})  ==>   ToNumber({})   ==>  ToPrimitive({}, 'number')   ==>   ToNumber(xx)


  3. 引用类型转布尔值
    - 所有的引用类型转布尔值都为 true

  ## ToPrimitive(x,type)
  1. 判断x 是否为原始值，如果是，直接返回 x
  2. 调用x 的valueOf() 方法,如果得到原始值，直接返回该原始值
  3. 调用x 的toString() 方法,如果得到原始值，直接返回该原始值
  4. 报错


## ToString()
1. {}.toString()  对象版本的toString()方法  //  '[Object Object]'
2. [1,2,3].toString()  数组版本的toString()方法  //  '1,2,3'
3. 其他.toString()   其他类型的toString()方法  //  直接用引号括起来


#  + 
- 作为一元运算符   +x == Number(x)
- 作为二元运算符
  * 如果 + 左右两边但凡有一边是字符串，就将另一边也转换为字符串，再进行拼接
