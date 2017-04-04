import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    name: 'Brian',
    age: 40
  },
  todos: {
    '123': {
      text: 'File soe vids'
    }
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// })
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'Walk the dog'
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('snapshot', snapshot.val());
// });

// firebaseRef.update({ 'user/name': 'bob' });
// firebaseRef.update({ 'app/name': 'awesome app' });

// firebaseRef .set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Mike'
// })

// firebaseRef.update({
//   isRunning: false,
//   'app/name':'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// })

// firebaseRef.update({
//   'user/name': 'bob',
//   'app/name': 'another Todo app'
// })

// firebaseRef.child('app').update({
//   name: 'finally another todo app'
// });

// firebaseRef.child('user').update({
//   name: 'billy'
// })

// firebaseRef.remove();

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// firebaseRef.update({ isRunning: false });

// firebaseRef.off();
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.val());
// }, (err) => {
//   console.log('unable to fetch value', e);
// })