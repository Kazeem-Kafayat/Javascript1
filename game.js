let response = document.getElementById('response');
let btn = document.getElementById('btn')
const gameResult = Math.floor(Math.random() * 100) + 1;

console.log('gameResult', gameResult)
    //Math.random() generates a pseudo-random number between 0 and 1,
    //Math.floor() returns the largest integer that is less than or equal to
    //the number you give it as an argument(100) meaning round down to the nearest 
    //whole number

btn.addEventListener('click', function() {
    let game = document.getElementById('game').value;
    if (game > gameResult) {
        response.innerHTML = `Too High!`

    } else if (game < gameResult) { response.innerHTML = `Too Low!` } else if (game == +gameResult) { response.innerHTML = `Correct!` }


})