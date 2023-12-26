function solution(n, m) {
    let a = Math.max(n, m);
    let b = Math.min(n, m);
    let gcdValue;

    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    gcdValue = a;

    const lcmValue = (n * m) / gcdValue;

    return [gcdValue, lcmValue];
}

console.log(solution(3, 12)); 
