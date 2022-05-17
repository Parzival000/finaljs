function returnDupStr(str){
    let x = 1;
    let messeges = "No Duplicate string";
    for(let i = 0; i <= str.length; i++){
        for(let j = x; j < str.length;j++){
            if(str[i] == str[j]){
                let result;
                result = str[i]
                let cout = result.split("") 
                //return result = str[i];
                //return cout.length;
                for(let k = 0; k <= cout.length; k++){
                    if(result[i] == 1){
                        break;
                    }
                    else return result;
                }
            }
        }
        x +=1;
    }
    return messeges;
}

console.log(returnDupStr (["abcx", "abcx", "7890", "7890"]));
console.log(returnDupStr (["abc", "a1c", "a1c", "bcd", "bcd"]));
console.log(returnDupStr (["a test", "test1", "test"]));
console.log(returnDupStr (["1ac", "ab", "1a", "ab"]));