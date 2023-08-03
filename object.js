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

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
alert(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
alert(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
alert(bookPrice); // undefined