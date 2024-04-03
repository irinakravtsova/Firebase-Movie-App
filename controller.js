import  { MOVIES_STORAGE_KEY }  from "./constants";
import  { createMoviesModel }  from "./model";
import { createStorage }    from "./storage";
import  { createView }  from "./view";

export function createMoviesController() {
  const initialMovies = [];
  const model = createMoviesModel(initialMovies);
  const view = createView('.js-output');
  const storage = createStorage(MOVIES_STORAGE_KEY);

 
  return {
    init() {
      storage.pull().then((movies) => {
        model.update(movies);
        view.render(model.get())
      });
    }


  }
  
}

// export default class Controller {
//   constructor() {
//     this.model = new Model({
//       onUpdateMovies: this.hendleModelUpdateMovies,
//       onAddMovie: this.hendleModelAddMovie

//     });
//     this.view = new View({
//       onAddMovie: this.hendleViewAddMovie,
//       onDoneMovie: this.hendleViewDoneMovie,
//       onDeleteMovie: this.hendleViewDeleteMovie
//     });
//     this.storage = createStorage(MOVIES_STORAGE_KEY);
//   }


//   hendleModelUpdateMovies = () => {
//     this.view.renderMovies(this.model.getMovies());
//   }

     
 
 


  // hendleViewAddMovie = (text) => {
  //   this.model.addMovie(text);
  
  // }

  // hendleModelAddMovie = () =>
  // this.view.renderMovie();

  // hendleViewDoneMovie = () => {
  //   this.model.doneMovie();
  // }

  // hendleViewDeleteMovie = () => {
  //   this.model.deleteMovie();
  // }

