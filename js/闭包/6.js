function add(){
    let count = 0
    return function(){
        count++
        return count
    }
}
let addFn = add()
console.log(addFn());
console.log(addFn());
console.log(addFn());
console.log(addFn());