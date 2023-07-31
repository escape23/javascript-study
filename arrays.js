// // Перебір масиву
// const array = ["Hello world", null, true, 15];

// // Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }


// const c = [4, 7];
// const d = [5];
// const e = c; // константа e буде мати посилання на тей самий масив, що і константа c
// console.log(c === d); // false
// console.log(c[0] === d[0]); // true -> 5 === 5 -> true
// console.log(c === e); // true
// e[0] = 55;
// console.log(e, c);


// const arrCopy = c.slice(0);
// arrCopy[0] = 100;
// console.log(arrCopy, c);



// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6, 7);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.push(4, 5, 6, 7);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// unshift(додає один або кілька елементів на початок масиву) shift(видаляє один елемент з початку масиву)
// const numbers = [1, 2, 3];
// console.log(numbers.unshift(-3, -2, -1, 0));
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers)
// console.log(numbers.unshift(-3, -2, -1, 0));
// console.log(numbers);
// console.log(numbers.shift())


// slice(start, end) - повертає новий масив, з скопійованими елементами починаючи з індексу start і до індексу end(не включно)
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// const newFruits = fruits.slice(1, 3);
// const lastTwoFruits = fruits.slice(-2);
// console.log(newFruits);
// console.log(lastTwoFruits);
// const newFruits = fruits.slice(1, 3);
// const lastTwoFruits = fruits.slice(-2);
// console.log(newFruits);
// console.log(lastTwoFruits);


//splice(start, deleteCount, ...insert) - мутує масив, вирізаючи з нього deleteCount елементів починаючи з індексу start. Також, можна вставити якість нові елементи замість видалених в insert
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// fruits.splice(2, 1, "kavun");
// console.log(fruits)
// fruits.splice(2, 1, "orange", "lemon")
// console.log(fruits)


// includes(item) - перевіряє чи є item всередині масиву, якщо так - повертає true, якщо ні - повертає false
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// console.log(fruits.includes("banana"))
// console.log(fruits.includes("orange"))



// const fruits = ["apple", "pineapple", "cherry", "banana"];
// const index = fruits.indexOf("cherry")
// console.log(index)
// fruits.splice(index, 2)
// console.log(fruits)
// console.log(fruits.indexOf("pineapple"))


// concat(...arrays) - повертає новий масив, у якому будуть всі елементи масивів arrays

// const fruits = ["apple", "pineapple"];
// const berries = ["cherry", "watermelon"];
// const allItems = fruits.concat(berries);
// console.log(allItems);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.
// const arr = [3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i += 1){
//     if (typeof arr[i] !== "number") {
//         arr.splice(i, 1);
//         i -= 1;
//     }
// }

// console.log(arr)


// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) { 
//     const duplicates = [];
//     for (let i = 0; i < arr.length; i += 1){
//         if (arr.includes(arr[i], i += 1)) {
//             duplicates.push(arr[i]);
//         }
//     }
//     return duplicates;
// }
// console.log(getCommonElements([1, 2, 3, 2, 17, 1, 17, 2, 19]));

// function slugify(title) {
//   // Change code below this line
//   let words = title.toLowerCase;
//   let titleWords = words.split(" ");
//   let slug  = titleWords.join("-")
//   // Change code above this line
// }


// function makeArray(firstArray, secondArray, maxLength) {
//     let result
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         result = newArray.slice(0, maxLength);
//     }
//     else {
//         return newArray;
//     }
//     return result;
// }
// let finish = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// console.log(finish)
// finish = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// console.log(finish)
// finish = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// console.log(finish)
// finish = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// console.log(finish)
// finish = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// console.log(finish)
// finish = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// console.log(finish)

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// function calculateTotal(number) {
// let totalSum = 0;
//  for (i = 1; i <= number; i += 1) {
//         const newSum = i + totalSum;
//         totalSum = newSum;
//     }
// return totalSum;
// }


// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }



// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//   const newTotal = order[i] + total;
//     total = newTotal;
//   }
//   return total;
// }

// let result = calculateTotalPrice([12, 85, 37, 4]);
// console.log(result)





// function findLongestWord(string) {
//     let newArray = string.split(" ");
//     let wordLength = 0;
//     let longestWord;
//     console.log(newArray);
//     for (let i = 0; i < newArray.length; i += 1) {
//         wordLength = newArray[i]
        
//         if (newArray[i].length > wordLength) {
//             longestWord = newArray[i];
//             return longestWord;
//         }
//     }
// }


//Пошук найдовшого слова!!!!!
function findLongestWord(string) {
  // Change code below this line
  let arrStr = string.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }
  }
}
let result = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(result);
result = findLongestWord("Google do a roll");
console.log(result);
result = findLongestWord("May the force be with you");
console.log(result);
result = findLongestWord("ffhfhfhfh jf joro");
console.log(result);