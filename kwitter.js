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
  


  

  function addUser()
  {  
      hero = document.getElementById("user_name").value 
      
      localStorage.setItem("user_name", hero)
      firebase.database().ref("/").child(hero).update({
          purpose : "adding user" 
          
          
      });
    
      document.getElementById("main").innerHTML = "<button onclick='Go()'>Next</button>" 
      
  }
  function Go()
  {
      window.location = "kwitter_room.html"
  }
  
      
      
      
  