let button = document.getElementById('btn');
let heightErr = document.getElementById('height_error');
let weightErr = document.getElementById('weight_error');


button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        heightErr.innerHTML = "Please Provide a Valid Height";
    }else{
        heightErr.innerHTML = "";
        height_status = true;
    }


    if(weight === '' || isNaN(weight) || (weight <= 0)){
        weightErr.innerHTML = "Please Provide a Valid Weight";
    }else{
        weightErr.innerHTML = "";
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal weight : ' + bmi;
        }else{
            result.innerHTML = 'Over Weight : ' + bmi;
        }
    }else{
        alert('The Form Has Errors');
        result.innerHTML = '';
    }
});