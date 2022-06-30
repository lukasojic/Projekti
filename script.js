'use strict';

//Selecting elements

//.getElementById Selektuje elemnte po id-u, brze je od querySeletor-a. (to je relveantno samo kada ima puno elementaka koji u sebi sadrze id). Moguce je selektoavti samo id.

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');

//Starting coditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  //Generating random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display dice

  diceEl.classList.remove('hidden');

  //Da bi ubacili sliku u js koristimo atribut src

  diceEl.src = `dice-${dice}.png`;

  //Check for rolled dice

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
    document.getElementById(
      (`current--${activePlayer}`.textContent = currentScore)
    );
  } else {
    //switch to next player

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
