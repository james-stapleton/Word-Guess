var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".timer");
var wordGuessEl = document.querySelector(".word-guess");
var wordBlanksEl = document.querySelector(".word-blanks");



startButton.addEventListener("click", function(event){
    gameLoop()

})




function gameLoop(){
    console.log("start game");
    startTime()

}

var secondsLeft = 10;
function startTime() {
    var timerInterval = setInterval(
        function() {
            secondsLeft--;
            var timerText = timeEl.children[0].children[0];
            timerText.textContent = secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Time's up!")
            }
        },
        1000
    )
}

document.addEventListener('keydown', function(event){
    var key = event.key;
    console.log(key);
})

function init() {
    var wordList = ["Javascript"];
    var word = wordList[0];
    var wordGuessTextEl = wordGuessEl.children[0];
    wordGuessTextEl.innerHTML = "";

    var numBlanks = Math.floor(word.length/2);
    var wordArray = word.split("");
    console.log(wordArray);
    console.log(numBlanks);
    var randomNums = []
    for (var i = 0; i < word.length; i++) {
        var randNum = Math.floor(Math.random() * word.length);
        while (randomNums.includes(randNum)) {
            randNum = Math.floor(Math.random() * word.length);
        }
        
        wordGuessTextEl.innerHTML += word[i] + " ";
    }

}

init();