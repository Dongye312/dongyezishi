// let arr = [1,2,3,4,5]

// // let res =[arr[0]**2,arr[1]**2,arr[2]**2,arr[3]**2,arr[4]**2]

// let res = []
// for (let i = 0;i<arr.length;i++){
//     res.push(arr[i]**2)
// }

// console.log(res);

// let arr = ['a','b','c','d']
// let res = []
// for(let i = 0;i<arr.length;i++){
//     res.push(arr[i]+'o')
// }
// console.log(res);

let arr = [1,4,7,5,3,43,100,29,54]
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==100){
//         console.log(`找到了它的下标是${i}`);
//         break
//     }
// }


// let i = 0
// while(i<arr.length){
//     if(arr[i]==100){
//         console.log(`找到了它的下标是${i}`);
//         break
//     }
//     i++
// }


let i = 0
while(arr[i] !== 100){
    i++
}
console.log(`找到了，它的下标是${i}`);
        
