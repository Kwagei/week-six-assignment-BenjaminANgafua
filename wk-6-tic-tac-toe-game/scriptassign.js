var number_ofPlayer = 1;
var player2 = "O";
var player_counter = 0;
var person;
var machine;

var human_score = 0;
var computer_score = 0;

var human_call = document.getElementById("human");
var computer_call = document.getElementById("computer");
var container_div = document.getElementById("container");
var play_againbtn = document.getElementById("playagainbtn");
var selecting_btn = document.getElementById("selecting-btn");
var back_btn = document.getElementById("backBtn");
var optionForPlayer = document.getElementById("optionForPlayer");
var tie_div = document.getElementById("tieStatement");
var two_playBtn = document.getElementById("play2-btn");
var one_playBtn = document.getElementById("play1-btn");
var who_to_play = document.getElementById("whoToPlay");
var board = document.querySelectorAll(".box");
var hide_caution = document.getElementById("caution-div");
var display_guide = document.getElementById("guide");
var keepingScore = document.getElementById("keepingScore");

// Human player
function humanplayer(e) {

    if (number_ofPlayer < 2) {
        if (e.target.innerHTML === "") {
            player_counter++;
            e.target.innerHTML = person;
            computerPlayer();
            getWinner();
            tieStatementCheck();
        }
    } else {
        var box = document.getElementById(e.target.id).innerHTML = person;
        if (box.innerHTML === "") {
            player_counter++;
        } else {
            box.innerHTML = person;
            if (person === "X") {
                person = "O";
            } else {
                person = "X";
            }
            getWinner();
            tieStatementCheck();
        }
    }

}

//  Computer player function
function computerPlayer() {
    const computer = Math.floor(Math.random() * 8) + 1;
    if (document.getElementById("box" + computer).innerHTML === "") {
        document.getElementById("box" + computer).innerHTML = machine;
        getWinner();
        player_counter++;
        console.log("count", player_counter);
    } else {
        if (player_counter < board.length) {
            // requesive function
            computerPlayer();
        }
    }
}

// winning statement
function getWinner() {
    if (board[0].innerHTML === person && board[1].innerHTML === person && board[2].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
    } else if (board[0].innerHTML === machine && board[1].innerHTML === machine && board[2].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[3].innerHTML === person && board[4].innerHTML === person && board[5].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[3].innerHTML === machine && board[4].innerHTML === machine && board[5].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[6].innerHTML === person && board[7].innerHTML === person && board[8].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[6].innerHTML === machine && board[7].innerHTML === machine && board[8].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[0].innerHTML === person && board[3].innerHTML === person && board[6].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[0].innerHTML === machine && board[3].innerHTML === machine && board[6].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[1].innerHTML === person && board[4].innerHTML === person && board[7].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[1].innerHTML === machine && board[4].innerHTML === machine && board[7].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[2].innerHTML === person && board[5].innerHTML === person && board[8].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[2].innerHTML === machine && board[5].innerHTML === machine && board[8].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[2].innerHTML === person && board[4].innerHTML === person && board[6].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[2].innerHTML === machine && board[4].innerHTML === machine && board[6].innerHTML === machine) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;

    } else if (board[0].innerHTML === person && board[4].innerHTML === person && board[8].innerHTML === person) {
        document.getElementById("you_win").innerHTML = "Congratulation you Win";
        human_score++;
        human_call.innerHTML = human_score;
        container_div.style.display = "none";
    } else if (board[0].innerHTML === machine && board[4].innerHTML === machine && board[8].innerHTML === mac) {
        document.getElementById("computerWin").innerHTML = "Woo! Computer Win";
        container_div.style.display = "none";
        computer_score++;
        computer_call.innerHTML = computer_score;
    } else {
        return "noWinner";
    }
}

// restart game
function restartGame() {

}
// play the game again
function playAgain() {
    for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }

    container_div.style.display = "block";
}

// tie statement
function tieStatementCheck() {
    if (player_counter === 9) {
        document.getElementById("tieStatement").innerHTML += "";
        container_div.style.display = "none";
        tie_div.style.display = "block";
    }
}

tieStatementCheck();
// Player selection
function twoPlay() {
    who_to_play.style.display = "none";
    selecting_btn.style.display = "block";
    number_ofPlayer = 2;
}

function onePlay() {
    who_to_play.style.display = "none";
    selecting_btn.style.display = "block";
    number_ofPlayer = 1;
}
// select player

function getPlayer(choose) {
    person = document.getElementById(choose.target.id).innerHTML;
    if (person === "X") {
        machine = "O";
    } else {
        machine = "X";
    }
    container_div.style.display = "block";
    play_againbtn.style.display = "block";
    back_btn.style.display = "block";
    tie_div.style.display = "none";
    selecting_btn.style.display = "none";
    optionForPlayer.style.display = "none";
    keepingScore.style.display = "inline-flex";
}

function guide() {
    hide_caution.style.display = "block";
}

function hide1() {
    hide_caution.style.display = "none";
}