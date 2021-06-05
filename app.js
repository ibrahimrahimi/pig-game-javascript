var scores, roundScore, activePlayer, gamePlaying, sixCounter, winningPoint, finalPoint;

init();

document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        var dice1DOM = document.querySelector('.dice1');
        var dice2DOM = document.querySelector('.dice2');
        dice1DOM.style.display = 'block';
        dice2DOM.style.display = 'block';
        console.log('active player score: ' + scores[activePlayer])
        dice1DOM.src = 'img/dice-' + dice1 + '.png';
        dice2DOM.src = 'img/dice-' + dice2 + '.png';      
        if (dice1 !== 1 && dice2 !== 1 && !(dice1 ===1 && dice2 ===1)) {
            if (dice1 === 6) {
                sixCounter += 1;
            }
            if (sixCounter >= 2) {
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer()
            } else {
                roundScore = roundScore + dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        }
        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        var userPoint = document.querySelector('.score-panel').value;
        if(userPoint){
            finalPoint = userPoint;
        } else {
            finalPoint = 100;
        }
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= finalPoint || scores[activePlayer] >= winningPoint) {  
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    sixCounter = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    sixCounter = 0;

    winningPoint = 100;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
} 

document.querySelector('.btn-set-point').addEventListener('click', function(){
    var userWinningPoint = prompt("Enter the wining point: "); 
    if(userWinningPoint){
        winningPoint = userWinningPoint;
    }
});