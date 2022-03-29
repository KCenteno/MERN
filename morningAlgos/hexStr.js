//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    let decimal = 0;
    let exponent = 0;
    //for loop starting at right side of string going backwards
    for (let i=str.length-1; i>=0; i--, exponent++){
        // console.log(decimal)
        if (str[i] == 0) {
            continue;
        }
        else if (str[i] >= 1 && str[i] <= 9){
            //math.pow uses parameters of base, then exponent
            decimal += str[i] * Math.pow(16,exponent)
        }
        else if(str[i] ==="A"){
            decimal += 10 * Math.pow(16,exponent)
        }
        else if(str[i] ==="B"){
            decimal += 11 * Math.pow(16,exponent)
        }
        else if(str[i] ==="C"){
            decimal += 12 * Math.pow(16,exponent)
        }
        else if(str[i] ==="D"){
            decimal += 13 * Math.pow(16,exponent)
        }
        else if(str[i] ==="E"){
            decimal += 14 * Math.pow(16,exponent)
        }
        else if(str[i] ==="F"){
            decimal += 15 * Math.pow(16,exponent)
        }
    }
    return decimal
}


console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = num => {
    let remainder= 0
    let hexString = ""

    let map = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }

    while ( num > 0 ) {
        remainder = ( num % 16 )
        num = Math.floor( num / 16 )
        console.log("Remainder is: ", remainder, " Qoutient is: ", num);
        if ( remainder >= 0 && remainder <= 9 ) hexString = remainder + hexString
        if ( remainder >= 10 && remainder <= 15 ) hexString = map[ remainder ] + hexString
        console.log("This is now my hexString: , ", hexString);
    }
    return hexString
}

console.log(decToHexStr(108));
console.log(decToHexStr(420));