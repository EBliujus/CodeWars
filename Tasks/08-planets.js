console.clear()

// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

function getPlanetName(id){
    switch(id){
      case 1:
        return 'Mercury';
      case 2:
        return 'Venus';
      case 3:
        return 'Earth';
      case 4:
        return 'Mars';
      case 5:
        return 'Jupiter';
      case 6:
        return 'Saturn';
      case 7:
        return 'Uranus';
      case 8:
        return 'Neptune';
    }
  }
  console.log(getPlanetName(2), 'Venus');
  console.log(getPlanetName(5), 'Jupiter');
  console.log(getPlanetName(3), 'Earth');

  console.log('-----------------------------');

  function whatday(num) {
    switch (num) {
       case 1:
           console.log('sunday');
       case 2:
           console.log('monday');
       case 3:
           console.log('tuesday');
       case 4:
           console.log('wednesday');
       case 5:
            console.log('thursday');
       case 6:
           console.log('friday');
       case 7:
           console.log('saturday');
       default:
           console.log("Wrong, please enter a number between 1 and 7");
    }
  }
console.log(whatday(1), '-->',   'Sunday')
console.log(whatday(2), '-->',    'Monday')
console.log(whatday(3), '-->',   'Tuesday')
console.log(whatday(8), '-->',     'Wrong, please enter a number between 1 and 7')
console.log(whatday(20),'-->',      'Wrong, please enter a number between 1 and 7')