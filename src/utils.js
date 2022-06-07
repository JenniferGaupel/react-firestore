import { collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
  const name = prompt("Enter a color name");
  const value = prompt("Enter a color value");

  const collectionRef = collection(db, "colors");
  const payload = { name, value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};

export const handleEdit = async (id) => {
  const name = prompt("Enter a color name");
  const value = prompt("Enter a color value");

  const docRef = doc(db, "colors", id);

  const payload = { name, value};

  setDoc(docRef, payload);
};

export const handleDelete = async (id) =>{
  const docRef = doc(db, "colors", id);
  
  await deleteDoc(docRef);
}