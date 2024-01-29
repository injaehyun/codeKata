function solution(X, Y) {
    // X와 Y라는 두 문자열을 입력받는 함수 정의

    let answer = ''
    // 결과를 저장할 변수 'answer'를 빈 문자열로 초기화

    X = X.split("")
    Y = Y.split("")
    // 입력된 문자열 X와 Y를 각각 문자 단위로 나누어 배열로 변환

    // 0부터 9까지 각 숫자에 대해 반복
    for(let i = 0 ; i < 10 ; i ++) {
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        // X와 Y 배열에서 현재 숫자(i)와 같은 원소의 개수를 찾아서 각각 curX, curY에 저장

        answer += String(i).repeat(Math.min(curX, curY))
        // curX와 curY 중 더 작은 값만큼 해당 숫자(i)를 반복하여 answer에 추가
    }

    if(answer === '') return "-1"
    // 만약 answer가 여전히 빈 문자열이라면 "-1"을 반환

    if(Number(answer) === 0) return "0"
    // answer를 숫자로 변환했을 때 0이면 "0"을 반환

    // answer를 내림차순으로 정렬하여 반환
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}
