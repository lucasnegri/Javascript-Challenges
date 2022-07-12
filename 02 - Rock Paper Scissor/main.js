
/*Here we are creating the value that the Computer choose. */
function computerChoice(){
    let randomChoice = Math.floor(Math.random()* 3);
    if (randomChoice === 0) randomChoice = ('rock');
    else if (randomChoice === 1) randomChoice =('paper');
    else if (randomChoice === 2) randomChoice=('scissor');
    return randomChoice;
}


/*Here we are using the values given to compare if we won or lose*/
function round(playerSel, computerChoice){

    let result = "";
  //Draw cases
    if(playerSel == computerChoice){
        result = 'draw';
    } 
    else if ((playerSel == 'rock' && computerChoice == 'scissor') || (playerSel == 'paper' && computerChoice == 'rock') || (playerSel == 'scissor' && computerChoice == 'paper')){
        result = 'win';
    } //Lose cases
    else if((playerSel == 'scissor' && computerChoice == 'rock') || (playerSel == 'rock' && computerChoice == 'paper') || (playerSel == 'paper' && computerChoice == 'scissor')){
        result = 'lose';
    }
    return result;
}


/*Here we are declaring variables for the info that are appearing on the screen and buttons  */
let result = '';
let playerScore = 0;
let computerScore = 0;
let computerSelection = '';
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const story = document.querySelector('.result');
const btn = document.querySelectorAll('button');


/*Each time a person clicks some button, we trigger a event that starts the game and show the values on the screen*/
btn.forEach((button) => {
button.addEventListener('click', () => {
    let userChoose = button.id;
    let computerChoose = computerChoice();
    result = round(button.id, computerChoose); 

    if(playerScore == 10){
        alert("Congratulation, you won! Refresh to play again!");
        window.location.reload();
    }
    
    if(computerScore == 10){
        alert("Better luck next time! Refresh to play again!");
        window.location.reload();
    }

    if(result == 'win'){
        playerScore++;
        pScore.innerHTML = playerScore;
        story.innerHTML = `Good job! ${userChoose} beats ${computerChoose}, Pick again!`;
    }

    else if(result == 'lose'){
        computerScore++;
        cScore.innerHTML = computerScore;
        story.innerHTML = `Sorry! ${computerChoose} beats ${userChoose}, Try again!`;
    } 
    else {
        story.innerHTML = `It's a draw! ${computerChoose} and ${userChoose}, Try again!`;
    }
   }
  );
 }
);




