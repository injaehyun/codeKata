// 1. 빈배열인 경우에 배열에 -1을 채워 리턴한다
// 2. arr에서 가장 작은 수를 제거한 배열 리턴

function solution(arr) {
    arr.length <= 1 ? answer =[-1] : answer = arr
    
    
    // if(arr.length <= 1){
    //     return [-1]
    // }
    const smallNum = arr.indexOf(Math.min(...arr))
    arr.splice(smallNum,1)
    return arr

} 
