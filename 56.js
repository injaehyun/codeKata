
function solution(k, m, score) {
    score.sort((a,b) => a-b);
    // 스코어를 오름차순으로 정렬함.
    let total = 0;
    // 최대 이익을 담을 변수 설정
    while (score.length >=m) {
        // m의 길이보다 크거나 같을때 반복문이 돌아가도록 설정
        const box =score.splice(score.length -m, m);
        // 매열의 끝에서 m개를 잘라서 배열에 저장함
        const profit = m*Math.min(...box)
        // 프로핏에 box의 최소값을 찾음

        total += profit;
        // 계산된 상자의 이익을 총 이익에 더한다
    }


    
    return total;
}