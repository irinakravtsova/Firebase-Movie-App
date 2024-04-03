
// import  { createMoviesController }  from "./controller";
// const app = createMoviesController();

// app.init();

import  { MOVIES_STORAGE_KEY }  from "./constants";
import  { createMoviesModel }  from "./model";
import { createStorage }    from "./storage";
import  { createView }  from "./view";


const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
// const listlNode = document.querySelector(".js-movies-list");

const initialMovies = [];
const model = createMoviesModel(initialMovies);
const view = createView('.js-output', hendleClickMovie, hendleDeleteMovie);
const storage = createStorage(MOVIES_STORAGE_KEY);

inputNode.focus();

storage.pull().then((movies) => {
  model.setMovies(movies);
  view.renderMovies(model.getMovies())
});


inputNode.addEventListener('input', function() {
  if (inputNode.value !=="")  {
    btnAddNode.disabled = false;
   } else {
    btnAddNode.disabled = true;
   }
})

btnAddNode.addEventListener("click", function() {
  const movieTitle = inputNode.value;
  const movie =  model.addMovie({ 
  title: movieTitle 
});
  
 view.addMovie(movie);
  storage.push(movie)
  clearInput();
  btnAddNode.disabled = true;
});

function hendleClickMovie(id) {
  model.toggleMovie(id);
 
  storage.update(model.getMovie(id));
};

function hendleDeleteMovie(id) {
  console.log(id);
  storage.delete(model.getMovie(id));
  // view.addMovie(movie);
  inputNode.focus();
}

function clearInput() {
  inputNode.value = "";
  inputNode.focus();
}

// function getMovieFromUser() {
//   const value = inputNode.value;
//   const movie = value.trim();
//   return movie;
// };

// function addMovie(movie) {
//   movies.push ({
//     movie: movie,
//     completed: false,
//     id: Date.now(),
//   });
// };

// function getMovies() {
//   return movies;

// };

// function renderMovie() {
//   const movies = getMovies();
//   let movieHTML = "";

//   movies.forEach(movie => {
//     movieHTML += `
//     <li id="${movie.id}" class="${movie.completed ? "movieItem movieItem-selected" : 'movieItem'}" >
//       <div class="${movie.completed ? "btn-selected btn-selected-close" : 'btn-selected'}" data-action="done"></div>
//       <div class="movieName" >${movie.movie}</div>
//       <button class="btn-delete" data-action="delete" ></button>
//     </li>
//     `
//   });
//   listlNode.innerHTML = movieHTML;
// };

// function saveToLocalStorage() {
//   localStorage.setItem('movies', JSON.stringify(movies))
// };



// listlNode.addEventListener('click', deleteMovie);
// listlNode.addEventListener('click', doneMovie);

// function deleteMovie(event) {
//   if (event.target.dataset.action === 'delete') {
//    const parentNode = event.target.closest('.movieItem');
//    const id = parseInt(parentNode.id);
//    const index = movies.findIndex(function(elem) {
//     if (elem.id === id) {
//       return true;
//     };
//   });
//   alert('Правда хочешь удалить?')
//   movies.splice(index, 1);
//   saveToLocalStorage();
//   parentNode.remove();
//   inputNode.focus();
//   }
// }

// function doneMovie(event) {
//   if (event.target.dataset.action === 'done') {
//    const parentNode = event.target.closest('.movieItem');
//    const id = parseInt(parentNode.id);

//    const movie = movies.find(function(movie) { 
//      if (movie.id === id) {
//        return true; 
//      }
//    })
//    movie.completed = !movie.completed
//    const btnDone = parentNode.querySelector('.btn-selected');
//    parentNode.classList.toggle('movieItem-selected')
//    btnDone.classList.toggle('btn-selected-close');
//    saveToLocalStorage();
//    inputNode.focus();
//   }
// }







