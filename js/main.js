//!  this is the first exam of the first month => films)

// I need to get datas tht need to be append
let elWrapper = document.querySelector(".main-wrapper");

// function that renders all data from film array
function renderData(filmsData) {
  // fucntio that shorts the array and renders its par
  let slicedData = (data) => data.slice(0, 15);

  //for each in order to iterate throught array
  filmsData.forEach((movie) => {
    //  create elements in order to render apart
    let movieCard = document.createElement("div");
    let img = document.createElement("img");
    let movieInfo = document.createElement("div");
    let movieTitle = document.createElement("h3");
    let movieRelease = document.createElement("time");
    let movieGenres = document.createElement("p");
    let movieSlideblock = document.createElement("div");
    let movieOverview = document.createElement("p");

    // create an object that takes a release data
    const { year, month } = extractYearAndMonth(movie);

    // append text contents
    img.src = movie.poster;
    img.alt = "Movie image";
    movieInfo.textContent = `movie title: ${movie.title}`;
    movieRelease.textContent = `release: ${month}-${year}`;
    movieGenres.textContent = `genres: ${movie.genres}`;
    movieOverview.textContent = `overview: ${movie.overview}`;

    // add styles while rendering
    movieCard.classList.add("main-card-movie");
    img.classList.add("movie__image");
    movieInfo.classList.add("movie-info");
    movieTitle.classList.add("movie__title");
    movieRelease.classList.add("movie__release");
    movieGenres.classList.add("movie__genres");
    movieSlideblock.classList.add("movie-overview");
    movieOverview.classList.add("movie__overview");

    // append to the block
    movieInfo.append(movieTitle, movieRelease, movieGenres, movieSlideblock);
    movieSlideblock.appendChild(movieOverview);
    movieCard.append(img, movieInfo);
    elWrapper.appendChild(movieCard);
  });
}
renderData(films);

// function that gets the year and date even month)
function extractYearAndMonth(movie) {
  const releaseDate = new Date(movie.release_date * 1000);
  const year = releaseDate.getFullYear();
  const month = releaseDate.getMonth() + 1;
  return { year, month };
}
