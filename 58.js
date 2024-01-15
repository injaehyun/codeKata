function solution(nums) {
    let answer = 0; 
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                
                let sum = nums[i] + nums[j] + nums[k];  // 선택된 숫자들의 합을 계산합니다.
                answer++;  // 가능한 경우의 수를 하나 증가시킵니다.

                for (let n = 2; n <= Math.sqrt(sum); n++) {
                    // 선택된 숫자들의 합이 소수인지 확인하기 위해 2부터 해당 합의 제곱근까지 숫자로 나눕니다.
                    if (sum % n === 0) {
                        // 나누어 떨어지는 경우, 즉 소수가 아닌 경우
                        answer--;  // 가능한 경우의 수에서 하나를 뺍니다.
                        break;  // 더 이상 검사할 필요가 없으므로 반복문을 종료합니다.
                    }
                }
            }
        }
    }
    
    return answer;  
}
