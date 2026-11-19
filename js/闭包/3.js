function foo(){
    var age = 18
    let heigth = 1.8

    function bar(){
        console.log(age);
    }
    return bar
}
var baz = foo()
baz()
