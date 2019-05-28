//global variables
const words = ['fat', 'lazy', 'hungry'];
const allowableLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let wins = 0;
let guessesRemaining = 5;
let currentWord = "";
let underScore = [];
let rightWord = [];
let wrongWord = [];
let gameStarted = false;


//DOM manipulation
let docUnderScore = document.getElementsByClassName('underscores');
let docWinTracker = document.getElementsByClassName('wins-count');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let docRemainingGuess = document.getElementsByClassName('remainingGuess');

//press any key to start
restartGame();
function restartGame(){
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {
            gameStarted = true;
            sendToStart();         
        }
      });
};

//if game started = true
function sendToStart(){
    if(gameStarted){
        startGame();
    }
};
//start game function
function startGame(){
    assignCurrentWord(words);
    docUnderScore[0].innerHTML = generateUnderScore().join(' ');
    setEventListeners();
};

//function to assign a random word to variable currentWord
function assignCurrentWord(array) {
    const index = Math.floor(Math.random() * ((array.length -1) - 0 + 1)) + 0;
    currentWord = array[index]
  };


//create underscore length based on randomly selected word
function generateUnderScore(){
    for(var i=0; i< currentWord.length; i++){
        underScore.push('_');
    }
    return underScore;
};

//function for event listener and changes that come from key inputs 
function setEventListeners(){
    //get user guess
    document.onkeyup = function(e){
        console.log(e.key);
        if(allowableLetters.includes(e.key)){
            if(currentWord.indexOf(e.key) > -1){
                //push to rightWord array
                rightWord.push(e.key);
                //replace underscore with right letter
                underScore[currentWord.indexOf(e.key)] = e.key;
                docUnderScore[0].innerHTML = underScore.join(' ');
                //when all underscore have been filled, answer is correct
                if(underScore.join('') === currentWord){
                    wins++;
                    docWinTracker[0].innerHTML = wins;
                    gameEnder();
                }
            }
            else{
                wrongWord.push(e.key);
                docWrongGuess[0].innerHTML = wrongWord;
                guessesRemaining = guessesRemaining -1;
                docRemainingGuess[0].innerHTML = guessesRemaining;
                checkIfUserLost();
            }
        }
        else{
            alert("You may only use letters A-Z")
        }
    }
};

//function to check if the player is out of guesses, if so they lost
function checkIfUserLost(){
    if(guessesRemaining <= 0){
      alert('You LOST!');
      gameEnder();
    }
};

function gameEnder(){
    gameStarted = false;
    guessesRemaining = 5;
    currentWord = "";
    underScore = [];
    rightWord = [];
    wrongWord = [];
    docRemainingGuess[0].innerHTML = guessesRemaining;
    docWrongGuess[0].innerHTML = 0;
    docUnderScore[0].innerHTML = '';

};

