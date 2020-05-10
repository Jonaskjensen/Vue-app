import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyCIk4Yp9WG7PO-5ew0mNZxDcw-wIX6QrfA',
    authDomain: 'projekt-5fd7c.firebaseapp.com',
    databaseURL: 'https://projekt-5fd7c.firebaseio.com',
    projectId: 'projekt-5fd7c',
    storageBucket: 'projekt-5fd7c.appspot.com',
    messagingSenderId: '349820364792',
    appId: '1:349820364792:web:f8e5da581e61a2ba23580d',
    measurementId: 'G-J6VPZDN8FN'
  })
  .firestore()

export const postRef = db.collection('posts')
