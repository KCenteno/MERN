// Binary to Decimal
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21
const binaryToDecimal = binary => {
    let sum = 0;
    let baseNum = 1;
    for(let i = binary.length - 1; i >= 0; i--){
        if(binary[i] === '1'){
            sum += baseNum;
        }
        baseNum *= 2;
    }
    return sum;
}

  // There are 10 types of people in this world...those who understand binary and those who don't

  // Decimal to Binary
  // Given a (whole) number, return the value in binary
// A=B**C => logB(A) = C
const decimalToBinary = (num) => {
    let pwr = Math.floor(Math.log2(num));
    let out = '';
    while(pwr>=0){
        out += Math.floor(num/(2 ** pwr));
        if(Math.floor(num/(2 ** pwr))){
            num -= (2 ** pwr);
        }
        pwr--;
    }
    return '0b'+out;
}
  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"

  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work


console.log(binaryToDecimal('10101'))

console.log(decimalToBinary(21));