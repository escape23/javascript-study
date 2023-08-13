// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);


// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// }); 

//     const fnA = function (message, callback) {
//     console.log(message)

//     console.log(callback)
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('Log', number)
// }
// fnA('jfgngjn', fnB)


// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }


// doMath(2, 3, function (x, y) {
//     return x + y;
// } )
// doMath(2, 3, function (x, y) {
//     return x * y;
// } )


// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         console.log(test(el));
//     }
//     return filteredArray;
// }


// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);


// const fnA = function (parameter) {
//     const innerVariable = 'value of fnA'
//     const innerFunction = function () {
//         console.log(innerVariable);
//         console.log('Its calling innerFunction');
//     };
//     return innerFunction;
// }

// const fnB = fnA();

// fnB();


// console.log(fnB);


const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}

const addArro2 = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
}

const addArrow = (...args) =>  console.log(...args);


console.log(add(5, 10, 15));
console.log(addArrow(5, 10, 15));
