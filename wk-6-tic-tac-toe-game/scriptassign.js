let number_ofPlayer = 1;
let player_counter = 0;


let person;
let machine;

// Two Players identification option "X" or "O"
let player1;
let player2;


let human_score = 0;
let computer_score = 0;


let winner_checker = false;

// Draw Box
let container_div = document.getElementById("container");

for (let i = 1; i <= 9; i++) {
    let bBox = document.createElement("div")
    bBox.setAttribute("class", "box")
    bBox.setAttribute("id", `box${i}`)
    bBox.setAttribute("value", `${i}`)
    bBox.setAttribute("onclick", `humanPlayer(event)`)
    container_div.append(bBox)

}

let optionForPlayer = document.getElementById("optionForPlayer");
let selecting_btn = document.getElementById("selecting-btn");
let keepingScore = document.getElementById("keepingScore");
let hide_caution = document.getElementById("caution-div");
let computer_call = document.getElementById("computer");
let two_playBtn = document.getElementById("play2-btn");
let one_playBtn = document.getElementById("play1-btn");
let who_to_play = document.getElementById("whoToPlay");
let tie_div = document.getElementById("tieStatement");
let display_guide = document.getElementById("guide");
let back_btn = document.getElementById("backBtn");
let human_call = document.getElementById("human");
let board = document.querySelectorAll(".box");

// Player selection

function onePlayer() {
    let tie_div = document.getElementById("tieStatement");
    who_to_play.style.display = "none";
    selecting_btn.style.display = "block";
    number_ofPlayer = 1;
}

function twoPlayer() {
    who_to_play.style.display = "none";
    selecting_btn.style.display = "block";
    number_ofPlayer = 2;
}

// select player identity
function getPlayer(choose) {
    person = document.getElementById(choose.target.id).innerHTML;
    if (person === "X") {
        machine = "O";
    } else {
        machine = "X";
    }
    container_div.style.display = "block";
    back_btn.style.display = "block";
    tie_div.style.display = "none";
    selecting_btn.style.display = "none";
    optionForPlayer.style.display = "none";
    keepingScore.style.display = "inline-flex";
}


// winning statement

function checkForWinner(boardVal, innerVal) {
    const WINNER = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ]
    for (let i = 0; i < 8; i++) {
        if (boardVal[WINNER[i][0]] == innerVal &&
            boardVal[WINNER[i][0]] == innerVal &&
            boardVal[WINNER[i][0]] == innerVal) {
            return true
        }
    }
    return false
}

function getWinner() {
    for (let i = 0; i < board.length; i++) {
        // console.log(board[i].getAttribute("value"))
    }
    if (board[0].innerHTML === person && board[1].innerHTML === person && board[2].innerHTML === person) {


        document.getElementById("you_win").innerHTML = "Human Wins";
        human_score += 1;
        // human_call.innerHTML = human_score;
        winner_checker = true;


    }



    // console.log(board)
    // else if (board[0].innerHTML === machine && board[1].innerHTML === machine && board[2].innerHTML === machine) {
    //         document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
    //         computer_call.innerHTML = computer_score;
    //         computer_score++;

    //     } else if (board[3].innerHTML === person && board[4].innerHTML === person && board[5].innerHTML === person) {
    //         document.getElementById("you_win").innerHTML = "Human Wins";
    //         human_call.innerHTML = human_score;
    //         winner_checker = true;
    //         human_score++;}else {

    //         let tie = 0;
    //         if (tie < board.length) {
    //             for (let i = 0; i < board.length; i++) {
    //                 if (board[i].innerHTML != "")
    //                     tie += 1;
    //             }
    //         }
    //         if (tie === 9) {
    //             tie_div.style.display = "block";
    //             container_div.style.display = "none";
    //         }

    //     }

}
let clickedValue = []
    // Human player
function humanPlayer(e) {
    console.log(e.target.value)

    // condition for playing with computer
    if (number_ofPlayer < 2 && winner_checker === false) {
        if (e.target.innerHTML === "") {
            player_counter++;
            e.target.innerHTML = person;
            // getWinner();
            computerPlayer();
        }
        // Two player condition without computer involvement
    } else {
        let box = document.getElementById(e.target.id)


        box.innerHTML = person;
        if (box.innerHTML === "") {
            player_counter++;
        } else {
            box.innerHTML = person;
            getWinner();
            if (person === "X") {
                person = "O";
            } else {
                person = "X";
            }
        }
    }
}
//  Computer player function
function computerPlayer() {
    const computer = Math.floor(Math.random() * 8) + 1;
    // console.log(computer)
    if (document.getElementById(`box${computer}`).innerHTML === "") {

        document.getElementById(`box${computer}`).innerHTML = machine;
        getWinner();
        player_counter++;
    } else {
        // avoiding the computer generating number more  than the board holds
        if (player_counter < board.length) {
            // request function
            computerPlayer();
        }
    }
}

let play_again_btn = document.querySelector("#playAgainBtn")
play_again_btn.addEventListener("click", playAgain);

function playAgain() {
    for (let i = 0; i < board.length; i++) {
        if (board[i].innerHTML != "" && player_counter == 9) {
            board[i].innerHTML = ""
        } else {
            computerPlayer()
        }

    }

}
// instruction
function guide() {
    hide_caution.style.display = "block";
}

function hide1() {
    hide_caution.style.display = "none";
}

// new game
function newGame() {
    if (human_score.innerHTML === 5 || computer_score === 5) {
        container_div.style.display = "none";
    }
}
newGame();
// play the game again