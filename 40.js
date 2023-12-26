function solution(n) {
    var answer = 0;
    var num1 = n.toString(3).split('').reverse().join('');
    answer = parseInt(num1, 3);
    return answer;
}
