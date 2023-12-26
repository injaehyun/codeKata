function solution(s) {
    var answer = '';
    let words = s.split(" "); 
    let str2 = words.map(word => {
        let transformed = '';
        for (let i = 0; i < word.length; i++) {
            transformed += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        return transformed;
    });
    answer = str2.join(" "); 
    return answer;
}

console.log(solution("try hello world"));
