# 类型
1. 原始类型：string, number, boolean, null, undefined, symbol, bigint
2. 引用类型：object, array, function, date

# typeof
1. typeof 可以准确判断除了 null 之外的所有原始类型,它的判断原理是，将变量值转化为二进制，通过判断二进制的前三位是否为 0，来判断变量是不是原始类型，如果是原始类型，就返回原始类型的类型，如果是引用类型，就返回 object。但是 null 被转为二进制后是一整串0，所以 typeof null 返回 object。
2. typeof判断引用类型时，返回 object。但是function类型能准确判断。


# instanceof
1. a instanceof b 用于判断a 是否隶属于b 这种类型（a 是否是b 的实例对象）。
2. 判断原理：通过判断 a 的隐式原型是否等于 b 的显式原型，如果不等，那就顺着隐式原型链一直往上找，直到找到 null 为止，则返回false

# Object.prototype.toString.call(x).slice(8, -1)



# Array.isArray()
专门用来判断一个值是否是数组类型