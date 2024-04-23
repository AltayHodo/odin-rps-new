


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

function getHumanChoice(){
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice
}




function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice == 'rock' && computerChoice == 'scissors' ||
      humanChoice == 'paper' && computerChoice == 'rock' ||
      humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log(`You win. ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
    else if
    (humanChoice == 'rock' && computerChoice == 'paper' ||
    humanChoice == 'paper' && computerChoice == 'scissors' ||
    humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    else{
      console.log('Tie');
    }
  }

  for(let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
}