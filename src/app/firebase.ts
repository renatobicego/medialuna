import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.FIREBAS_API_KEY,
    authDomain: process.env.FIREBAS_DOMAIN,
    projectId: process.env.FIREBAS_PROJECTID,
    storageBucket: process.env.FIREBAS_BUCKET,
    messagingSenderId: process.env.FIREBAS_MSGID,
    appId: process.env.FIREBAS_APPID,
    measurementId: process.env.FIREBAS_MEASID
  }
  
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)