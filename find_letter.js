function lostLetter(str) {
   
    var start = str.charCodeAt(0) + 1;
    var missing = ''; 
    
    
    for(var i = 1; i < str.length; i++){
     
      if(str.charCodeAt(i) !== start){
        missing += String.fromCharCode(start);
        start++; 
      }
      start ++;
    }
    
    if(missing == ''){
      missing = "No Missing Letter";
    }
    
    return missing;
  }
  
console.log(lostLetter("abdefgik"))
console.log(lostLetter("mnopqs"))
console.log(lostLetter("suvxyz"))
console.log(lostLetter("ghijklmno"))