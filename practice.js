
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAsi8aY9hdS-VWfrE27P7Ip0utgU3ms--Q",
    authDomain: "twitter-website-934ab.firebaseapp.com",
    databaseURL: "https://twitter-website-934ab-default-rtdb.firebaseio.com",
    projectId: "twitter-website-934ab",
    storageBucket: "twitter-website-934ab.appspot.com",
    messagingSenderId: "548877791520",
    appId: "1:548877791520:web:a35eca71f8409a66692745"
  };

 firebase.initializeApp(firebaseConfig);
 function addUser()
 {
     user_name=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     });
 }
