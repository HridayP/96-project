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
function addUser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
