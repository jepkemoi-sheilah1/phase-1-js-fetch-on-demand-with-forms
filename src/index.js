
document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector('inputForm'); // select the form
    inputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('form submitted');
    }); // add event listener to form
});
const inputForm = document.querySelector("#searchByID"); 
fetchMoviesById = (input.value) function fetchMoviesById(moviesId) {
    fetch(`http://localhost:3000/movies/${moviesId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
function renderMovies(data) {
    const title = document.querySelector('#movieDetails h4');
    const summary = document.querySelector('#movieDetails p');
    title.innerText = data.title;
    summary.innerText = data.summary;
}