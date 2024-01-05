function solution(k, score) {
    var answer = [];
    let num =[];

    for(i=0; i<score.length; i++)
    {
        if(i<k){
            num.push(score[i])
        } 
         if(score[i]>Math.min(...num)){
            num.pop()
            num.push(score[i])
            num.sort((a,b) => b-a)
            console.log(num)
         }
         answer.push(num.at(-1));
}
    return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))