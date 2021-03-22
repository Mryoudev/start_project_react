  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD09LEd2t845Cp2jXDO0PMRzWRfAdAgwvI",
    authDomain: "lms-project-c3966.firebaseapp.com",
    databaseURL: "https://lms-project-c3966-default-rtdb.firebaseio.com",
    projectId: "lms-project-c3966",
    storageBucket: "lms-project-c3966.appspot.com",
    messagingSenderId: "1061130114462",
    appId: "1:1061130114462:web:bb951e9f475294cdad328f"
  };

  const app=firebase.initializeApp(firebaseConfig);
  // exporter notre base de donnees 
  export default app;
  // export the auth app
 export const auth = app.auth();
 