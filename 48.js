function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
      
        let start = commands[i][0];
        let end = commands[i][1];
        let k = commands[i][2];
        
       
        let sliced = array.slice(start - 1, end).sort((a, b) => a - b);
        
      
        answer.push(sliced[k - 1]);
    }
    
    return answer;
}