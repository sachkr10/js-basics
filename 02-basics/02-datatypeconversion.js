let number = null;
let valueInNumber = Number(number)
console.log(typeof(number));
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* "33" => 33 
   "33abc" => value is NaN (5) but type is Number from line number 2
   "null" => Object(3), the type is Number(4), 0(5)
   "true" => Boolean(3), the type is Number(4), and 1(5)
   "Undefined" => undefined(3), the type is Number(4), NaN(5)
*/
console.log("Number to boolean conversion");

let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([booleanIsLoggedIn, typeof(booleanIsLoggedIn)])

/*
 1 => true
 0 => false
 anything but not 0 =>true
 "" empty string => false
 "Some string" => true
 null => false
*/

console.log("Number to string");

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);


