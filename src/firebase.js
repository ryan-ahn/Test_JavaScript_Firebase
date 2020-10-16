import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDBNHYKrTFGDQWhCpcXdBcBBhpd-F_KhY8',
  authDomain: 'twitter-firebase-b802e.firebaseapp.com',
  databaseURL: 'https://twitter-firebase-b802e.firebaseio.com',
  projectId: 'twitter-firebase-b802e',
  storageBucket: 'twitter-firebase-b802e.appspot.com',
  messagingSenderId: '990482581463',
  appId: '1:990482581463:web:ff240f120b5b84780dad92',
};

export default firebase.initializeApp(firebaseConfig);
