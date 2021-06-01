import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDF6s0PjLlS607n69rXDEsqJBuy8da5xZg",
  authDomain: "linkedin-clone-5b513.firebaseapp.com",
  projectId: "linkedin-clone-5b513",
  storageBucket: "linkedin-clone-5b513.appspot.com",
  messagingSenderId: "309518220928",
  appId: "1:309518220928:web:fac152ea28513ca9727065",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
