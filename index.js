const btnEl = document.getElementById("btn");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const bmiEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
    const heightValue = heightEl.value / 100;
    const weightValue = weightEl.value;

    const bmi = (weightValue) / (heightValue * heightValue);
    bmiEl.value = bmi;

    if(bmi < 18.5){
        weightConditionEl.innerText = "Under Weight";
    }else if(bmi >= 18.5 && bmi <=24.9){
        weightConditionEl.innerText = "Normal Weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        weightConditionEl.innerText = "Overweight";
    }else if(bmi >= 30){
        weightConditionEl.innerText = "Obesity";
    }
}



btnEl.addEventListener("click", calculateBMI);