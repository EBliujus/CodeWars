function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

console.log(removeExclamationMarks("Hello World!"), "Hello World");
console.log(removeExclamationMarks("RyUwFbfKKO!JydAWgcHKN"), '-->', "RyUwFbfKKOJydAWgcHKN");
console.log(removeExclamationMarks("CYAzqAHoyg!mniqYwlpcI"), '-->', 'CYAzqAHoygmniqYwlpcI' );


