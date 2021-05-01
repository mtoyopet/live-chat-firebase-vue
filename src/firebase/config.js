import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwf6esEvHovBj2AIam843VXBRZ_cnuMNU",
  authDomain: "personal-projects-74cc9.firebaseapp.com",
  projectId: "personal-projects-74cc9",
  storageBucket: "personal-projects-74cc9.appspot.com",
  messagingSenderId: "48703749511",
  appId: "1:48703749511:web:31091a70fd45ffc0f8e722"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
