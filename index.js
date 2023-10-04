
const inputField = document.querySelector('input');

function addMovie(event){
    event.preventDefault();
    const movieTitleText = inputField.value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = movieTitleText;
    movie.appendChild(movieTitle);
    const movieList = document.querySelector('ul');
    movieList.appendChild(movie);
    inputField.value = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie);
