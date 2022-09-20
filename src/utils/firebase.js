import { v4 as uuidv4 } from "uuid";
import { getStorage, ref, uploadBytes } from "@firebase/storage";

export async function uploadImage(file) {
  if (!file) return false;
  const id = uuidv4();
  const storage = getStorage();
  const storageRef = ref(storage, "images/" + id);
  const res = await uploadBytes(storageRef, file[0]);

  return res.metadata.name;
}
