let userScore = 0;
let compScore = 0;

// Get all elements with the class "choice" using querySelectorAll
let choices = document.querySelectorAll(".choice");

// generating selection by computer.
const compSelection = () => {
    const options = ["rock", "paper", "scissors"];
    const random_idx = Math.floor(Math.random() * 3);
    return options[random_idx];
}

const drawGame = () => {
    console.log("Game was draw!");
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // generate computer choice
    const compChoice = compSelection();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw Game.
        drawGame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            //comp choice - paper , scissors.
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //comp choice - rock , scissors.
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //user choice - scissors
            //comp choice - rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// Loop through each element and add an event listener
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // Call playerSelection function when a choice is clicked
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
