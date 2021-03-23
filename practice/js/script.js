"use strict";

// ------------------ Переменные и их типизация ---------------------
// let number = 4.6;

// console.log(4/0);
// console.log("string" * 9);

// const persone = "Danik";
// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "Danik",
//     age: 25,
//     isMarried: false,
// }
// console.log(obj.name);
// console.log(obj['age']);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
// console.log(arr[0]);

// !------------------ Переменные и их типизация !-------------------

// ------------------- Простое общение с пользователем -------------------

// alert('Hello');
// const result = confirm('What is Your name?');
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

/* const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше surname?', '');
answers[2] = prompt('сколько вам лет?', '');

console.log(typeof(answers)); */

// !------------------- Простое общение с пользователем !-------------------

/* 
    ------ Интерполяции ------------
*/

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`); // Интренполяция идет только при исплоьзовании обратных ковычек

const user = "Daniyar";
alert(`Привет, ${user}`); */

/* 
    ------! Интерполяци !-------
*/

/* 
    --------! 1-Приложение для практики -----------
*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* 
    --------! 1-Приложение для практики -----------
*/