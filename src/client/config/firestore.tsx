import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// collection ref
const usersCollection = collection(db, "users");

export function test() {
  getDocs(usersCollection).then((querySnapshot) => {
    console.log(querySnapshot.size)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });
}

// Add new user
/* Adding UUID to user as Document
* Add the has password to the user
*
*
*/

// Delete user

// Check if user exists

// Get Favorite list by user

// Add to Favorite

// Delete from Favorite


