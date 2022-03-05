// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,oneotherRandomCar ] = cars
//Predict the output
// no error, it will run.
//  the comma tells you what indecy inside of the list you are looking for so instead of asking for "0,1,2" you can find with with ",".
console.log(randomCar)
console.log(otherRandomCar)


// ================================================================================


// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//the coutcome is an error saying that it doesnt like how are are calling "name" in console.log
// the right way is to call the const employee["name"] in a console.log to get the name
console.log(name);
console.log(otherName);

// the right way
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(employee["name"]);
console.log(otherName);


// ================================================================================


// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log password should give you "12345"
// we never gave a value console.log hashedpassword
// so in order to get this to work person would need to have password in it so we can pull that information for it.
console.log(password);
console.log(hashedPassword);


// the right way
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 54321
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


// ================================================================================


// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// first 1 is False while the second one is True, being that first = 2, second = 5, and third = 2.
console.log(first == second);
console.log(first == third);



// ================================================================================


// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
//  key being that we are calling the value should be "value", in secondkey again we are calling the value which should be the array, secondkey[0] should be calling the frist value in the array which is 1, and then the last one being that the const is saying it wants the second value in the array it should log 5.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);