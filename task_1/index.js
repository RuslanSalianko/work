// curry(yourFunction)
// => curriedFunction
// => curriedFunction()()()()()
// => curried(123,1234,1234)(1234)

function curry(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    }
    return function (...innerArgs) {
      return curried.apply(this, args.concat(innerArgs));
    };
  };
}

function multiplication(a, b, c) {
  return a * b * c;
}

const curryMultiplication = curry(multiplication);

// При вызове функции количество аргументов совпадает с количеством в исходной
// то просто вызывается исходная функция
console.log(curryMultiplication(1, 2, 3));

// При вызове функции количество аргументов не совпадает
// происходит вызов return function (...val2)
// тут массив аргументов складывается из 1, 2 и 3 и вызывается передаваемая функция curried
// которая вызывает исходную функцию т.к. количество аргументов совпадает
console.log(curryMultiplication(1, 2)(3));

// При вызове функции количество аргументов не совпадает
// происходит вызов return function (...val2)
// тут массив аргументов складывается из 1 и 2 и вызывается фун curried
// то т.к количество аргументов не совпадет то снова вызов return function (...val2)
// пока количество аргументов не станет равно исходной функции
console.log(curryMultiplication(1)(2)(3));
console.log(curryMultiplication(1)(2, 3));

// apply принимает = call Но принимает массив
