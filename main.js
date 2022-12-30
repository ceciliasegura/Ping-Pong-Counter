const maxPointsInput = document.querySelector("#maxPoints");
let maxPoints = maxPointsInput.value;
let playerOneCounter = 0;
let playerTwoCounter = 0;

const buttonAddPointToPlayerOne = document.querySelector("#player1");
const buttonAddPointToPlayerTwo = document.querySelector("#player2");
const buttonReset = document.querySelector("#reset");

const countPlayerOne = document.querySelector('#countPlayerOne');
const countPlayerTwo = document.querySelector('#countPlayerTwo');

const image = document.querySelector('#image');

if (maxPoints === '') {
    buttonAddPointToPlayerOne.disabled = true;
    buttonAddPointToPlayerTwo.disabled = true;
    buttonReset.disabled = true;
}

maxPointsInput.addEventListener('change', (event) => {
    maxPoints = Number(event.target.value);
    console.log(maxPoints);
    if (maxPoints > 0) {
        buttonAddPointToPlayerOne.disabled = false;
        buttonAddPointToPlayerTwo.disabled = false;
        buttonReset.disabled = false;
    }
});


buttonAddPointToPlayerOne.addEventListener("click", function () {
    playerOneCounter++;
    maxPointsInput.disabled = true;
    countPlayerOne.innerText = playerOneCounter;
    console.log('Player one counter: ' + playerOneCounter);
    if (playerOneCounter === maxPoints) {
        buttonAddPointToPlayerOne.disabled = true;
        buttonAddPointToPlayerTwo.disabled = true;
        console.log("Player one is the winner");
        image.src = "winner-1.png";
    }
});


buttonAddPointToPlayerTwo.addEventListener("click", function () {
    playerTwoCounter++;
    maxPointsInput.disabled = true;
    countPlayerTwo.innerText = playerTwoCounter;
    console.log('Player two counter: ' + playerTwoCounter);
    if (playerTwoCounter === maxPoints) {
        buttonAddPointToPlayerOne.disabled = true;
        buttonAddPointToPlayerTwo.disabled = true;
        console.log("Player two is the winner");
        image.src = "winner-2.png";
    }
});


buttonReset.addEventListener("click", function () {
    playerOneCounter = 0;
    playerTwoCounter = 0;
    maxPoints = 0;
    maxPointsInput.value = 0;
    countPlayerOne.innerText = 0;
    countPlayerTwo.innerText = 0;
    buttonAddPointToPlayerOne.disabled = true;
    buttonAddPointToPlayerTwo.disabled = true;
    buttonReset.disabled = true;
    maxPointsInput.disabled = false;
    image.src = "ping-pong-image.webp";
    console.log("Reset!");
});