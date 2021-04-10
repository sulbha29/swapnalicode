import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB7svL-5UHM7cTyC-gsZFiNL3IJhqoCv1Q",
  authDomain: "swapnaliquery.firebaseapp.com",
  projectId: "swapnaliquery",
  storageBucket: "swapnaliquery.appspot.com",
  messagingSenderId: "1085815658902",
  appId: "1:1085815658902:web:b29f922f1ab0ad4176e5b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
