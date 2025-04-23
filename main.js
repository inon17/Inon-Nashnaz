

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
let lastScrollTop = 0;
const header = document.querySelector(".op");
const scrollThreshold = 50; // הכותרת תיעלם רק אחרי 50 פיקסלים
const debounceTime = 150; // מניעת ריצוד באנימציה
let isScrolling;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // ביטול גלילה אם המשתמש מפסיק לגלול לכמה מילי-שניות
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    if (scrollTop < lastScrollTop) {
      header.classList.remove("hidden");
    }
  }, debounceTime);

  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    header.classList.add("hidden");
  } else if (scrollTop < lastScrollTop) {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});
// ***************************************************************
function resetFields() {
  let initialInput = document.getElementById("initial");
  let yearsInput = document.getElementById("years");
  let monthlyInput = document.getElementById("monthly");
  
  setTimeout(() => {
    initialInput.value = "";
    yearsInput.value = "";
    monthlyInput.value = "";
  }, 40000); // אחרי 10 שניות
}

function calculateInvestment() {
  let initialInput = document.getElementById("initial");
  let yearsInput = document.getElementById("years");
  let monthlyInput = document.getElementById("monthly");
  let resultElement = document.getElementById("result");
  
  let initial = parseFloat(initialInput.value) || 0;
  let years = parseInt(yearsInput.value) || 0;
  let monthly = parseFloat(monthlyInput.value) || 0;
  let rate = 0.10; // תשואה שנתית ממוצעת של 10%
  let months = years * 12;
  let total = initial;
  
  for (let i = 0; i < months; i++) {
      total += monthly;
      total *= (1 + rate / 12);
  }
  
  resultElement.innerText = total.toFixed(2);

  // נקרא לפונקציה resetFields שמוחקת את השדות אחרי 10 שניות
  resetFields();
}
// function register(event) {
//   event.preventDefault();
//   const username = document.getElementById('register-username').value;
//   const password = document.getElementById('register-password').value;

//   // אם שם המשתמש קיים כבר ב-localStorage
//   if (localStorage.getItem(username)) {
//     alert('שם משתמש זה כבר קיים.');
//   } else {
//     // שומר את שם המשתמש והסיסמה ב-localStorage
//     localStorage.setItem(username, password);
//     alert('נרשמת בהצלחה! כעת תוכל להתחבר.');
//     window.location.href = 'login.html'; // הפנייה לדף ההתחברות
//   }
// }
// function login(event) {
//   event.preventDefault();
//   const username = document.getElementById('login-username').value;
//   const password = document.getElementById('login-password').value;

//   const storedPassword = localStorage.getItem(username);
  
//   if (storedPassword === password) {
//     sessionStorage.setItem('loggedInUser', username); // שומר את שם המשתמש ב-sessionStorage
//     alert('התחברת בהצלחה!');
//     window.location.href = 'index.html'; // הפנייה לדף הבית אחרי ההתחברות
//   } else {
//     alert('שם משתמש או סיסמה לא נכונים.');
//   }
// }
// function logout() {
//   sessionStorage.removeItem('loggedInUser'); // מסיר את שם המשתמש מ-sessionStorage
//   alert('התנתקת בהצלחה!');
//   window.location.href = 'index.html'; // הפנייה לדף הבית אחרי ההתנתקות
// }
// function checkLogin(page) {
//   const loggedInUser = sessionStorage.getItem('loggedInUser');
//   if (!loggedInUser) {
//     alert('עליך להירשם או להתחבר כדי לגשת לדף זה.');
//     window.location.href = 'login.html'; // הפנייה לדף התחברות אם לא מחובר
//   } else {
//     window.location.href = page; // הפנייה לדף המבוקש אם המשתמש מחובר
//   }
// }
function displayUsername() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    document.getElementById('user-display').innerText = `${loggedInUser}`;
    // הצגת כפתור ההתנתקות
    document.getElementById('logout-btn').style.display = 'block'; 
    document.getElementById('login-btn').style.display = 'none'; 
    document.getElementById('register-btn').style.display = 'none'; 
  } else {
    // אם אין משתמש מחובר, מציג את כפתורי ההתחברות והרשמה
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('register-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none'; 
  }
}
window.onload = displayUsername; // מפעיל את הפונקציה ברגע שהדף נטען




function register(event) {
  event.preventDefault(); // למנוע שליחה רגילה של הטופס

  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const age = parseInt(document.getElementById("register-age").value);
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  // איפוס הודעת שגיאה
  errorMessage.textContent = "";
  errorMessage.style.color = "red";

  // בדיקות
  if (!username || !email || !password || !confirmPassword || isNaN(age)) {
    errorMessage.textContent = "אנא מלא את כל השדות";
    return;
  }

  // אימייל תקין
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "האימייל אינו תקין";
    return;
  }

  // גיל בטווח
  if (age < 16 || age > 120) {
    errorMessage.textContent = "הגיל חייב להיות בין 18 ל־120";
    return;
  }

  // סיסמה באורך מספיק
  if (password.length < 6) {
    errorMessage.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
    return;
  }

  // סיסמה תואמת
  if (password !== confirmPassword) {
    errorMessage.textContent = "הסיסמאות אינן תואמות";
    return;
  }

  // אם הכל תקין – הצג הצלחה והעבר לדף התחברות
  errorMessage.style.color = "green";
  errorMessage.textContent = "ההרשמה הצליחה! מועבר לטופס התחברות...";

  // מעבר אוטומטי אחרי 1.1 שניות
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1100);
}
