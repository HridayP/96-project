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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";



}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name- " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}