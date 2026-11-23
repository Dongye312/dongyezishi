// let obj = {
//     a: 1,
//     b: 2,
//     foo() {
//         console.log(this.a); // 1
//     }
// }
// obj.foo()\


// function bar() {
//     console.log(this.a); // 1
// }
// let obj = {
//     a: 1
//     }
// obj.foo = bar
// obj.foo()


function foo(){
    console.log(this.a); // 1
}
let m = {
    a  : 1,
    foo: foo
}
let n ={
    a  :2,
    foo:m
}
n.foo.foo()