const playerChoiceRock = document.getElementById('rock');
const playerChoicePaper = document.getElementById('paper');
const playerChoiceScissors = document.getElementById('scissors');

const cpuChoiseRock = document.getElementById('crock');
const cpuChoisePaper = document.getElementById('cpaper');
const cpuChoiseScissors = document.getElementById('cscissors');

let playerScore = document.querySelector('.p_score');
let cpuScore = document.querySelector('.c_score');

let status = document.querySelector('.status');
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal-content')
const playAgain = document.getElementById('play-again')


let cpuChoise = ["rock","paper","scissors"];
function computerSelection(){
    randomPlay = cpuChoise[Math.floor(Math.random()*3)];
    return(randomPlay);
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;    
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
        }
    }
}

function playerClick(){
    playerChoiceRock.addEventListener("click", () =>{
        playerChoiceRock.style.backgroundColor = "#FF00A5";
        playRound('rock', computerSelection());
        remove();
        check();
    });
    playerChoicePaper.addEventListener("click", () =>{
        playerChoicePaper.style.backgroundColor = "#FF00A5";
        playRound('paper', computerSelection());
        remove();
        check();
    });
    playerChoiceScissors.addEventListener("click", () =>{
        playerChoiceScissors.style.backgroundColor = "#FF00A5";
        playRound('scissors', computerSelection());
        remove();
        check();
    });
}

function remove(){
    setTimeout(function(){
        playerChoicePaper.style.backgroundColor = '#2d2d2d';
        playerChoiceRock.style.backgroundColor = '#2d2d2d';
        playerChoiceScissors.style.backgroundColor = '#2d2d2d';
        cpuChoiseRock.style.backgroundColor = '#2d2d2d';
        cpuChoiseScissors.style.backgroundColor = '#2d2d2d';
        cpuChoisePaper.style.backgroundColor = '#2d2d2d';
    },800);
}

function winner (){
    if (cpuPoints == 5) status.textContent = `You Lost! Do yo want to play again?`
    else if (playerPoints == 5) status.textContent = `You Won! Do yo want to play again?`
}

function check (){
    if (cpuPoints == 5 || playerPoints == 5){
        winner()
        modal.style.display = 'block'
        modalWindow.style.display = 'block'
        playAgain.addEventListener('click', () => {
            modal.style.display = 'none'
            modalWindow.style.display = 'none'
            cpuScore.textContent = '0';
            playerScore.textContent = '0';
            cpuPoints=0;
            playerPoints=0;
        })
    }
}

function game(){
    playerClick();
}

let cpuPoints = 0;
let playerPoints = 0;
game();