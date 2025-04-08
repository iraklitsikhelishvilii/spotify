type Song2 = {
  id: string;
  name: string;
  author: string;
  image: string;
};
export const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("musicLibrary", 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("songs")) {
        db.createObjectStore("songs", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error("Failed to open IndexedDB"));
  });
};

export const saveSongToIndexedDB = (song: Song2): Promise<void> => {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction("songs", "readwrite");
        const store = transaction.objectStore("songs");
        store.add(song);

        transaction.oncomplete = () => {
          resolve();
        };

        transaction.onerror = (error) => {
          reject(error);
        };
      })
      .catch((error) => {
        console.error("Error opening IndexedDB:", error);
        reject(error);
      });
  });
};

export const getSongsFromIndexedDB = (): Promise<Song2[]> => {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction("songs", "readonly");
        const store = transaction.objectStore("songs");
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () =>
          reject(new Error("Failed to retrieve songs from IndexedDB"));
      })
      .catch((error) => reject(error));
  });
};
const openIndexedDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open("musicLibrary", 1);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(new Error("Failed to open IndexedDB"));
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
      if (!db.objectStoreNames.contains("songs")) {
        db.createObjectStore("songs", { keyPath: "id" });
      }
    };
  });
};
export const removeSongFromIndexedDB = async (songId: string) => {
  try {
    const db = await openIndexedDB();
    const transaction = db.transaction("songs", "readwrite");
    const store = transaction.objectStore("songs");

    store.delete(songId);

    return new Promise<void>((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(new Error("Failed to remove song"));
    });
  } catch (error) {
    console.error("Error removing song from IndexedDB:", error);
    throw error;
  }
};
