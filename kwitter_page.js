var firebaseConfig = {
      apiKey: "AIzaSyBwD2C2nxIJbLtl_8ld_-rhsRFHKnM1lBc",
      authDomain: "kwitter-8588a.firebaseapp.com",
      databaseURL: "https://kwitter-8588a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8588a",
      storageBucket: "kwitter-8588a.appspot.com",
      messagingSenderId: "628469195166",
      appId: "1:628469195166:web:b9daedbf5b365c878b368f"
    };

    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}