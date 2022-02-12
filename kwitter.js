var firebaseConfig = {
    apiKey: "AIzaSyB-VRK9Dq0TLymFNhumx2d_TMHFZ9fSBV0",
    authDomain: "kwitter-6298e.firebaseapp.com",
    databaseURL: "https://kwitter-6298e-default-rtdb.firebaseio.com",
    projectId: "kwitter-6298e",
    storageBucket: "kwitter-6298e.appspot.com",
    messagingSenderId: "295573075957",
    appId: "1:295573075957:web:d9355cc886222e5df312bc"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location="kwitter_room.html";
}