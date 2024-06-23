let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const User = document.querySelector('#user-score');
const Comp = document.querySelector('#comp-score');

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}

// const userWon = () => {
//     console.log("user won");
// }

// const compWon = () => {
//     console.log("comp won");
// }

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        User.innerText = userScore;
    }
    else{
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        Comp.innerText = compScore;
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const playGame = (userChoice) => {
    console.log('userChoice =',userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice =",compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // if(compChoice === "paper"){
            //     //comp won 
            //     compWon();
            // }
            // else if(compChoice==="scissors"){
            //     //user won
            //     userWon();
            // }
            userWin = (compChoice === "paper") ? false : true;
        }
        else if(userChoice === "paper"){
            // if(compChoice === "rock"){
            //     //user won 
            //     userWon();
            // }
            // else if(compChoice==="scissors"){
            //     //comp won
            //     compWon();
            // }
            userWin = (compChoice==="scissors") ? false : true;
        }
        else if(userChoice === "scissors"){
            // if(compChoice === "rock"){
            //     //comp won 
            //     compWon();
            // }
            // else if(compChoice==="paper"){
            //     //user won
            //     userWon();
            // }
            userWin = (compChoice==="rock") ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
        choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        // console.log(userChoice,"was clicked");
        playGame(userChoice)
    });
});