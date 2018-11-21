import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
var config = {
  apiKey: 'AIzaSyALN-U6BpN3bIzqnv0z_lACf94KbB93g1Q',
  authDomain: 'fitm-app.firebaseapp.com',
  databaseURL: 'https://fitm-app.firebaseio.com',
  projectId: 'fitm-app',
  storageBucket: 'fitm-app.appspot.com',
  messagingSenderId: '70705103923'
}
firebase.initializeApp(config)

var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export const db = firebase.database()
export const FIREBASE_AUTH = firebase.auth()
export const PROVIDER_AUTH = provider
