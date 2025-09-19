// /*
// 1. I have to build a rock paper scissors game
// 2. set initial score to zero with variables named humanScore, computerScore
// 3. should take input from computer using Math.random
// 4. should take input from human using prompt. 
// 5. compare these two and declare score according to the situation 
// 6. update score who wins.
// 7. continue this for 5 rounds who has more score wins.
// problems:
// 1. Doesn't prompt every time function is called
// 2. chooses the same computerchoice. 

// */
// let humanScore = 0;
// let computerScore = 0;
// function getComputerChoice(){
//     const computerChoice =  Math.floor(Math.random()*3);
//     if(computerChoice === 0) return "rock";
//     if(computerChoice === 1) return "paper";
//     if(computerChoice === 2) return "scissors";
// }
// console.log(getComputerChoice())

// function getHumanChoice(){
//     let humanChoice = prompt("Enter your choice");
//     return humanChoice;
// }
// console.log(getHumanChoice());

// function playRound(humanChoice,computerChoice){
//     //let caseSensitive = humanChoice.toLowerCase();
//     if(humanChoice === computerChoice){
//         console.log("Draw!");
//     }
//     else if(humanChoice === "rock" && computerChoice === "paper"){
//         console.log("computer wins");
//         computerScore++;
//     }
//     else if(humanChoice === "paper" && computerChoice === "scissors"){
//         console.log("computer wins");
//         computerScore++;
//     }
//     else if(humanChoice === "scissors" && computerChoice === "rock"){
//         console.log("computer wins");
//         computerScore++;
//     }
//     else{
//         console.log("You win");
//         humanScore++
//     }


// }

// function playGame(){
//     let round = 0;
//     // for(i = 1;i<=5;i++){
//     //     playRound()
//     //     round++
//     // }console.log(computerScore);
//     //console.log(humanScore);
//     playRound();
//     if(computerScore>humanScore){
//         console.log("computer wins")
//     }
//     else{
//         console.log("Human Wins")
//     }
    
// }
// playGame();
// playGame();
// playGame();
// playGame();
// playGame();
// console.log(computerScore);
//     console.log(humanScore);

/**
 * Get input from computer and human(using prompt).
 * declare scores and increase as they are played and won. 
 * write a function to play round.
 * play the game 5 times
 * 
 */

let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)
    if(computerChoice === 0) return "rock";
    if(computerChoice === 1) return "paper";
    if(computerChoice === 2) return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt("What is your choice");
    if(humanChoice === "rock" || "paper" || "scissors"){
        return humanChoice;
    }

    else{
        alert("Invalid choice!Try again");
        return getHumanChoice();
    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        
        return "You win";
        
    }
    else {
        
        return "computer wins";
    }
    // console.log("Current score:",humanScore++)
    // console.log("Computer Score: ",computerScore++)
}

function playGame(){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log("You chose:",humanChoice);
        console.log("Computer Chose:",computerChoice);
        console.log(playRound(humanChoice,computerChoice))
    }


    for(i = 0;i<=4;i++){
        playGame();
    }
    