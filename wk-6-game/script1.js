
var turn = document.getElementById("turn"),
    boxes = document.querySelectorAll("#main div"), X_or_O = 0;
function selectwinnerBoxes(b1, b2, b3){
    b1 .classList.add("win");
    b2 .classList.add("win");
    b3 .classList.add("win");
    turn.innerHTML = b1.innerHTML + "Won Congrat";
    turn.style.fontSize = "20px";
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
    // get all posibilities
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
    // set event onclick
    // boxes => all boxes
    // X_or_O => to set X or O into the boxes
for(var i =0; i < boxes.length; i++){
    // not allow to change the value of the box
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
 // set event onclick for display
    var div1 = document.getElementById("div1");
    var btng = document.getElementById("btng");
    var main_div = document.getElementById("main");
    var X = document.getElementById("x-btn");
    var back_btn = document.getElementById("back")

function play(){
main_div.style.visibility = "visible";
back_btn.style.visibility = "visible";
div1.style.visibility = "hidden";
}
function back(){
    btng.style.visibility = "visible";
    main_div.style.visibility = "hidden";
    div1.style.visibility = "hidden";
    back_btn.style.visibility = "hidden";
    
}
function player(){
    div1.style.visibility = "visible";
    main_div.style.visibility = "hidden";
    btng.style.visibility = "hidden";
}