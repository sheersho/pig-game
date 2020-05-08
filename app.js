/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying,previousState;

var setScore = 20;

//start

init();



//end

    document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){


        var dice = Math.floor(Math.random()*6) + 1;
        
        var dice1 = Math.floor(Math.random()*6) + 1;
        
        
        var diceDOM1 = document.querySelector('.dice1');
        
        var diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        
        diceDOM1.style.display = 'block';

        diceDOM.src = 'dice-' + dice + '.png';
        
        diceDOM1.src = 'dice-' + dice1 + '.png';
        
        if(previousState == 6 && dice==6){
            
            scores[activePlayer] = 0;
            
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        
        
        }
        else if(dice !== 1 && dice1!== 1)
            {
                roundScore = roundScore + dice + dice1;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        else{

             nextPlayer();

        }
        
        previousState  = dice; 


    }



    });


//  document.getElementById('setScore').addEventListener('click', function(){
//      
//
//      setScore = document.getElementById('inputScore').value;
//      
//      setScore = parseInt(setScore);
//      
//      console.log("setScore = " + setScore);
//  });


   document.querySelector('.btn-hold').addEventListener('click', function(){
       
       if(gamePlaying)
           {
       
       scores[activePlayer] = scores[activePlayer] +  roundScore;
       
       document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
               
       var input = document.querySelector('.finalScore').value;
       
       if(input)
           {
               setScore = input;
           }
        else{
             setScore = 100;
        }
       
       if(scores[activePlayer] >= setScore)
           {
               document.getElementById('name-' + activePlayer).textContent = 'WINNER !';
               document.querySelector('.dice').style.display = 'none';
               document.querySelector('.dice1').style.display = 'none';
               document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner');
               document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.active');
               gamePlaying = false;
               
           }
       else
           {
                 nextPlayer();
        
           }
               
        }
       
    
    
        
    })

function nextPlayer(){
    
    activePlayer === 0 ?  activePlayer = 1 : activePlayer =0;
          
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;


        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';    

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
    
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    
        document.querySelector('.player-0-panel').classList.add('active');
    
    //
   
        

    
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    
    if( document.querySelector('.dice').style.display == 'block')
        {
            return false;
        }
    else{
  modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

