function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        // 각 명령에 대해 start, end, k 값을 별도로 추출
        let start = commands[i][0];
        let end = commands[i][1];
        let k = commands[i][2];
        
        // array를 start부터 end까지 자르고 정렬
        let sliced = array.slice(start - 1, end).sort((a, b) => a - b);
        
        // 정렬된 배열에서 k번째 숫자 추출하여 결과 배열에 추가
        answer.push(sliced[k - 1]);
    }
    
    return answer;
}