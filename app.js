var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

var sum = 0;
document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    
    
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';      
    
    if (dice === 1) {
        sum = 0;
    }
    sum += dice;

    document.querySelector('#current-' + activePlayer).textContent = sum;
    
});

var currentScore;
document.querySelector('.btn-hold').addEventListener('click', function() {
    currentScore = parseInt(document.querySelector('#score-' + activePlayer).textContent);

    document.querySelector('#score-' + activePlayer).textContent = currentScore + sum;

    document.querySelector('#current-' + activePlayer).textContent = 0;
});
