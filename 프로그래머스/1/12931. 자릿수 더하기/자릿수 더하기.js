function solution(N) {
        let numbers = N.toString();

        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
    
        sum += parseInt(numbers[i]);
    }

        return sum;
}
