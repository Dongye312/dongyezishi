// function A() {
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('A');
//         resolve()
//     },1000)
// })
// }

const { log } = require("async");

// function B() {
//     console.log('B');
// };

// A()
// .then(() => {
//     B()
// })


function A() {
    setTimeout(() => {
        console.log('A');
    }, 1000)
}

function B() {
    console.log('B');
}

async function foo() {
    await A()
    B()
}

foo()
