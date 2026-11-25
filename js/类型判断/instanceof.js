function myInstanceof(a, b){
    if(a == null || typeof a !== 'object' || typeof a !== 'function'){
        return false;
    }
    while(a !== null) {
        if(a.__proto__ === b.prototype){
            return true;
        }
        a = a.__proto__;
    }
    return false;
}

// console.log(myInstanceof([], Array));
// console.log(myInstanceof([], Object));

console.log(myInstanceof('a', String));
