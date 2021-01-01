import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAecOJvBT6rMqamtGdPm6oFKT77G9tYe88',
  authDomain: 'to-doer-f9f7b.firebaseapp.com',
  projectId: 'to-doer-f9f7b',
  storageBucket: 'to-doer-f9f7b.appspot.com',
  messagingSenderId: '1096433287860',
  appId: '1:1096433287860:web:7961d3bc87c9601049cde1',
  measurementId: 'G-V3Q1F5WL5T',
});

const db = firebaseApp.firestore();

export default db;
