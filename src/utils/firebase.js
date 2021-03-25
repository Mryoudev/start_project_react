  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQ34xxxP_ogKxmK4tvsnYMgPPL5oZXInM",
  authDomain: "start-project-react.firebaseapp.com",
  databaseURL: "https://start-project-react-default-rtdb.firebaseio.com",
  projectId: "start-project-react",
  storageBucket: "start-project-react.appspot.com",
  messagingSenderId: "492168395625",
  appId: "1:492168395625:web:4e3966b94ca02ba23b9bf8",
  measurementId: "G-C36G2WQT97"
  };

  const app=firebase.initializeApp(firebaseConfig);
  // exporter notre base de donnees 
  export default app;
  // export the auth app
 export const auth = app.auth();
 