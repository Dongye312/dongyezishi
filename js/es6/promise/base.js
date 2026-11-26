let a = 1
console.log(a);  // 不耗时  同步代码

for (let i = 0; i < 10000; i++) {
}   // 不耗时  同步代码


setTimeout(() => {    // 回调函数
  console.log('执行了');
}, 3000);  