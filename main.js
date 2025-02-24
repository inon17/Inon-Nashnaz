

// check pass 8 char A a 1 
// check user name 2 chars 
// use local storage tp save data 
// if user coneccted show lock data if not go to login 
document.addEventListener("DOMContentLoaded", function () {
  let loginModal = document.getElementById("login-modal");
  let openLoginButton = document.getElementById("open-login-modal");
  let closeButton = document.querySelector(".close");
  let submitButton = document.getElementById("submit-but");

  // פתיחת המודל בלחיצה על "התחבר"
  openLoginButton.addEventListener("click", function () {
      loginModal.style.display = "flex";
  });

  // סגירת המודל בלחיצה על ה-X
  closeButton.addEventListener("click", function () {
      loginModal.style.display = "none";
  });

  // סגירת המודל בלחיצה מחוץ לחלון
  window.addEventListener("click", function (event) {
      if (event.target === loginModal) {
          loginModal.style.display = "none";
      }
  });

  // לוגיקת התחברות
  submitButton.addEventListener("click", function () {
      let username = document.getElementById("user-name").value;
      let password = document.getElementById("password").value;

      if (username === "" || password === "") {
          alert("אנא מלא את כל השדות");
          return;
      }

      console.log("משתמש:", username);
      console.log("סיסמה:", password);

      alert("התחברת בהצלחה!");
      loginModal.style.display = "none"; // סגירת המודל אחרי התחברות
  });
});
{/* <label for="fname">User name:</label><br>
<input type="text" id="user-name" name="fname" ><br>
<label for="lname">Password:</label><br>
<input type="text" id="password" name="lname"><br><br>
<button type="submit" id="submit-but">Login</button> */}