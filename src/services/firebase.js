import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAMj5lxkzc_t2s10iV_Pb-Q9ddsfPuIj_o',
  authDomain: 'reactzzaria-d2615.firebaseapp.com',
  databaseURL: 'https://reactzzaria-d2615.firebaseio.com',
  projectId: 'reactzzaria-d2615',
  storageBucket: '',
  messagingSenderId: '727544093796',
  appId: '1:727544093796:web:d93fe56285c5c1b6'
}

firebase.initializeApp(firebaseConfig)

export default firebase
