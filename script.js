const hard_toggle = document.getElementById("hard");

// Define a dictionary that maps moves to their winning moves.
const winning = {
    "r": "p",
    "p": "s",
    "s": "r",
}

var hard = false;
var bo3 = false;

// Link the toggle button to this script
hard_toggle.onclick = () => { hard = hard_toggle.checked; };

// Convert a letter representation to its corresponding word
const repr_to_word = (repr) =>
{
    switch (repr)
    {
        case "r":
            return "rock";
        case "p":
            return "paper";
        case "s":
            return "scissors";
    }
}

// Called on any move button press
const player_move = (move) =>
{
    // Generate a random move for the computer
    let computer_move = ["r", "p", "s"][Math.floor(Math.random() * 3)];

    // If we are on hard, we make the computer win 80% of the time
    if (hard && Math.random() > 0.2)
    {
        computer_move = winning[move];
    }
    
    // Check who is the winner
    let winner = "The Player wins!";
    if (computer_move == winning[move])
        winner = "The Computer wins!";
    else if (computer_move == move)
        winner = "It's a tie."
        
    // Display on webpage
    document.getElementById("out").innerHTML = "You played \"" + repr_to_word(move) 
        + "\" and the computer played \"" + repr_to_word(computer_move) + "\". " + winner;
}

document.getElementById("p1rock").onclick = () => { player_move("r"); };
document.getElementById("p1paper").onclick = () => { player_move("p"); };
document.getElementById("p1scissors").onclick = () => { player_move("s"); };