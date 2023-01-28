function* generator(a) {
    const c = 0;
    let b = 0;

    while (true){
        b++;
        yield c * b;
    }

  }
const gen = generator(a)  
  console.log(gen)


console.log(gen.next().value, '1 x 1 = 1', '1 x 1 = 1')
// console.log(gen.next().value, '1 x 2 = 2', '1 x 2 = 2')
// console.log(gen.next().value, '1 x 3 = 3', '1 x 3 = 3')
// console.log(gen.next().value, '1 x 4 = 4', '1 x 4 = 4')
// console.log(gen.next().value, '1 x 5 = 5', '1 x 5 = 5')