document.getElementById("submit-but").addEventListener("click", validLogin);

// check pass 8 char A a 1 
// check user name 2 chars 
// use local storage tp save data 
// if user coneccted show lock data if not go to login 

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("uesrConneted");

  if (username) {
      console.log("Welcome back, " + username);
      // show secord data 
  } else {
      console.log("No username found. Please log in.");
      // Redirect to login page or show login form
  }
});

function validLogin() {
  const userName = document.getElementById("user-name").value;  
  const password = document.getElementById("password").value;  



  window.localStorage.setItem("uesrConneted", userName + password);

}