//create an array of songs(fill this in with songs - maybe use const instead of var?)
var songArray = ['dog', 'cat', 'horse', 'lion', 'whale','pelican', 'giraffe', 'orangutan', 'hippopotamus', 'rhinoceros'];
var wins = 0;
var guessesLeft= 15;
var guessedLetters = [];
var currentWord = "";

//initiate game function
/*function startGame(){
    assignCurrentWord();
    setEventListener();
    updateDOM();
}
startGame();*/

//choose a word from the array randomly
function assignCurrentWord(array) {
    var randomIndex = Math.floor(Math.random() * (array.length));
    currentWord = (array[randomIndex]);
    return currentWord;
}  

assignCurrentWord(songArray);
console.log(currentWord);

//event listener (onkeyup) to record each guess from user 
function setEventListener(){
    document.onkeyup = function(i){
        guessedLetters.push(i.key);
    }
}
console.log(guessedLetters);
        /*if(wordHasBeenGuessed()){
            wins++
            document.getElementById('wins-count').textContent = wins;
           startGame();
        }
        shouldGuessesGoDown(i.key);
        console.log(currentWord, guessedLetters, guessesLeft);
        updateDom();
        checkIfUserLost();//create underscores based on length of word
//Get user's letter guess
//check if the guess is right or wrong
//if right, push to right array
//if wrong, push to wrong array
    }
}*/
