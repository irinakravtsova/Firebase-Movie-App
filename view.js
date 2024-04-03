 
   

export function createView(selector,  onClickMovie, onDeleteMovie) { //передай действие, которое нужно сделать при клике на movie
  const node = document.querySelector(selector);
 
  return {
    node,
    renderMovies: function ({ moviesIds, moviesById }) {
   
      
      moviesIds.forEach((id) =>  {
       this.addMovie(moviesById[id]);      
      });
    },
   
    addMovie: function(movie)  {
      const input = document.createElement('input');
      const label = document.createElement('label');
      const div = document.createElement('div');
      const btnDelete = document.createElement('button');
 
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', movie.id);
      div.classList.add('movieItem');
      label.classList.add('movieName');
      input.classList.add('btn-selected');
      btnDelete.classList.add('btn-delete');

      div.onclick = () => {
        console.log(div);
        this.className = (this.className == 'movieItem' ? 'movieItem-selected' : 'movieItem' )
      }

      // div.addEventListener('click', function() {
      //   console.log(3);
      //   this.className = (this.className == 'movieItem' ? 'movieItem-selected' : 'movieItem' )
      // })
  
     
      input.onclick = () => { //определяем id movie, на котором произошел клик
        
        onClickMovie(movie.id);

        
        
      }

      if (movie.done) {
         input.setAttribute('checked', true)
         div.classList.toggle('movieItem-selected');
        
        }

      btnDelete.onclick = () => {
        console.log(2);
        onDeleteMovie(movie.id);
      }

      label.innerText = movie.title,
      label.setAttribute('for', movie.id);

      div.append(input, label, btnDelete);

      this.node.append(div);
    } 

  };
}


// export default class View {
//   constructor({ onAddMovie, onDeleteMovie, onDoneMovie}) {
//     this.inputNode = document.querySelector(".js-inputMovie");
//     this.btnAddNode = document.querySelector(".js-btn-new-movie");
//     this.listlNode = document.querySelector(".js-movies-list");

//     this.onAddMovie = onAddMovie;
//     this.onDeleteMovie = onDeleteMovie;
//     this.onDoneMovie = onDoneMovie;
    
    
    // this.btnAddNode.addEventListener("click", this._hendleAddMovie);
    // this.listlNode.addEventListener('click', this._hendleDeleteMovie);
    // this.listlNode.addEventListener('click', this._hendleDoneMovie); 
    
  // }

      

  
