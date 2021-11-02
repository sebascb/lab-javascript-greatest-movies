// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
  const director = movies.map((item) => item.director);
    return director;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenDramaMovies = movies.filter((elem) => {
    return (
      elem.director.includes('Steven Spielberg') && elem.genre.includes('Drama')
    );
  });
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoreMovie = movies.reduce((scoreMovie, movie) => {
    scoreMovie += movie.score
    return scoreMovie
  }, 0);
  let averageScore = scoreMovie / movies.length
    if (!movies.length) {
      return 0
    } else {
      return Number(averageScore.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  const dramaScore = dramaMovies.reduce(function(sum, dramaMovie){
    return sum + dramaMovie.score
  }, 0);
  if (dramaMovies.length > 0) {
    return Math.round((dramaScore / dramaMovies.length) * 100) / 100;
  } else {
    return 0
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderYears = [...movies]
  orderYears.sort((a, b) => {
    if(a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year
  })
  return orderYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let alphaMovie = [...movies];
  let sortedMovies = alphaMovie.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  let moviesArr = sortedMovies.map(function(movie) {
    return movie.title});
    return moviesArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
