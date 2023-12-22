function solution(N) {
    let numbers = N.toString();
console.log(numbers)
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

    sum += parseInt(numbers[i]);
    console.log(numbers[i])
}

    return sum;
}
console.log(solution(123))