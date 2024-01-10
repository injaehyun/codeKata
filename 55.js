
    
    // 카드1 배열에서 골 배열의 i번째가 같은 단어이면 카드 뭉치 2로 넘어감
    // i번째가 같지 않으면 NO라고 나와야함
    // 카드2 배열도 동일함.
    // 카드1과 2를 왔다 갔다해야하는데..??????
    
    function solution(cards1, cards2, goal) {
     
        let cardPackA = 0;
        let cardPackB = 0;
        // 인덱스 값을 반을 변수를 설정함
     
         for (let i = 0; i < goal.length; i++) 
        // i는 goal의 길이만큼 반복되도록 설정
        {
            if (cardPackA < cards1.length && cards1[cardPackA] === goal[i]) {
                cardPackA++;
                //카드팩A의 인덱스가 카드1의 길이보다 작고 카드1의 카드팩A의 값이 골i와 같은 값인지 비교해서 turn면 카드팩A의 인덱스는 1씩 증가시킨다.
            } else if (cardPackB < cards2.length && cards2[cardPackB] === goal[i]) {
                cardPackB++;
                // 카드팩A에 골의 데이터가 없다면 카드팩B로 넘어와서 위와 동일하게 조건문을 통해서 인덱스를 증가시킨다. 
            } else {
                return "No"
        }// 위에 모두 해당하지 않으면 no를 반환한다.
        
    }
    return "Yes" //no를 반환하지 않고 종료되면 yes를 반환한다
}
    // 예제 호출
    const result = solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]);
    console.log(result);