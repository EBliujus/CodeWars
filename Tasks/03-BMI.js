console.clear()

// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
    if (weight/height**2 <= 18.5) {
        return 'Underweight';
    } else if (weight/height**2 <= 25.0) {
        return 'Normal';
    } else if (weight/height**2 <= 30) {
        return 'Overweight';
    } else if (weight/height**2 > 30) {
        return 'Obese';
    }  
  }

    console.log(bmi(80, 1.80),'-->', "Normal");
    console.log(bmi(90,1.50),'-->', "Obese");
    console.log(bmi(30,1.50),'-->', "Underweight");
    console.log(bmi(105, 2.00),'-->', "Overweight");



 /*  Write function bmi that calculates body mass index (bmi = weight / height**2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

console.log('---------------------------------------');


