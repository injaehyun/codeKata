
function solution(n) {
    let array = String(n).split('').reverse();
    return array.map(v => {
        return Number(v);
    });
}