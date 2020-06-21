let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const btn = document.querySelector('.btn');
const input = document.querySelector('#number');
const msgblock = document.querySelector('.msg-block');

let guessCount = 1;
let resetBtn;
let isGameOver = false;

function checkGuess() {
    const userGuess = parseInt(input.value, 10);
    if(isNaN(userGuess)) {
        alert('Please enter a numerical');
        input.value = '';
        input.focus();
        return false;
    }

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses:';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        isGameOver = true;
        lastResult.textContent = 'Congratulations! You got it right';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game Over ...';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your number is LOWER than target number.';
        } else {
            lowOrHi.textContent = 'Your number is HIGHER than target number.';
        }
    }

    guessCount++;
    input.value = '';
    input.focus();
}

btn.addEventListener('click', checkGuess);

function setGameOver() {
    btn.disabled = true;

    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Start new game';
    msgblock.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParagraph = document.querySelectorAll('.msg-block>p');
    for (let i = 0; i < resetParagraph.length; i++) {
        resetParagraph[i].textContent = '';
        resetParagraph[i].style.backgroundColor = 'white';
    }

    resetBtn.parentNode.removeChild(resetBtn);

    var resetButton = document.querySelectorAll('button');
    for (let i = 0; i < resetButton.length; i++) {
        resetButton[i].disabled = false;
    }

    input.disabled = false;
    input.value = '';
    input.focus();
    randomNumber = Math.floor(Math.random * 100) + 1;
}

input.addEventListener('keydown', inputEnterKeyword);

function inputEnterKeyword(e) {
    if (!e) {
        var e = window.event;
    }
    if(e.keyCode === 13 && !isGameOver) {
        checkGuess();
    }
}