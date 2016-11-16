//create a random number for the computer's decision
//pull our guesses from input fields
//validate against what number computer is thinking of
//give us a response according to which digits we have correct

var computerChoice1,computerChoice2,computerChoice3;
var guess1,guess2,guess3;
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function compareGuess(g1,g2,g3,c1,c2,c3) {
    var response = '';
    if (g1 == c1) response = 'pico ';
    if (g2 == c2) response += 'pico ';
    if (g3 == c3) response += 'pico ';
    if (g1 == c2 || g1 == c3) response = 'fermi ';
    if (g2 == c1 || g2 == c3) response += 'fermi ';
    if (g3 == c1 || g3 == c2) response += 'fermi ';
    if (response === '') response = 'bagels';

    return response;
}
function startGame() {
  //clear the last game
  var lastGame = document.getElementById("guesses");
  var newGame = document.createElement('tbody');
  lastGame.parentNode.replaceChild(newGame, lastGame);
  newGame.setAttribute("id","guesses");  
  // choose 3 unique numbers
  do {
    computerChoice1 = getRandomNumber();
    computerChoice2 = getRandomNumber();
    computerChoice3 = getRandomNumber();
  } while (computerChoice1===computerChoice2 || computerChoice1===computerChoice3 || computerChoice2===computerChoice3);
}
document.getElementById("startGameButton").addEventListener("click",function(){
  startGame();
  console.log(computerChoice1,computerChoice2,computerChoice3);
});
document.getElementById("guessButton").addEventListener("click",function() {
    guess1 = document.getElementById("guess1").value;
    guess2 = document.getElementById("guess2").value;
    guess3 = document.getElementById("guess3").value;
    var table = document.getElementById("guesses");

    var nextRow = table.insertRow();
    var firstNum = nextRow.insertCell(0);
    firstNum.innerHTML = guess1;
    var secondNum = nextRow.insertCell(1);
    secondNum.innerHTML = guess2;
    var thirdNum = nextRow.insertCell(2);
    thirdNum.innerHTML = guess3;
    var grade = nextRow.insertCell(3);
    grade.innerHTML = compareGuess(guess1,guess2,guess3,computerChoice1,computerChoice2,computerChoice3);
});
// var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];
