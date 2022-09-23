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
  const storage = getStorage();
  const storageRef = ref(storage, 'images/' + id);
  const res = await uploadBytes(storageRef, file[0]);

  return res.metadata.name;
}

export function getImgDownloadUrl(id = '') {
  if (!id.length) return;
  const storage = getStorage();
  const imageRef = ref(storage, 'images/' + id);
  return getDownloadURL(imageRef).then(url => {
    return url ? { imgId: id, imgUrl: url } : { imageId: '', imageUrl: '' };
  });
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
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'rooms'));

  const res = [];
  querySnapshot.forEach(doc => {
    res.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return res;
}
