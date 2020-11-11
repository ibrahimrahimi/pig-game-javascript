var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;

});