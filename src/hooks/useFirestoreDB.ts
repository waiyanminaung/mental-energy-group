import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type FirestoreData<T> = T & { id: string };

export function useFirestoreDB<T extends DocumentData>(collectionName: string) {
  const [data, setData] = useState<FirestoreData<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [reload, setReload] = useState({});

  const refresh = () => {
    setReload({});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = querySnapshot.docs.map(
          (doc: QueryDocumentSnapshot) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as FirestoreData<T>[];
        setData(documents);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching data")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, reload]);

  return { data, loading, error, refresh };
}
