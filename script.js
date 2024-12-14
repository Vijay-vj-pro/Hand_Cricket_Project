var userScore = document.getElementById('user-score');
var compScore = document.getElementById('comp-score');
var display =  document.getElementById('commentry');
var score = 0;
var levels = document.getElementById('level-btn');
var lvl = "Level : Easy";
levels.innerText = lvl ;
var lcp = document.getElementById('level-change-page');
var lcpimg = document.getElementById('lcp-img');

//function for change the levels
function changeLevel(){
    if(lvl == "Level : Easy"){
        lvl = "Level : Medium";
        document.getElementById('lcp-lvl').innerText= "Level : MEDIUM";
        lcp.style.backgroundImage = 'radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgb(215, 148, 253) 0%, rgb(103, 13, 126) 90% )';
        lcpimg.src = "medium-level.png";
        lcp.style.display = 'flex';
        setTimeout(() => {
            lcp.style.display = 'none';
        }, 2000);
        levels.innerText = lvl;
        console.log(levels.innerText);
        document.body.style.backgroundPosition = 'center center';
    }else if(lvl == "Level : Medium"){
        lvl = "Level : Hard";
        lcp.style.backgroundImage = 'radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgb(255, 138, 173) 0%, rgb(97, 7, 7) 90% )';
        document.getElementById('lcp-lvl').innerText= "Level : HARD";
        lcpimg.src = "hard-level.png";
        lcp.style.display = 'flex';
        setTimeout(() => {
            lcp.style.display = 'none';
        }, 2000);
        levels.innerText = lvl;
        console.log(levels.innerText);
        document.body.style.backgroundPosition = 'center bottom';
    }else if(levels.innerText = "Level : Hard"){
        lvl = "Level : Easy";
        lcp.style.backgroundImage = 'radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgb(160, 204, 255) 0%, rgb(2, 80, 175) 90% )';
        document.getElementById('lcp-lvl').innerText= "Level : EASY";
        lcpimg.src = "easy-level.png";
        lcp.style.display = 'flex';
        setTimeout(() => {
            lcp.style.display = 'none';
        }, 2000);
        levels.innerText = lvl;
        console.log(levels.innerText);
        document.body.style.backgroundPosition = 'center top';
    }else{
        lvl = "Error in level";
        levels.innerText = lvl;
        console.log(levels.innerText);
    }
}

//function to display the score board
function displayScore(){
    setTimeout(() => {
        document.getElementById('lose-page').style.visibility = 'visible';
        document.getElementById('score-card').innerText = 'Your score is ' + parseInt(score);
        document.getElementById('score-card-level').innerText = lvl;
        userScore.innerText = 0;
        compScore.innerText = 0;
        display.innerText = "Let's start...!" ;
        score = 0;
    }, 2000);
}

//function to click the number and generate random numbers by computer
function clickFunction(numberValue){
    userScore.innerText = parseInt(numberValue.value);
    if(lvl == "Level : Easy"){
        var randNum = Math.floor((Math.random() * 10) + 1);
        compScore.innerText = parseInt(randNum);
        if(parseInt(numberValue.value) == parseInt(randNum)){
            document.getElementById('user_button').style.display = 'none';
            displayScore();
        }else{
            score = parseInt(score) + parseInt(numberValue.value);
            display.innerText = "Score: " + parseInt(score);
        }
    }else if(lvl == "Level : Medium"){
        var Mtemp1 = Math.floor((Math.random() * 2) + 9);
        var Mtemp2 = Math.floor((Math.random() * 10) + 1);
        console.log(Mtemp1 +" and "+ Mtemp2);
        if(numberValue.value == Mtemp1){
            compScore.innerText = parseInt(Mtemp1);
            document.getElementById('user_button').style.display = 'none';
            displayScore(); 
        }else if(numberValue.value == Mtemp2){
            compScore.innerText = parseInt(Mtemp2);
            document.getElementById('user_button').style.display = 'none';
            displayScore();
        }else{
            compScore.innerText = parseInt(Mtemp2);
            score = parseInt(score) + parseInt(numberValue.value);
            display.innerText = "Score: " + parseInt(score);
        }
    }else if(lvl == "Level : Hard"){
        var Htemp1 = Math.floor((Math.random() * 3) + 8);
        var Htemp2 = Math.floor((Math.random() * 10) + 1);
        var Htemp3 = Math.floor((Math.random() * 10) + 1);
        console.log(Htemp1+"and"+Htemp2+"and"+Htemp3);
        if(numberValue.value == Htemp1){
            compScore.innerText = parseInt(Htemp1);
            document.getElementById('user_button').style.display = 'none';
            displayScore(); 
        }else if(numberValue.value == Htemp2){
            compScore.innerText = parseInt(Htemp2);
            document.getElementById('user_button').style.display = 'none';
            displayScore(); 
        }else if(numberValue.value == Htemp3){
            compScore.innerText = parseInt(Htemp3);
            document.getElementById('user_button').style.display = 'none';
            displayScore(); 
        }else{
            compScore.innerText = parseInt(Htemp2);
            score = parseInt(score) + parseInt(numberValue.value);
            display.innerText = "Score: " + parseInt(score);
        }
    }
}

//function to refresh the page
function refreshPage(){
    window.location.reload();
}

//function reset the score
function resetFunction(){
    userScore.innerText = 0;
    compScore.innerText = 0;
    display.innerText = "Let's start...!" ;
    score = 0;
    document.getElementById('lose-page').style.visibility = 'hidden';
    document.getElementById('user_button').style.display = 'flex';
}