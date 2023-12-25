// 가운데 글자 변환
// 짝수라면 가운데 2글자 변환

function solution(s) {
    var answer = s.length;
    const midNum = Math.floor(answer/2);
    return answer % 2 === 0 ? s.slice(midNum-1,midNum+1) : s.charAt(midNum);
}