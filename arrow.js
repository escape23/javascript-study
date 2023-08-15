// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         console.log(test(el));
//         const passed = test(el)

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// }


// const callback1 = value =>  value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);


// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// }

// const addArro2 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// }

// const addArrow = (...args) =>  console.log(...args);


// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));




// const add = function (a, b) {
//     return a + b;
// }
// console.log(add(2, 3))

// const add = function () {
//     console.log(arguments);
// }

// add(2, 3, 4, 5, 6)

// const add1 = (...args) => {
//     console.log(...args)
// }

// add1(2, 3, 4, 5, 6)


// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this)
//         console.log('this name: ', this.fullName)

//         const inner =  () => {
//             console.log('this in inner: ', this)
//         }

//         inner()
//     }
// }

// user.showName();