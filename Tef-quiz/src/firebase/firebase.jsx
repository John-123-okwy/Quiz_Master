////////////////////////



import{initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import{getFirestore} from "firebase/firestore"

///////////////////////


const firebaseConfig={
    apiKey: "AIzaSyAhBnI6Re4wB6IuKzABriFE0QcZ4KVSgm4",
  authDomain: "quiz-app-4e172.firebaseapp.com",
  projectId: "quiz-app-4e172",
  storageBucket: "quiz-app-4e172.firebasestorage.app",
  messagingSenderId: "243519786450",
  appId: "1:243519786450:web:c5d10b299626d4ee33cc0b",
  measurementId: "G-WJ2R7KEYHP"
}

////////////////////////

const app=initializeApp(firebaseConfig)

export default app
export const auth=getAuth(app)
export const db=getFirestore(app)