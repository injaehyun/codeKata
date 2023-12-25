function solution(x) {
    let numbers = x.toString();
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    if (x % sum === 0) {
        return true;
    } else {
        return false;
    }
}
