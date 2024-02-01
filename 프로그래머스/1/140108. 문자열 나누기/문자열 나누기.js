function solution(s) {
    let stack = []; // 스택을 사용하여 문자를 저장
    let count = 0; // 최종 결과로 반환할 카운트 변수

    // 문자열 s의 각 문자에 대해 반복
    [...s].forEach((str, index) => {
        stack.push(str); // 현재 문자를 스택에 추가
        
        // 스택에서 첫 번째 요소와 같은 요소들만 필터링
        const same = stack.filter((item) => item === stack[0]);
        // 스택에서 첫 번째 요소와 다른 요소들만 필터링
        const notSame = stack.filter((item) => item !== stack[0]);
        
        // 같은 요소의 개수와 다른 요소의 개수가 같으면
        if(same.length === notSame.length){
            count += 1; // 카운트 증가
            stack = []; // 스택 초기화
        }
    })
    
    // 반복문 종료 후 스택에 남은 요소가 있으면 카운트 증가
    if(stack.length !== 0){
        count += 1;
    }
    
    return count; // 최종 카운트 반환
}
