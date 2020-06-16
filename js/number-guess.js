let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const btn = document.querySelector('.btn');
const input = document.querySelector('#number');

let guessCount = 1;
let resetBtn;