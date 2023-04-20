/**
 * Reverse Number 재귀함수로 출력해보기
 * 
 * void function(int number) {
 *  for (int i = number; i > 0; i--) {
 *      print("count", i);
 *  }
 * }
 * 
 * function(10);
 * 
 * 결과 : 10 9 8 7 6 5 4 3 2 1
 */


function reverse(number) {
    if (number === 0) return 0;
    console.log(number);
    return reverse(number - 1);
}

reverse(10);