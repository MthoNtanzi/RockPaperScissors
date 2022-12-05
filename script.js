function go(){
    document.getElementById("playingField").style.display = "block";
    document.getElementById("intro").style.display = "none";
    
}

let userScore = 0;
let compScore = 0;
var result;
let text = null;
let numGames = 0;

var userChoice;

function play(choice){ 
    
    userChoice = choice;
    
    //Give computer choice
    let compOption = ["Rock", "Paper", "Scissors"];
    
    var compNum = randChoice();
    
    var compChoice =  compOption[compNum];

    switch(userChoice){
        case("Rock"):
            if(compChoice == "Rock"){
                result = "Draw";
            }else if(compChoice == "Paper") {
                result = "You Lose";
            } else if(compChoice == "Scissors") {
                result = "You Win";
            }
        break;
        case("Paper"):
            if(compChoice == "Rock"){
                result = "You Win";
            }else if(compChoice == "Paper") {
                result = "Draw";
            } else if(compChoice == "Scissors") {
                result = "You Lose";
            }
        break;
        case("Scissors"):
            if(compChoice == "Rock"){
                result = "You Lose";
            }else if(compChoice == "Paper") {
                result = "You Win";
            } else if(compChoice == "Scissors") {
                result = "Draw";
            }
        break;
        default:
            result = "Try Again";
    }

    //Give result text in page
    function showResult(){
        text = "You chose: " + userChoice + ". Computer chose: " + compChoice;
        text += "<br><h2>" + result + "</h2>";
        text +="<input type='button' onclick='playAgain()' class='playBtn' value='Play Again'> &nbsp <input onclick='newGame()' class='playBtn' type='button' value='New Game'>";
        document.getElementById("result").innerHTML = text;

        if(result == "You Win"){
            userScore++;
        }else if(result == "You Lose"){
            compScore++;
        }
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("compScore").innerHTML = compScore;

        document.getElementById("playButtons").style.display = "none";
    }
    
    showResult();
}

function playAgain(){
    text = "Choose your option";
    document.getElementById("result").innerHTML = text;
    document.getElementById("playButtons").style.display = "block";
}

function newGame(){
    text = null;
    compScore = 0;
    userScore = 0;

    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("compScore").innerHTML = compScore;
    
    document.getElementById("result").innerHTML = text;
    document.getElementById("playButtons").style.display = "block";

    document.getElementById("playingField").style.display = "none";
    document.getElementById("intro").style.display = "block";
    
}

function randChoice(){
    let num = Math.floor(Math.random()*3);
    return num;
}

/*switch(userChoice){
    case "Rock":
        if(compChoice = )
}*/