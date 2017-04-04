import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCLC3cXDN3wS1q4ZiXfTclOvz8G8BXKT8I",
    authDomain: "magelungen-web-cb82a.firebaseapp.com",
    databaseURL: "https://magelungen-web-cb82a.firebaseio.com",
    storageBucket: "magelungen-web-cb82a.appspot.com",
    messagingSenderId: "759553285971"
}

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');
provider.addScope('https://www.googleapis.com/auth/classroom.profile.photos')
provider.addScope('https://www.googleapis.com/auth/classroom.profile.emails')
provider.addScope('https://www.googleapis.com/auth/classroom.courses.readonly')
provider.addScope('https://www.googleapis.com/auth/classroom.coursework.me.readonly')


export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!provider.currentUser || !!localStorage.getItem(storageKey);
}
