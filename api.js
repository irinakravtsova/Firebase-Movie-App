
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  collection,
  doc, 
  addDoc, 
  getDocs 
} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCz-YyFxQo0FfBIzvlSEwALbEqBCjli4aw",
  authDomain: "movie-app-c505e.firebaseapp.com",
  projectId: "movie-app-c505e",
  storageBucket: "movie-app-c505e.appspot.com",
  messagingSenderId: "680383699723",
  appId: "1:680383699723:web:6bca7c303bf0539dc2200e"
};


export default class API {
  constructor(pull) {
  this.pull = pull;
  }
  createStorage(key) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);//добавление данных
   
    return {//получить movie и данные
      key,
      db,
      pull: async function() { //асинхронный метод обращается по сети и получает данные из хранилища, ф-я копируется из firebase get()
        const ref = collection(this.db, this.key);
        

        // const q = query(ref, orderBy("createdAt")); //сделай порядок задач по полю createdAd
        // const querySnapshot = await getDocs(q); //коллекция из хранилища
       
        const movies = []; //локальный массив- создай пустой массив
  
        querySnapshot.forEach((doc) => { //перебирая данные коллекции из коллекции хранилища
          movies.push({  //добавь в массив набор объектов, состоящих из id и title
            id: doc.id,
            title: doc.data().title,
            // done: doc.data().done
          });
  
      
          console.log(`${doc.id} => ${doc.data().title}`);
        });
      return todos;
      }    

  }
}

}