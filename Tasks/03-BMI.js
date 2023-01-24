console.clear()

    const weight = 0;
    const height = 0;

function bmi(weight, height) {
    if (weight/height^2 <= 18.5) {
        return 'Underweight';
    } else if (weight/height^2 <= 25.0) {
        return 'Normal';
    } else if (weight/heiht^2 <= 30) {
        return 'Overweight';
    } else if (weight/height^2 > 30) {
        return 'Obese';
    }  
  }

    console.log(bmi(80, 1.80),'-->', "Normal");
    console.log(bmi(90,1.50),'-->', "Obese");


 /*  Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

console.log('---------------------------------------');


function findMultiples(integer, limit) {
    
    
    for (let i = 0; i <= limit; i++) {

    }
    return 0;
  }




  console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
  console.log(findMultiples(1, 2), [1, 2])
  console.log(findMultiples(5, 7), [5])
  console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
  console.log(findMultiples(11, 54), [11, 22, 33, 44])


  console.log('--------------');

 