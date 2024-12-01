'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
highscore
document.querySelector('.guess').value = 10;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no input
  if (!guess) {
    displayMessage('⛔️ No numder!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    numberEl.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥You lost the game!');
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  numberEl.textContent = '?';
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
