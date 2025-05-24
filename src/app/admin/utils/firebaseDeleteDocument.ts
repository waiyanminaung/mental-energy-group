import { db, storage } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

interface Document {
  id: string;
  featured_image?: string;
}

export async function firebaseDeleteDocument(
  collectionName: string,
  document: Document
) {
  const docRef = doc(db, collectionName, document.id);

  if (document.featured_image) {
    const imageUrl = new URL(document.featured_image);
    const imagePath = decodeURIComponent(
      imageUrl.pathname.split("/o/")[1].split("?")[0]
    );
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
  }

  await deleteDoc(docRef);
}
