function xq(){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        console.log('刘少相亲圆满');
        resolve()
      }, 3000)
    })

}

function marry(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('刘少结婚了');
            resolve()
        }, 2000)
    })
}

function baby(){
    setTimeout(() => {
        console.log('小刘出生了');
    }, 1000)
}

xq()
.then(() => {   //then 的源码中也会返回一个Promise 实例对象，它的状态是继承去前面的Promise 实例对象的状态
    return marry()
})
.then(() => {
    baby()
})