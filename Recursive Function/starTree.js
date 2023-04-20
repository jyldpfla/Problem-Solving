/**
 * 재귀함수로 startree 만들기
 * *
 * **
 * ***
 * ****
 * *****
 * ******
 */

let stars = "*";
function starTree(number) {
    if (number === 0) return 0;
    console.log(stars);
    stars = stars + "*";
    return starTree(number-1); 
}

starTree(5);