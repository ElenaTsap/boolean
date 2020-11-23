console.log('Hello Boolean Variables!');

// for booleans we use the values true and false
// in console log it is highlighted like a number
// if you wrap it with quotes it is a string!

let myFirstBool = true;
let myFakeBool= 'true;';

console.log('my real Boolean', myFirstBool);
console.log('my fake Boolean', myFakeBool);

console.log('the type for Boolean variables is:', typeof(myFirstBool));

// = symbol is assignment symbol
// == is the symbol for equal

// line 19 is an error we cannot assign a value to another value
// console.log(2=1);

// line 24: no error because this is not an assignment 
// this is a comparison
// so the result or output will be true of false - a boolean
console.log(2==1); // false

console.log(1=='1'); // true
// == compares only values
// compares arguments like they are strings

console.log(1==='1'); // false
// compares values AND data types
// compares while getting argument as own data type


let myBoolF = false;
let myBoolT = true;

console.log('myBoolF', myBoolF, '!myBoolF', !myBoolF); 
console.log('myBoolT', myBoolT, '!myBoolT', !myBoolT); 
// if we put ! in front a boolean variable is make the value the opposite

console.log(0); //false
console.log(!0); //true

console.log(1); //1
console.log(!1); //false

console.log(5); //5
console.log(!5); //false

// 0 is false and 1 is true

console.log(true&&true); // true
console.log(true&&false); // false
console.log(false&&true); // false
console.log(false&&false); // false

console.log(true||true); // true
console.log(true||false); // true
console.log(false||true); // true
console.log(false||false); // false

console.log('myFirstBool has a value of: ', myFirstBool);
console.log(true||myFirstBool);

// alert(myFirstBool);

console.log('1 < 2', 1 < 2); //true
console.log('1 > 2', 1 > 2); //false
console.log('1 < 2', 1 < 1); //false
console.log('1 <= 2', 1 <= 1); //true
console.log('1 >= 2', 1 >= 1); //true
console.log('1!=1', 1!=1); //false
console.log('1!=2', 1!=2); //true

let pass = 123;

let inputPass = prompt('Please enter the password');

if (pass==inputPass) {
    alert('Welcome Home!');
} else {
    alert('No correct pass - no entry!');
}

/* 
Info: Code block: a code bunch which is in a scope like inside {}
Heads-Up: Code block works all together or none of it works

//// if is a special method which makes a logical control and executes the code block if the condition is TRUE
/// Heads:Up: The logical control have to output true or false (boolean)
If just checks the output so  basically you can write true or false yourself and if can work always or never
*/