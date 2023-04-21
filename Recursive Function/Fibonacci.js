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
// console.log(fibonnaciArray);

/**
 * 위 변수없이 피보나치 수열 출력하기
 */
function fib(number) {
  if (number === 0 || number === 1) return 1;
  else if ( number < 0 ) return "Fibonacci calculation for Negative numbers is not supported";
  return (fib(number - 1) + fib(number - 2));
}

for(let i = 0; i < 10; i++) {
  console.log(fib(i));
}
