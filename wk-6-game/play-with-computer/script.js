

// inquiring object oriently where
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();


function TicTacToeGame(){
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    // keep track of the turn for next player
    let turn =0;
this.start = function(){
    // watching all the position for changes in each box
const config = {childList: true }; /*when ever a child of the div changes I should notice*/
const observer = new MutationObserver(() => takeTurn());/*when ever a child received value there should be atake turn for the other child*/
board.positions.forEach((el) => observer.observe(el, config));
takeTurn(); /*The first person need to take a turn*/
}
// changing player turn
function takeTurn(){
    /*console.log("to see changes")*/
    /*if turn is taken check for winner*/
    if (board.checkForWinner()){
        return;
    }
    /*% means remainder*/
    if(turn % 2 === 0){
        humanPlayer.takeTurn();
        /*if not even number computer player tak turn*/
    }else{
        computerPlayer.takeTurn();

    }
//increment i.e decide next player turn
    turn++;
}
}
function Board(){
this.positions =  Array.from(document.querySelectorAll('.col')); /*To get all the cells*/
    /*checking for winner*/
    this.checkForWinner = function (){
        let winner = false; /*whether winner is found or not*/
        /*figure out all combinations of cell for winning
        what to look at:
        0  1  2
        3  4  5
        6  7  8
        
        */
       /*arry of arry for winning combination*/
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
/*human player: call the board in the constructor*/
function HumanPlayer(board){
this.takeTurn = function (){
    /*add an event listener to each of the column to listen to changes and click*/
    board.positions.forEach(el => el.addEventListener('click', handleTurnTaken));
}
function handleTurnTaken(event){
    /*display human player*/
    event.target.innerText = person;
    /*remove click and handle turn for the next player*/
    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken));
}
}
/*computer player: call the board in the constructor**/
function ComputerPlayer(board){
    this.takeTurn = function (){
        /*console.log() to check computer player turn*/
        /*get available space for computer          filter each position base on if they have innertext or not*/
        const  availablePositions = board.positions.filter((p) => p.innerText === '');
        /*console.log("availablePositions")*/
        const move = Math.floor(Math.random()*availablePositions.length);
     /*display computer player*/
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