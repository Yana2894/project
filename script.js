"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов просмотрели?","");
    
        while (personalMovieDB.count== "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов просмотрели?","");
        }
    },
    rememberMyFilms: function() {
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
     },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else  if (personalMovieDB.count>= 30){
            console.log("Вы киноман");
        } else{
            console.log("Произошла ошибка");
        }
     },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
           console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
      
        for(let i = 1; i < 4; i++){
      //    const  favoriteGenre = prompt("Ваш любимый жанр под номером "+ i, "");
      //     personalMovieDB.genres.push(favoriteGenre);
        let genre = prompt("Ваш любимый жанр под номером "+ i, "");
        if(genre == "" ||  genre === null) {
            console.log ("вы ввели некорректные данные или не ввели их вообще");
            i--;
        } else {
          personalMovieDB.genres[i - 1] = genre;
        }

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    }
   },

   toggleVisibleMyDB: function() {
    // personalMovieDB.privat = !personalMovieDB.privat;
       if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
       } else {
        personalMovieDB.privat = true;
       }
    // personalMovieDB.privat = (personalMovieDB.privat == false ? true : false); 
   },
};
