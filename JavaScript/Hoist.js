// Problem 1

console.log(hello);
var hello = 'world';

// var hello;
// console.log(hello); // logs undefined
// hello = "world";

// var hello needed to be in frount inorder for this to run.
var hello = 'world';
console.log(hello);

//====================================================================

//Problem 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// this should work and it should console.log magnet.


//====================================================================

//Problem 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// this should work and it should console.log "super cool" being that it is calling the var and not printing/ running the function.

//====================================================================

//Problem 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// this should work and it should console.log chicken and half-chicken. if there was another console.log food after the last var then it would console.log "gone"

//====================================================================

//Problem 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// i dont think this would work because mean isnt a function.

mean();
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

// i would get rid of the console.logs and jsut call the functions being that it has console.logs in the functions.

//====================================================================

//Problem 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// it should run but i think th top will give you an undifend being that your console.logging befoing givving a value to genre

// this is how the top should be

// var genre = "disco";
// console.log(genre);

//====================================================================

//Problem 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// i beliave that it should work fine first giving you "san jose", then when the function is called it should log "seattle" and "burbank", then when you getout of the function and console.log again dojo is equal to "san jose".

//====================================================================

//Problem 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// this doesnt run because it doesnt like how the else if was written.

// This is how it should be written.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}