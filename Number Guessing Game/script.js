const minNum = 1
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);



let attempts = 0;
let guess;
let running = true;

while(running){
    guess = prompt(`Guess the number between ${minNum} to ${maxNum}`);

    guess = Number(guess);

    if(isNaN(guess)){
        alert("Please Enter A valid Number");
    }else if(guess < minNum || guess > maxNum){
        alert("Please Enter Between the Given Numbers");
    }else{
        attempts++;
        if(guess < answer){
            alert("Too Low Try Again");
        }else if(guess > answer){
            alert("Too High Try Again");
        }else{
            alert(`Correct! The Answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}