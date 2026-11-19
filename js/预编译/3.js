var outerVal = 100;

function outer(a) {
  var innerVal = 200;
  console.log(a);
  inner(66);
  console.log(innerVal);
}

function inner(b) {
  var temp = 300;
  console.log(b, temp);
}

console.log(outerVal);
outer(10);
console.log(outerVal);