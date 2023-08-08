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



/*      МЕТОДИ ОБʼЄКТА           */

// const playlist = {
//     name: "My favorite playlist",
//     rating: 9.5,
//     tracks: ['Everyday', 'Fashion killa', 'Sundress'],
//     changeName(newName) {
//         console.log('this inside changeName: ', this);
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };

// console.log(playlist.getTrackCount())

// playlist.changeName('Valera');
// console.log(playlist);

// playlist.addTrack('XO life');
// console.log(playlist)

// playlist.updateRating(6);
// console.log(playlist)

/* Перебір масива */
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys)

// for (const key of keys) {
//     console.log(feedback[key])
//     totalFeedback += feedback[key]
// }

// console.log(totalFeedback)

// const values = Object.values(feedback)
// console.log(values)

// for (const value of values) {
//     console.log(value)
// }


// const friends = [
//     { name: 'Mango', online: false, },
//     { name: 'Kiwi', online: true, },
//     { name: 'Poly', online: true, },
//     { name: 'Ajax', online: false, }
// ]
// // console.table(friends)


// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of friends) {
//         // console.log(friend)
//         console.log(friend.name);
//         if (friend.name === friendName) {
//             return 'YESSSIR';
//         } 
//     }
//     return 'Nei';
// }

// console.log(findFriendByName(friends, 'Poly'))
// console.log(findFriendByName(friends, 'Chelsy'))


// const getAllNames = function (allFriends) {
//     const names = []
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(getAllNames(friends))



// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends;
// }
// console.log(getOnlineFriends(friends));



// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (!friend.online) {
//             offlineFriends.push(friend)
//         }
//     }
//     return offlineFriends;
// }
// console.log(getOfflineFriends(friends));



// const cart = {
//     items: [],

// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
//     console.log(color.hex)
// }




// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: {highToday, lowToday, }, 
//        tomorrow: {highTomorrow, lowTomorrow}, 
//     icon: { tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//         todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, } = highTemperatures;



// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// icon: tomorrrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}, tomorrow: { low: lowTomorrow, high: highTomorrow}, } = highTemperatures;