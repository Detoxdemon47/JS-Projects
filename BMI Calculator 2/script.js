var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultArea = document.querySelector(".comment");

var modalContent = document.querySelector(".modal-content");
var modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){
    if(age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)){
        modal.style.display = "block";
        modalText.innerHTML = `All Fields are Required`;
    }else{
        countBmi();
    }
}

function countBmi(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1])/100 * Number(p[1])/100);

    var result = '';
    if(bmi < 18.5){
        result = 'UnderWeight';
    }else if(bmi >= 18.5 && bmi <= 24.9){
        result = 'Healthy Weight'
    }else if(bmi >= 25 && bmi <= 29.9){
        result = "OverWeight"
    }else if(bmi >= 30 && bmi <= 34.9){
        result = "Obese";
    }else if(bmi >= 35){
        result = "Extremely Obese";
    }


    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id='comment'>${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
