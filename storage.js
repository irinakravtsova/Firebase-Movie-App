import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  collection,
  doc, 
  setDoc, 
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  updateDoc,
  writeBatch
  
} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCz-YyFxQo0FfBIzvlSEwALbEqBCjli4aw",
  authDomain: "movie-app-c505e.firebaseapp.com",
  projectId: "movie-app-c505e",
  storageBucket: "movie-app-c505e.appspot.com",
  messagingSenderId: "680383699723",
  appId: "1:680383699723:web:6bca7c303bf0539dc2200e"
};

export function createStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);//добавление данных
  return {
    key,
    db,
    pull: async function() { // метод по сети обращается в firestore копируем из firebase get, +this данным коллекции
      const ref = collection(this.db, this.key);
      const q = query(ref, orderBy('createdAt'));
      const querySnapshot = await getDocs(q);
      const movies = []; //создаем пустой массив
      
      querySnapshot.forEach((doc) => {//перебирая БД добавляем данные в пустой пока массив
        movies.push({
          id: doc.id,
          title: doc.data().title,
          done: doc.data().done

        })
        // console.log(`${doc.id} => ${doc.data().title}`);
      });
      return movies;  
    },

    push: async function(movie) {
      try {
        await setDoc(doc(this.db, this.key, movie.id), { //какие именно данные нужно создать
           title: movie.title,
           done: movie.done, 
           createdAt: serverTimestamp(),   
         });
        //  console.log("Document written with ID: ", docRef.id);
      } catch (e) {
            console.error("Error adding document: ", e);
        }
    },
    update: async function(movie) {
      const ref = doc(this.db, this.key, movie.id);
      console.log(movie);
      await updateDoc(ref, {
       done: movie.done,

      });
      
    },
    delete: async function(movie) {
      const batch = writeBatch(this.db, this.key, movie.id);
     
      const ref = doc(this.db, this.key, movie.id);
      batch.delete(ref);
      await batch.commit();

    }

  }
}