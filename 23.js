function solution(num) {
    function Collatz(num, count) {
        if (num === 1) {
            return count;
        }

        var number;
        if (num % 2 === 0) {
            number = num / 2;
        } else {
            number = num * 3 + 1;
        }

        return Collatz(number, count + 1);
    }

    var count = Collatz(num, 0);
    var answer;
    if (count < 500) {
        answer = count;
    } else {
        answer = -1;
    }

    return answer;
}
