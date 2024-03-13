"use strict";
// Assignment Operator's
let a = 5;
let b = 6;
a += b;
b += a;
console.log(b);
// String Operator's 
let msg = " Nouman " + " Jamil ";
console.log(msg);
// Logical Operator's 
let availableShoes = true; // Practice 1 With AND LOgic 
let borrowedShoes = 8;
const maxallowedShoes = 9;
if (availableShoes && borrowedShoes > maxallowedShoes) {
    console.log("Apko Shoes Mil skty hain");
}
else {
    console.log("Apko Shoes naii mil skty");
}
let coupencode = true; // Practice 2 With OR AND Combined Logic
let amountCoupen = 1000;
let coupencodemember = true;
if (coupencode || (amountCoupen > 1000 && coupencodemember)) {
    console.log("APko Discount mil gya ha");
}
else {
    console.log("APko discount naii mila");
}
// Ternary Operator's
// condition or conditions ? expression or expressions
let userName = "NOUMAN JAMIL";
let Password = 12345;
userName == "NOUMAN JAMIL" && Password == 12345
    ? console.log("You are Logged In") // Practice 1   
    : console.log("Invalid Username and Pasword");
userName == "JAMIL" && Password == 12345
    ? console.log("You are Logged In") // Practice 2 with AND Logic Operator
    : console.log("Invalid Username and Pasword");
userName == "JAMIL" || Password == 12345
    ? console.log("You are Logged In") // Practice 3 with OR Logic Operator
    : console.log("Invalid Username and Pasword");
// Unary Operator's
let counter = 0; // increment ++
counter++;
console.log("Value After Increment:", counter);
let remaingBalance = 45; // Decrement --
remaingBalance--;
console.log("Value After Decrement:", remaingBalance);
let x = 8; // Post increment++ and ++pre Increment
let Postincrement = x++;
console.log("Value of Postincrement:", Postincrement);
console.log("Value After Post Increment:", x);
let PreIncrement = ++x;
console.log("Value of Pretincrement:", PreIncrement);
console.log("Value After Pre Increment:", x);
let y = 8; // Post decrement-- and ++pre decrement
let Postdecrement = y--;
console.log("Value of Postdecrement:", Postdecrement);
console.log("Value After Post decrement:", y);
let Predecrement = --y;
console.log("Value of Predecrement:", Predecrement);
console.log("Value After Pre decrement:", y);
