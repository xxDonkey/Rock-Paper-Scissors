const hard_toggle = document.getElementById("hard");

const winning = {
    "r": "p",
    "p": "s",
    "s": "r",
}

var hard = false;
var bo3 = false;

hard_toggle.onclick = () => { hard = hard_toggle.checked; };

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

const player_move = (move) =>
{
    let computer_move = ["r", "p", "s"][Math.floor(Math.random() * 3)];
    if (hard && Math.random() > 0.8)
    {
        computer_move = winning[move];
    }
    
    let winner = "The Player wins!";
    if (computer_move == winning[move])
        winner = "The Computer wins!";
    else if (computer_move == move)
        winner = "It's a tie."
        
    document.getElementById("out").innerHTML = "You played \"" + repr_to_word(move) 
        + "\" and the computer played \"" + repr_to_word(computer_move) + "\". " + winner;
}

document.getElementById("p1rock").onclick = () => { player_move("r"); };
document.getElementById("p1paper").onclick = () => { player_move("p"); };
document.getElementById("p1scissors").onclick = () => { player_move("s"); };