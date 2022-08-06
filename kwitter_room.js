


var firebaseConfig = {
    apiKey: "AIzaSyCJoyliF5s74fVJb6Vfvg1fN-niK-bdIbI",
    authDomain: "chatapp-fe8b2.firebaseapp.com",
    databaseURL: "https://chatapp-fe8b2-default-rtdb.firebaseio.com",
    projectId: "chatapp-fe8b2",
    storageBucket: "chatapp-fe8b2.appspot.com",
    messagingSenderId: "29061618491",
    appId: "1:29061618491:web:8f40bbceb89ae13834b51e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;

    Room_names = childKey;
    console.log("Room Name - " + Room_names)
    row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row;



   

}); }); }
 getData();   
 function addRoom()
 {
    
     room_name = document.getElementById("room_name").value
     firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"

     });
     localStorage.setItem("room_name", room_name);
     


 }

 function redirectToRoomName(name)
 {
    console.log(name);
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
 }


function logout()
{
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"

}


