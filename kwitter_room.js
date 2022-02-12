
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
    
    username =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + username;


function addroom(){
      room_name=document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
  
      localStorage.setItem("room_name",room_name);
  
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name --"+Room_names);
    row= " <div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      
      });});}
      getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}

function send(){}