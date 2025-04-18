const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");


let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`

const changeFoodPosition = () => {
foodX = Math.floor(Math.random() * 30) + 1;
foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const changeDirection = (e) => {
    if(e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1
    }else if(e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}

controls.forEach(key => {
    key.addEventListener("click", () => changeDirection({ key: key.dataset.obs }));
});

const initGame = () => {

    if(gameOver) return handleGameOver();


    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);
        score++;

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    // loop 2
    for(let i = snakeBody.length -1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX,snakeY] // setting first elemnent of snake body to current snake position , later on it will keep changing element according to food position as for loop increments

    snakeX += velocityX;
    snakeY += velocityY;

   if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
    gameOver = true;
   }

    // loop 1
    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
   }

    // this code was created before snakebody then it got merged , so for your knowledge follow below code before snakebody part
    //  htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);