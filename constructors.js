/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы(class)
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function ({brand, model, price} = {}) {
    // const {brand, model, price} = config
// 2. Функция вызывается в контексте созданного объекта,
//    то есть в this записывается ссылка на него
    this.brand = brand;
    this.model = model;
    this.price = price;
    
    this.changePrice = function (newPrice) {
        this.price = newPrice;
    }

// 4. Ссылка на обьект возвращается в место вызова new Car

};

// 1. Якщо функція викликається через new, створюється пустий об`єкт 
const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(myCar);

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);

const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
console.log(myCar3);