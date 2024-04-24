let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let random = Math.floor(Math.random() * 3)
  if(random === 1){
    return 'rock';
  }else if(random === 2){
    return 'paper';
  }else{
    return 'scissors';
  }
}

const scoreboard = document.querySelector('.scoreboard');
const display = document.querySelector('.display');

const choiceButtons = document.querySelectorAll('.choice-btn');
choiceButtons.forEach(button =>{
  button.addEventListener('click', (e) => {
    playRound(e)
  })
});

function playRound(e){
  let playerChoice = e.target.textContent.toLowerCase();
  determineWinner(playerChoice, getComputerChoice());
  if(playerScore == 5 || computerScore == 5){
    endGame();
  }
}

function determineWinner(player, computer){
  if (player == 'rock' && computer == 'scissors' || 
      player == 'paper' && computer == 'rock' ||
      player == 'scissors' && computer == 'paper' )
    {
      playerScore++;
      updateDisplay(1, player, computer);
  }
  else if (player == 'rock' && computer == 'paper' || 
      player == 'paper' && computer == 'scissors' ||
      player == 'scissors' && computer == 'rock' ){
        computerScore++;
        updateDisplay(2, player, computer);
      }
  else{
    updateDisplay(3, player, computer);
  }
}

function updateDisplay(num, player, computer){
  switch(num){
    case 1:
      display.textContent = `You win! ${player} beats ${computer}`;
      break;
    case 2:
      display.textContent = `You lose! ${computer} beats ${player}`;
      break;
    case 3:
      display.textContent =  `It's a tie.`
  }
  scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`
}

const endMessage = document.querySelector('.end-message');
function endGame(){
  if(playerScore == 5){
    endMessage.textContent = 'Congratulations, you won!'
  }else{
    endMessage.textContent = 'You lost lmao'
  }
  
}