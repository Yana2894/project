"use strict";

let numberOfFilms ;

function start() {
    numberOfFilms = +prompt("Сколько фильмов просмотрели?","");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов просмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

 function rememberMyFilms() {
    for(let i=0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ""),
              b = prompt("Насколько оцените его?","");
    
        if (a != null && b != null && a != " " && b != " " && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
 }

 rememberMyFilms();

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else  if (personalMovieDB.count>= 30){
        console.log("Вы киноман");
    } else{
        console.log("Произошла ошибка");
    }
 }
 detectPersonalLevel();

console.log(personalMovieDB);

 function showMyDB(){
     if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
     }
 }
 showMyDB();

 function writeYourGenres (){
      
      for(let i = 1; i < 4; i++){
    //    const  favoriteGenre = prompt("Ваш любимый жанр под номером "+ i, "");
    //     personalMovieDB.genres.push(favoriteGenre);

        personalMovieDB.genres[i - 1] = prompt("Ваш любимый жанр под номером "+ i, "");
      }
 }

