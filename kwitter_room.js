
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA789vAyA2O8RaCrgdaEkzZzxNb6wU0gGc",
      authDomain: "classtest-6c579.firebaseapp.com",
      projectId: "classtest-6c579",
      storageBucket: "classtest-6c579.appspot.com",
      messagingSenderId: "849701866820",
      appId: "1:849701866820:web:dd768be6584cb6bf089b11"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
