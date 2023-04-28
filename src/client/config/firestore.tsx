import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { db } from "./firebase";
import { faV } from "@fortawesome/free-solid-svg-icons";


/* Adding UUID to user as Document
* Add the has password to the user
*/
// Add new user
export async function addUser(user: any, username: string) {
  console.log("Adduser function", user);
  const usersCol = collection(db, "users");
  await setDoc(doc(usersCol, user.uid), {
    username: username,
    email: user.email,
    favorites: {},
  })
}

// Get Favorite list by user
export async function getFavorites(uuid:string) {
  console.log("Calling Favorite");
  // const usersCol = collection(db, "users");
  const q = doc(db,"users", uuid);
  const  usr_data = await getDoc(q);
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites
    if(fav_list){
      for (const key in fav_list){
        console.log(key,fav_list[key]);
      }
    }
  } else {
    console.log("No such document!");
  }
}

// Add to Favorite
export async function addFavorite(uuid:string, location: string, name: string) {
  const q = doc(db,"users", uuid);
  const  usr_data = await getDoc(q);
  console.log("Add Favorite?");
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites
    if(fav_list){
      console.log("Length of fav_list", Object.keys(fav_list).length);
      const max_key = Object.keys(fav_list).reduce((a, b) => a > b ? a : b);
      fav_list[Number(max_key)+1] = {
        location: location,
        name: name
      };
      await updateDoc(q, {favorites: fav_list});
    }
  } else {
    console.log("No such document!");
  }
}

// Delete from Favorite

// Require Update to delete by key
export async function deleteFavorite(uuid:string, key: number) {
  const q = doc(db,"users", uuid);
  const  usr_data = await getDoc(q);
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites
    if(fav_list){
      delete fav_list[Object.keys(fav_list).length];
      // delete fav_list[key];
      await updateDoc(q, {favorites: fav_list});
    }
  } else {
    console.log("No such document!");
  } 
}


