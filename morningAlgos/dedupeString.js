//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    var newStr=""
    var inStr=false
    for (i=str.length-1; i >= 0; i--){
        inStr=false;
        if(newStr===""){
            newStr= str[i]
        }
        for(j=0; j<newStr.length-1; j++){
            if(newStr[j]===str[i]){
                inStr=true;
                break;
            }
        }
        if (!inStr){
        newStr= str[i] + newStr
        }
    }
    return newStr
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));