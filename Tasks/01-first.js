console.clear()
function simpleMultiplication(number) {

    if (number % 2 === 0){
        return number * 8
    }
        return number * 9
}




    console.log(simpleMultiplication(2),16,'-->','Should return given argument times eight...');
    console.log(simpleMultiplication(1),9,'-->', 'Should return given argument times nine...');
    console.log(simpleMultiplication(8),64,'-->','Should return given argument times eight...');
    console.log(simpleMultiplication(4),32,'-->','Should return given argument times eight...');
    console.log(simpleMultiplication(5),45,'-->','Should return given argument times nine...');
    console.log(simpleMultiplication(9),9,'-->', 'Should return given argument times nine...');
    console.log(simpleMultiplication(7),9,'-->', 'Should return given argument times nine...');



    // const even = number % 2 === 0;
    // return number * 8 