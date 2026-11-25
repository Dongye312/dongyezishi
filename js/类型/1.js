const s = '[1, 2, 3]'
const n = -123  // Infinity
const b = true
const u = undefined  // 未定义
const nu = null  // 空值    

const sy = Symbol('s')  // 独一无二的值
const sy1 = Symbol('s')
console.log(sy === sy1)  // false

const bg = 123n  // 大整数
const bg1 = 123n
console.log(bg === bg1)  // true