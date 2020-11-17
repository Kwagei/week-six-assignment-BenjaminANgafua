
var turn = document.getElementById("turn"),
    boxes = document.querySelectorAll("#main div"), X_or_O = 0;

var main_div = document.getElementsById("main1");

var guide_div = document.getElementById("guide-div");



function player(){main_div.style.visibility = "visible";}

function selectwinnerBoxes(b1, b2, b3){
    b1 .classList.add("win");
    b2 .classList.add("win");
    b3 .classList.add("win");
    turn.innerHTML = b1.innerHTML + "Won Congrat";
    turn.style.fontSize = "40px";
}
function getWinner(){
    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectwinnerBoxes(box1, box2, box3);

    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectwinnerBoxes(box4, box5, box6);

    else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectwinnerBoxes(box7, box8, box9);

    else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectwinnerBoxes(box1, box4, box7);

    else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectwinnerBoxes(box2, box5, box8);

    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectwinnerBoxes(box3, box6, box9);

    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectwinnerBoxes(box1, box5, box9);

    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectwinnerBoxes(box3, box5, box7);
}
for(var i =0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
        if(X_or_O%2 === 0){
            console.log(X_or_O);
            this.innerHTML = "X";
            turn.innerHTML = "O Turn Now";
            getWinner();
            X_or_O += 1;
        }else{
            console.log(X_or_O);
            this.innerHTML = "0";
            turn.innerHTML = "X Turn Now";
            getWinner();
            X_or_O += 1;
        }

        
        }
    };
}
function replay(){
    for(var i = 0;i < boxes.length; i++){
        boxes[i].classList.remove("win");
        boxes.innerHTML = "";
        turn.innerHTML = "Play";
        turn.style.fontSize = "25px";
    }

}