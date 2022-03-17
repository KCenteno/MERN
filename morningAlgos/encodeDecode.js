//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    let output = ""
    let count = 0
    let char = str[0]
    for (let i = 0; i <= str.length; i++) {
        if(char === str[i]) count ++
        else if(char != str[i] || i === str.length) {
            output += char + count
            count = 1
            char = str[i]
        }
    }
    return output
}
// console.log(encode("aaaabbcddd"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let decodeObj = {}
    let result = ""
    //getting the array of numbers in the string
    numArray = str.match(/\d+/g)
    for (let i = 0; i < str.length; i++) {
        //getting the letter and setting it in our object
        if(isNaN(str[i])) 
            //setting the letter as the property and the value as our shifted array
            decodeObj[str[i]] = numArray.shift()         
    }
    //iterate obj to write out result
    for (let item in decodeObj) {
        result += item.repeat(decodeObj[item]);
    }
    return result
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));
// console.log(parseInt("432"));
// console.log(parseInt2("432"));