// let arr = []  // new Array()   数组也是对象
// arr.push(1)
// console.log(arr);


Car.prototype.push = function(){
    console.log('push执行了')
}
function Car(color){
    this.name = 'su7'
    this.color = color
}

let car1 = new Car('red')
console.log(car1);
