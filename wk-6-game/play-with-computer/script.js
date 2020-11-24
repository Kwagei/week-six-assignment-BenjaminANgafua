const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();


function TicTacToeGame(){
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn =0;
this.start = function(){
    // watching changes in box
const config = {childList: true };
const observer = new MutationObserver(() => takeTurn());
board.positions.forEach((el) => observer.observe(el, config));
takeTurn();
}
function takeTurn(){
    if (board.checkForWinner()){
        return;
    }

    if(turn % 2 === 0){
        humanPlayer.takeTurn();
    }else{
        computerPlayer.takeTurn();

    }
// nexting player turn is
    turn++;
}
}
function Board(){
this.positions =  Array.from(document.querySelectorAll('.col')); /*To get all the cells*/

    this.checkForWinner = function (){
        let winner = false;
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        const positions = this.positions;

        winningCombinations.forEach((winnerCombo) => {
            const pos0Innertext = positions[winnerCombo[0]].innerText;
            const pos1Innertext = positions[winnerCombo[1]].innerText;
            const pos2Innertext = positions[winnerCombo[2]].innerText;

            const isWinningCombo = pos0Innertext!== '' && 
                pos0Innertext === pos1Innertext &&
                pos1Innertext === pos2Innertext;
            if (isWinningCombo){
                winner = true;
                winnerCombo.forEach((index) => {
                    positions[index].className += ' winner';
                    if(positions[index].innerText === person){
                        document.getElementById("hum").innerHTML = " <strong> Great you win! </strong>"
                    }else if(positions[index].innerText === machine){
                        document.getElementById("com").innerHTML = "<strong> Oh, computer win! </strong>"
                    }
                })
            }
        });
    return winner;
    }
}
var person;
    var machine;
function getPlayer(choose){
    person = document.getElementById(choose.target.id).innerHTML;
    if(person === "X"){
        machine = "O";
    }else{
        machine = "X";
    }
    inner_div.style.display = "block";
    get_player.style.display = "none";

    back_btn.style.display = "block";
}
function HumanPlayer(board){
this.takeTurn = function (){
    board.positions.forEach(el => el.addEventListener('click', handleTurnTaken))
}
function handleTurnTaken(event){
    event.target.innerText = person;
    board.positions
    .forEach(el => el.removeEventListener('click', handleTurnTaken));
}
}
function ComputerPlayer(board){
    this.takeTurn = function (){
        const  availablePositions = 
        board.positions.filter((p) => p.innerText === '');
        const move = Math.floor(Math.random()*availablePositions.length);
        availablePositions[move].innerText = machine;
    }
}
var the_game = document.getElementById("thegame");
var inner_div = document.getElementById("inner");
var play_btn = document.getElementById("play1")
var get_player = document.getElementById("x-btn")
var back_btn = document.getElementById("back")

function start(){
the_game.style.display = "block";
    inner_div.style.display = "none";
play_btn.style.display = "none";
get_player.style.display = "block";
back_btn.style.display = "none";
}