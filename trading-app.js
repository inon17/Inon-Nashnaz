

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



// ================================
// חישוב השקעה
function calculateInvestment() {
  let initial = parseFloat(document.getElementById("initial").value) || 0;
  let years = parseInt(document.getElementById("years").value) || 0;
  let monthly = parseFloat(document.getElementById("monthly").value) || 0;
  let rate = 0.10;
  let months = years * 12;
  let total = initial;

  for (let i = 0; i < months; i++) {
    total += monthly;
    total *= (1 + rate / 12);
  }

  document.getElementById("result").innerText = total.toFixed(2);
}

// הרשמה
function register(event) {
  event.preventDefault();

  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const age = parseInt(document.getElementById("register-age").value);
  const password = document.getElementById("register-password").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";
  errorMessage.style.color = "red";

  if (!username || !email || !password || isNaN(age)) {
    errorMessage.textContent = "אנא מלא את כל השדות";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "האימייל אינו תקין";
    return;
  }

  if (age < 16 || age > 120) {
    errorMessage.textContent = "הגיל חייב להיות בין 16 ל־120";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
    return;
  }

  if (localStorage.getItem(username)) {
    errorMessage.textContent = "שם משתמש זה כבר קיים";
    return;
  }

  const userData = { email, age, password };
  localStorage.setItem(username, JSON.stringify(userData));

  errorMessage.style.color = "green";
  errorMessage.textContent = "ההרשמה הצליחה! מועבר לטופס התחברות...";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1100);
}

// התחברות
function login(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const storedData = localStorage.getItem(username);

  if (!storedData) {
    alert("שם המשתמש לא קיים");
    return;
  }

  const user = JSON.parse(storedData);

  if (user.password === password) {
    sessionStorage.setItem("loggedInUser", username);
    alert("התחברת בהצלחה!");
    window.location.href = "index.html";
  } else {
    alert("סיסמה שגויה");
  }
}

// התנתקות
function logout() {
  sessionStorage.removeItem("loggedInUser");
  alert("התנתקת בהצלחה!");
  window.location.href = "index.html";
}

// הצגת שם משתמש
function displayUsername() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  const display = document.getElementById("user-display");
  if (display && loggedInUser) {
    display.innerText = `שלום, ${loggedInUser}`;
  }
}

// בדיקה האם המשתמש מחובר לפני צפייה בקורסים
function checkLogin(destination) {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("עליך להתחבר כדי לצפות בקורסים");
    window.location.href = "login.html";
  } else {
    window.location.href = destination;
  }
}
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

window.onload = displayUsername;


