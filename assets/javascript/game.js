//global variables
const words = ['fat', 'lazy', 'hungry'];
const allowableLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let wins = 0;
let guessesRemaining = 10;
let currentWord = "";
let underScore = [];
let rightWord = [];
let wrongWord = [];


//DOM manipulation
let docUnderScore = document.getElementsByClassName('underscores');
let docWinTracker = document.getElementsByClassName('wins-count');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let docRemainingGuess = document.getElementsByClassName('remainingGuess');

function startGame(){
    assignCurrentWord(words);
    setEventListeners();
    checkIfUserLost();
}
startGame();

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

function setEventListeners(){
    //get user guess
    document.onkeyup = function(e){
        //if users guess is right
        if(currentWord.indexOf(e.key) > -1){
            //push to rightWord Array
            rightWord.push(e.key);
            //replace underscore with right letter
            underScore[currentWord.indexOf(e.key)] = e.key;
            docUnderScore[0].innerHTML = underScore.join(' ');
            //when all underscores have been filled, alert YOU WIN and increase wins by 1
            if(underScore.join('') ==  currentWord){
                wins++;
                winAlert();
                docWinTracker[0].innerHTML = wins;
                startGame();
            }
        }
        //if users guess is wrong push to wrongWord array
        else{
            wrongWord.push(e.key);
            docWrongGuess[0].innerHTML = wrongWord;
            guessesRemaining = guessesRemaining -1;
            docRemainingGuess[0].innerHTML = guessesRemaining;
        }
    }
};

function checkIfUserLost(){
    if(guessesRemaining <= 0){
      alert('You LOSE!')
    }
};

function winAlert(){
    alert("You WIN!");
};


docUnderScore[0].innerHTML = generateUnderScore().join(' ');
