//data types
const num = 1;
console.log("num",typeof num); //num number

const str = "1";
console.log("str",typeof str); // str string

const bool = true;
console.log("bool",typeof bool); // bool boolean

let x;
console.log("x",typeof x); // x undefined

const y = null;
console.log("y",typeof y); // y object

const obj = {};
console.log("obj",typeof obj); // obj object

const arr = [];
console.log("arr",typeof arr); // arr object

//control structures:
let number = 10;
if (number % 2 ==0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}
// Output: 10 is even

let testnum1 = 0;
while (testnum1 < 5){
  console.log(testnum1);
  testnum1++;
}
console.log("\n");
// 0 1 2 3 4 

let testnum2 = 5; 
do {
  console.log(testnum2)
  testnum2--;
} while (testnum2 >= 0)
// 5 4 3 2 1 0
