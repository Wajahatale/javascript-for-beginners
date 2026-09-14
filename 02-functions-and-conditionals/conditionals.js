// An IF statement asks a Yes or No question.
// True? Run the block. False? Skip past the block.
const age = 15;

if(age >= 18){
    console.log("You can vote");
}

// ELSE is the fallback. One branch always runs -- never both, never neither
const temperature =15;

if(temperature > 25){
    console.log("Its a hot day");
} else{
    console.log("Its not a hot day")
}


// ELSE IF chains more questions.
// JavaScript checks top to bottom and Stops at the first true one.
const score = 95;

if (score >= 90){
    console.log("Grade : A");
} else if (score >= 80){
    console.log("Grade : B");
} else if(score >= 70){
    console.log("Grade : C");
} else {
    console.log("Grade: F");
}
// These all produce true or false - npothing else
console.log(5>3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 === 5);
console.log( 5 !== 3);

// === compares value AND type.
// == converts the types first, which causes real bugs. Avoid it.
console.log(5 === "5");
console.log(5 == "5");


// && means AND - both sides must be true
// || means OR - either side will do
// ! means NOT - flips true to false
const hasTicket = true;
const isOnTime = false;

if (hasTicket && isOnTime){
    console.log("Board the plane.")
}
if (hasTicket || isOnTime){
    console.log("At least one is true");
}
if (!isOnTime){ //Not condition !
    console.log("You are late");
}

// Because return exits immediately, you often don't need else at all.
function checkGrade(score){
    if(score >= 90) return "A";
    if(score >= 80) return "B";
    if(score >= 70) return "C";
    return "F";
}

console.log(checkGrade(95));
console.log(checkGrade(83));
console.log(checkGrade(61));