// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults: ", defaults);

// Retrieve the first element in array
console.log("first element value is ", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is ", i, " and the value is ", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.

Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/

// Question 1
function getAverageGrade(grades){
    let sum = 0;
    // Get the sum first
    for(let i=0; i<grades.length; i++){
        sum += grades[i];
    }
    console.log(`Sum is ${sum}, length is ${grades.length}`);
    // Divide the sum by the total number of elements
    return (Math.abs(sum / grades.length))

}

let grades = [10, 20, 30, 40, 50] // average 150/5 = 30
let average = getAverageGrade(grades)
console.log(`${average} is the average of ${grades}.`);
// Output
// Sum is 150, length is 5
// 30 is the average of 10,20,30,40,50.


// Question 2
function removeEvenIndex(arr1, arr2){
    // check for none empty array
    // combine the arrays
    let arr = [];
    let resultArr = [];
    if(arr1.length>0 && arr2.length>0)
        arr = [...arr1, ...arr2]; 
    else
        return resultArr; // empty array

    // remove even-indexed values
    for(let i=0; i<arr.length; i++){
        // check for odd index and push the 
        // content into the resultArr.
        if((i%2)===1)
            resultArr.push(arr[i]);
    }
    // return the result
    return resultArr;
}
const arr1 = [15, 12, 11, 29, 5]; // index 0 1 2 3 4
const arr2 = [13, 2, 6, 7]; // index 5 6 7 8
let resultArr = removeEvenIndex(arr1, arr2);
console.log(`Combining arr1 and arr2:\n\t${[...arr1, ...arr2]}`)
console.log(`Result is ${resultArr}`);
// Output
// Combining arr1 and arr2:
// 15,12,11,29,5,13,2,6,7
// Result is 12,29,13,6

// export modules
module.exports = { getAverageGrade };