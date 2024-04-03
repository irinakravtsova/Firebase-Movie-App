import {v4 as uuidv4} from 'uuid';

export function createMoviesModel(movies, moviesById) {
  return {
    moviesIds: [],
    moviesById: {},
    addMovie: function({ title }) {
      const movie = {
        title,
        done: false,
        id: uuidv4() 
      }
      this.moviesIds.push(movie.id);
      this.moviesById[movie.id] = movie;

      return movie;
    },
    setMovies: function(movies) {
      // this.movies = [];
      // this.moviesById = {};
      movies.forEach(movie => {
        this.moviesIds.push(movie.id),
        this.moviesById[movie.id] = movie;
      });
    },
 
    getMovies: function() {
      return {
        moviesById: this.moviesById,
        moviesIds: this.moviesIds
      };
    },
    toggleMovie: function(id) {
      this.moviesById[id].done = !this.moviesById[id].done

    },
      
    getMovie: function(id) {
      return this.moviesById[id];
      }
    }

    
  }


// export default class Model {
//   constructor({
//     onUpdateMovies,
//     onAddMovie
//   }) {
//     this.movies = []; 
//     this.moviesIds =  [];
//     this.moviesById =  {};

//     this.onUpdateMovies = onUpdateMovies
//     this.onAddMovie = onAddMovie;
//   }
//   update(movies) {
//     this.movies = movies;
//     console.log(movies);
//     this.onUpdateMovies(movies);
//   }

//   addMovie(title) {
//     const movie = {
//       title,
//       done: false,
//       id: uuidv4()
//     };
//     this.moviesIds.push(movie.id);
//     this.moviesById[movie.id] = movie;

//     console.log('Your UUID is: ' + myuuid);

//     return movie;
//   }
//   setMovies(movies) { //создай список
//     this.moviesIds = [];
//     this.moviesById = {};

//     movies.forEach(movie => {
//       this.moviesIds.push(movie.id),
//       this.moviesById[movie.id] = movie;
//     });
//   }
//   getMovies() {
//     return {
//       moviesById: this.moviesById,
//       moviesIds: this.moviesIds
//     };
  
//   }
//   toggleMovie(id) {
//     this.moviesById[id].done = !this.moviesById[id].done
//   }
//   getMovie(id) {
//     return this.moviesById[id];
//   }

// }