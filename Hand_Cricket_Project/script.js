var userScore = document.getElementById('user-score');
var compScore = document.getElementById('comp-score');
var display =  document.getElementById('commentry');
var score = 0;
function clickFunction(numberValue){
    userScore.innerText = parseInt(numberValue.value);
    score = parseInt(score) + parseInt(numberValue.value);
    display.innerText = score;
}

function refreshPage(){
    window.location.reload();
}

function resetFunction(){
    userScore.innerText = 0;
    compScore.innerText = 0;
    display.innerText = "Let's start...!" ;
}