const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImage = document.querySelectorAll(".option_image");


optionImage.forEach( (image,index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait..."

        optionImage.forEach( (image1,index1) => {
            if(index !== index1){
                image1.classList.remove("active");
            }
        });

        gameContainer.classList.add("start");

        let time = setTimeout( () => {

        gameContainer.classList.remove("start");


            let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNum = Math.floor(Math.random() * 3)
        console.log(randomNum);

        let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];

        cpuResult.src = cpuImages[randomNum];

        let uservalue = ["R", "P", "S"];
        uservalue = uservalue[index];

        let cpuvalue = ["R", "P", "S"];
        cpuvalue = cpuvalue[randomNum];

        let outcomes = {
            RR: "Draw",
            RP: "You Lose!",
            RS: "YOU WIN!",
            PP: "Draw",
            PS: "You Lose!",
            PR: "YOU WIN!",
            SS: "Draw",
            SR: "You Lose!",
            SP: "YOU WIN!",
        }

        let outcomeValue = outcomes[uservalue + cpuvalue];

        result.textContent = outcomeValue;
    }, 2500);
        });
});


// let people = {
//     name: "Deepesh",
//     age: 25
// }

// let outcome = people["name"];
// console.log(outcome);

// we can access object values in array form also we just have to put key name inside quotes
