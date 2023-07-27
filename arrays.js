// // Перебір масиву
// const array = ["Hello world", null, true, 15];

// // Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }


const c = [5, 6];
const d = [5];
const e = c; // константа e буде мати посилання на тей самий масив, що і константа c
console.log(c === d); // false
console.log(c[0] === d[0]); // true -> 5 === 5 -> true
console.log(c === e); // true
e[0] = 55;
console.log(e, c);