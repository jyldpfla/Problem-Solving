function fibonnaci(number) {
  let b = 1;
  let a = 0;
  let fibonnaciArray = [];

  for (let index = 0; index < number; index++) {
    a = b + a;
    b = a - b;

    fibonnaciArray.push(a);
  }

  console.log(fibonnaciArray);
  return fibonnaciArray;
}

// fibonnaci(15);

let a = 0;
let b = 1;
let fibonnaciArray = [];
function fibonnaciRecursive(number) {

  if (number === 0) return fibonnaciArray;
  a = b + a;
  b = a - b;
  fibonnaciArray.push(a);

  return fibonnaciRecursive(number - 1);
}

fibonnaciRecursive(15);
console.log(fibonnaciArray);
