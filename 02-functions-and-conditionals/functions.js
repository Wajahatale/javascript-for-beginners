// A Function is a named set of instructions.
// Writing it down is called "defining" a function. Running it is called "calling" a function.
function greet(){
    console.log("Hello, there!");
}
greet();
greet();
greet();

// A PARAMETER is a placeholder inside the brackets.
// Whatever you pass in when you called the function lands there.
function greetPerson(name){
    console.log(`Hello, ${name}!`);
}
greetPerson("Alice");
greetPerson("47");
greetPerson("Charlie");

// More than one parameter can be used, separated by commas.
function add(num1, num2){
    return num1 + num2;
}
console.log(add(5, 7));
console.log(add(10, 20));

// console.log PRINTS a valuefor human to read, then its gone.
// return HANDS a value back to your code so you can keep using it.
function addAndPrint(num1, num2){
    console.log(num1 + num2);
}
const result = addAndPrint(5, 7);
console.log(result); // undefined, because addAndPrint doesn't return anything

// return also ENDS the function immediately.
// Anything written after it never runs.
function double(number){
    return number * 2;
    console.log("This will never run, because the function has already returned.");
}
console.log(double(7));