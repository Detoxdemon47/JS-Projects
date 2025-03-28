"use strict";

const container = document.querySelector('.container');
const btnPlay = document.querySelector('.btn_again');
const btnChck = document.querySelector('.btn_check');
const hideNum = document.querySelector('.hide_num');
const msg = document.querySelector('.message');
const inputNum = document.querySelector('.input_number');
const highScoreEL = document.querySelector('.high_score');
const scoreEL = document.querySelector('.score');


let secretNum = Math.floor(Math.random() * 20 + 1);

console.log(secretNum);

let score = 20;
let highScore = 0;

btnChck.addEventListener('click', () => {
    const guess = Number(inputNum.value);
    
   if(guess){

    if(guess != secretNum){
        if(score > 1){
            score--;
            scoreEL.textContent = score;

            msg.textContent = guess > secretNum ? "Too High" : "Too Low";
            scoreEL.textContent = score;
        }else{
            msg.textContent = "Game Over! You Lost";
            container.style.backgroundColor = "#fff";
            scoreEL.textContent = 0;
        }
    }else{
        hideNum.textContent = secretNum;
        hideNum.style.width = "50%";
        hideNum.style.transition = "all 0.5s ease-in";
        container.style.backgroundColor = "#e0d8d3";
        msg.textContent = "Congratulations! You Won";
        highScoreEL.textContent = score;
    }
   }else {
    msg.textContent = "Please Enter The Number";
   }
})


btnPlay.addEventListener('click' , () => {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    scoreEL.textContent = score;
    hideNum.textContent = "?";
    hideNum.style.width = "25%";
    hideNum.style.transition = "all 0.5s ease-in";
    inputNum.value = "";
    container.style.backgroundColor = "#ddd";
    msg.textContent = "Start Guessing...........";
});