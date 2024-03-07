import { ref, uploadBytesResumable, getDownloadURL, getStorage, type FirebaseStorage } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export default class FirebaseFileStorage {
  private storage: FirebaseStorage; 

  constructor() {
    this.storage = getStorage();
  }



  async uploadFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const storageRef = ref(this.storage, `${uuidv4()}-${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        () => {
        }, 
        (error) => {
          console.log(error);
          reject(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  }
}
