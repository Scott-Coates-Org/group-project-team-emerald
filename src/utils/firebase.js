import { v4 as uuidv4 } from 'uuid';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from '@firebase/storage';
import { addDoc, collection, getFirestore, getDocs } from 'firebase/firestore';

export async function uploadImage(file) {
  if (!file) return '';
  const id = uuidv4();
  const metadata = {
    contentType: file.type,
  };
  const storage = getStorage();
  const storageRef = ref(storage, 'images/' + id, metadata);
  const res = await uploadBytes(storageRef, file);
  return res.metadata.fullPath;
}

export async function getImageUrl(path) {
  if (!path.length) return;
  const storage = getStorage();
  const imageRef = ref(storage, path);
  try {
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.log('failed to get image url');
    return '';
  }
}

export async function createCollection(folder, data) {
  const db = await getFirestore();

  try {
    await addDoc(collection(db, folder), data);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getCollection(name) {
  if (!name.length) return;
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, name));

  const res = [];
  querySnapshot.forEach(doc => {
    res.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return res;
}
