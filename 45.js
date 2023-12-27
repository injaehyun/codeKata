function solution(s, n) {
    var answer = [];
    const uparr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const lowerarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    // let arr = ([...uparr, ...lowerarr])
    let str1 = s.split("")
    // console.log(arr)
    let str2 =[];

        for (let i =0; i<s.length; i++){
        
        if(uparr.includes(str1[i]) === true){
        let str3 = uparr.indexOf(str1[i])
        let str4 = uparr[(str3 + n) % 26]
        answer.push(str4)             
        } else if (lowerarr.includes(str1[i]) === true){
        let str5 = lowerarr.indexOf(str1[i])
        let str4 = lowerarr[(str5 + n) % 26]
        answer.push(str4)             
        } else {
            answer.push(s[i])
        }
        }
    
    return answer.join('')
}