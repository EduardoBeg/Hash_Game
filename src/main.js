let player, Winner = null;
let selectedPlayer = document.getElementById('selected_player');
let selectedWinner = document.getElementById('selected_winner');
let squares = document.getElementsByClassName('square');

changePlayer('X')
function chooseSquare (id){
    if (Winner !== null) {
        return;
    }
    let square = document.getElementById(id);
    
    if(square.innerHTML != "-"){
        return;
    }
    square.innerHTML = player;
    square.style.color = 'black';
    
    if(player === 'X'){
        changePlayer('O') 
    }else{
        changePlayer('X') 
    }
    changePlayer(player)
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);   
    let square4 = document.getElementById(4);   
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);
    
    if(checkSequence(square1, square2, square3)) {
        changeColor(square1, square2, square3);
        changeWinner(square1);
        return;
    }
    if(checkSequence(square4, square5, square6)) {
        changeColor(square4, square5, square6);
        changeWinner(square4);
        return;
    }
    if(checkSequence(square7, square8, square9)) {
        changeColor(square7, square8, square9);
        changeWinner(square7);
        return;
    }
    if(checkSequence(square1, square4, square7)) {
        changeColor(square1, square4, square7);
        changeWinner(square1);
        return;
    }
    if(checkSequence(square2, square5, square8)) {
        changeColor(square2, square5, square8);
        changeWinner(square2);
        return;
    }
    if(checkSequence(square3, square6, square9)) {
        changeColor(square3, square6, square9);
        changeWinner(square3);
    }
    if(checkSequence(square1, square5, square9)) {
        changeColor(square1, square5, square9);
        changeWinner(square1);
        return;
    }
    if(checkSequence(square3, square5, square7)) {
        changeColor(square3, square5, square7);
        changeWinner(square3);
        return;
    }
}

function changeWinner(square){
    Winner = square.innerHTML;
    selectedWinner.innerHTML = Winner;
}

function changeColor(square1, square2, square3){
    square1.style.background = 'green';
    square2.style.background = 'green';
    square3.style.background = 'green';
    
}
function checkSequence(square1, square2, square3){
    let like = false;
    
    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        like = true;    
    }
    return like;
}

function restart(){
    Winner = null;
    selectedWinner.innerHTML = '';
    for (let i = 1;i<=9;i++){
        let square = document.getElementById(i);
        square.style.background = 'rgb(88, 88, 88)';
        square.style.color = 'rgb(88, 88, 88)';
        square.innerHTML = '-';     
    }
    changePlayer  ('X');
}