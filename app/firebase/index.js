import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLYWPZhMt-AYPEhVx6P3CJUbdI4VlHk5g",
    authDomain: "brian-todo-app.firebaseapp.com",
    databaseURL: "https://brian-todo-app.firebaseio.com",
    projectId: "brian-todo-app",
    storageBucket: "brian-todo-app.appspot.com",
    messagingSenderId: "848844543266"
  };
  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;