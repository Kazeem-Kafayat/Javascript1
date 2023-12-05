//Write a function that calculated the factorial of a given number
function factorial(num) {
    let factNum = 1;
    for (let y = 1; y <= num; y++) {
        factNum *= y
    }
    return factNum;
}
let factNum = factorial(8)
console.log(factNum);