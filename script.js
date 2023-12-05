//  question one: create a function that checks if the input/parameter is an even number

function EvenNumber(num) {
    if (num % 2 === 0) {
        return `${num}  is an even number`;
    } else {
        return `${num}  is not an even number`;
    };
}
console.log(EvenNumber(30));

// Question two: create a function that prints n1 to n2, where n1 is the first input/parameter 
//and n2 is the second parameter

function addNum(n1, n2) {
    for (let n = n1; n <= n2; n++) {
        console.log(n);
    }
}
addNum(10, 30);



//Question three:create a function that sum the values in-between two numbers e.g calcFunc(1,3)
//returns 6. i.e 1+2+3.


//function add(start, end) {
//let sum = 0;
//for (let i = start; i <= end; i++) {
//  sum += i;

//}
//return sum;
//}
//let result = add(10, 30);
//console.log(result);

function factorial(num) {
    let result = 1;
    for (let y = 1; y <= num; y++) {
        result *= y
    }
    return result;
}
let result = factorial(6)
console.log(result);

//function factorial(num) {
//   return num;
//}