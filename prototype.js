// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// // console.log(dog); // { name: 'Манго', __proto__: animal }
// // console.log(animal.isPrototypeOf(dog)); // true
// // console.log(animal)

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log('totalSalary', employee.getWage())


/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC)
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// const dummyObj = Object.create({
//   message : 'Це власна властивість об`єкта',
// })

// console.log('dummyObj', dummyObj)
// console.log(dummyObj.message)


/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */