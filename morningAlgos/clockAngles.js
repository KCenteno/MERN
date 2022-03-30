//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    let hour = minutes/60;

    let left = minutes%60;

    let hourdeg = hour*30;

    let mindeg = left*6;

    let value = Math.abs((hourdeg-mindeg))%360;

    return value;
}




console.log(clockAngles(360));//180
console.log(clockAngles(180));//90
console.log(clockAngles(210));//75
console.log(clockAngles(588));//6
console.log(clockAngles(980));//10
console.log(clockAngles(361));//174.5