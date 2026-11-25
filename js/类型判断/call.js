Function.prototype.mycall = function(context){
   //谁调用我，我就把谁里面的this绑定到 
   //
   //this
   context.fn = this;
   context.fn();
   delete context.fn;
}

let obj = {
    a: 1
}
function foo(){
    console.log(this.a);
}
foo.mycall(obj);

