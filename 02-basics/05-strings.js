let myName = "Sachin"
let repoCount = 30;

console.log(myName + repoCount + "Value"); // not a good practice

//Good Practice , String interpolation
console.log(`My name is ${myName} and my total count of repo in git is ${repoCount}`)

let lastName = new String("yutrekl");
console.log(lastName[1].toUpperCase());
console.log(lastName.length);
console.log(lastName.charAt(1));
console.log(lastName.indexOf('y'));
console.log(lastName.substring(1,3));
console.log(lastName.slice(-7,3));


const middleName = "  kumar.  "
console.log(middleName);
console.log(middleName.trim());

const cityName= "Kolkata"
console.log(cityName.replace("Kolkata","Calcutta"));
console.log(cityName.includes("k"));


const str = 'The quick brown fox jumps over the lazy dog.';

let splitUse = str.split(" ");
console.log(splitUse[4]);
let splitUse1 = str.split("");
console.log(splitUse1[7]);
const str1 = 'The quick brown fox jumps over the lazy dog.';
const str1Array = str1.split()
console.log(str1Array);












