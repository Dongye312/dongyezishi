function Promise(fn){
    this.status = 'pending'  // 状态
    this.arr = [thenCB]
    this.catchArr = []

    const resolve = () => {
        this.status = 'fulfilled'  // 成功
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i]()
        }
    }
    const reject = () => {
        this.status = 'rejected'  // 失败
        for (let i = 0; i < this.catchArr.length; i++) {
            this.catchArr[i]()
        }
    }

    fn(resolve, reject)
}

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})

p.then(() => {  // then 里面的代码需要执行，必须保证then 前面的那个Promise 实例对象中的状态是fulfilled
    foo()
})
.catch(() => {
    bar()
})
