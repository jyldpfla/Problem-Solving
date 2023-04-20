/** stack logic 이해 => LIFO(Last in First Out) */

// 파이썬 def : 함수를 만들 때 사용하는 예약어
/**
 * def recur(val):
 *  if val == 0:
 *      return 0
 *  print("stan in", val)
 *  recur(val-1)
 *  print("stack out", val)
 * 
 * recur(10)
 */

function recur(val) {
    if (val === 0) return 0;
    console.log("stack in", val);
    recur(val - 1);
    console.log("stack out", val);
}

recur(10);

// recur이 실행되면서 stack in val이 콘솔에 찍히고,
// 내부의 recur이 재귀함수로 실행되면서 새로운 recur 함수가 실행되므로 다시 stack in val이 콘솔에 찍히고 다시 recur 함수가 새롭게 실행됨 (함수가 중첩되면서 실행, 이 과정 반복)
// 그렇게 stack in이 순서대로 실행되고, return 값이 0이 되면 더이상 중첩되지 않고 종료
// 중첩되어 있던 함수가 하나씩 실행되면서 그 값이 stack out val에 담겨 콘솔에 찍힘