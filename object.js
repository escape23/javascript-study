// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const array = [1, 2, 3, 4, 5];
// console.log(typeof (array));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// alert(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// alert(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// alert(bookPrice); // undefined

// function sum (numbers) {
//     "use strict";
//   let total;
//     for(let i = 0; i < numbers.length; i += 1){
//       total += numbers[i];
// }
//     return total;
// };

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'


// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   name: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// alert(keys)
// console.log(keys)

// const values = Object.values(book);
// alert(values);
// console.log(values);

// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const x = {};

// const fn = function (myObject) {
//     console.log(myObject)
// };

// fn({ a: 1, b: 2, });




// const playlist = {
//     name: "My favorite playlist",
//     rating: 9.5,
//     tracks: ['Everyday', 'Fashion killa', 'Sundress'],
//     trackCount: 3,
// };


// console.log(playlist);

// const propertyName = 'tracks';

// // console.log(playlist.rating)
// // console.log(playlist['rating'])

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);


// const username = 'Mango';
// const email = 'mango@mail.com';
// const color = 'black';

// const signupData = {
//     username,
//     email,
//     color,
// }

// console.log(signupData) 


const playlist = {
    name: "My favorite playlist",
    rating: 9.5,
    tracks: ['Everyday', 'Fashion killa', 'Sundress'],
    changeName(newName) {
        console.log('this inside changeName: ', this);
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    }
};

playlist.changeName('Valera');
console.log(playlist);

playlist.addTrack('XO life');
console.log(playlist)

playlist.updateRating(6);
console.log(playlist)


