console.log("Rock, Paper, Scissors")
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        let result = document.querySelector('#results');
        let scoreBoard = document.querySelector('#scoreBoard');
        result.textContent = playRound(parseInt(e.target.id), returnComputerPlay()) + "\n";
        scoreBoard.textContent = printScoreBoard();
    });
});



function returnComputerPlay(){
    let random = Math.floor(Math.random()*3);
    return random;
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection + 1) % 3 == computerSelection){
        computerScore++;
        return announceResult(playerSelection, computerSelection, "You lost!");
    }else if (playerSelection == computerSelection){
        return announceResult(playerSelection, computerSelection, "It's a draw!");
    }else{
        playerScore++;
        return announceResult(playerSelection, computerSelection, "You won!");
    }
}

function announceResult(playerSelection, computerSelection, text){
    return `Your play: ${convertNumToPlay(playerSelection)}.
Opponent's play: ${convertNumToPlay(computerSelection)}.
${text}`;
}

function printScoreBoard(){
    if (playerScore >= 5){
        let result = "Player win!\n" + "Player's score: " + playerScore + "\nOpponent's score: " + computerScore;
        playerScore = computerScore = 0;
        return result;
    }
    if (computerScore >= 5){
        let result = "Computer win!\n" + "Player's score: " + playerScore + "\nOpponent's score: " + computerScore;
        playerScore = computerScore = 0;
        return result;
    }
    return "Player's score: " + playerScore + "\nOpponent's score: " + computerScore;
}
function convertNumToPlay(num){
    let play;
    switch (num){
        case 0:
            play = "Rock";
            break;
        case 1:
            play = "Paper";
            break;
        case 2:
            play = "Scissors";
            break;
        default:
            play =  "Error";
    }
    return play;
}