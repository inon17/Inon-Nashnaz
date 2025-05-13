document.addEventListener("DOMContentLoaded", function () {  //שהקוד ירוץ לפני הטעינה
  // ------------------ חלון התחברות ------------------

  let loginModal = document.getElementById("login-modal"); //החלון הקופץ עצמו
  let openLoginButton = document.getElementById("open-login-modal");  //כפתור שלוחצים עליו כדי לפתוח את החלון
  let closeButton = document.querySelector(".close");  //הכפתור של ה-X שסוגר את המודל
  let submitButton = document.getElementById("submit-but");  //כפתור "התחבר" שבתוך המודל
  // פתיחת המודל בלחיצה על "התחבר"
  openLoginButton.addEventListener("click", function () {
      loginModal.style.display = "flex";      //פותח את החלון הקופץ.
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
  submitButton.addEventListener("click", function () {   // ברגע שלוחצים עליו – הקוד שבפנים יתבצע.
      //פונקציה
      let username = document.getElementById("user-name").value;    //מוצא את שדה המשתמש
      let password = document.getElementById("password").value;   // אותו דבר עם בסיסמה

      if (username === "" || password === "") {
          alert("אנא מלא את כל השדות"); // אם לא מילית שגיאה
          return;
      }

      console.log("משתמש:", username); // שומר את הפרטים 
      console.log("סיסמה:", password);

      alert("התחברת בהצלחה!"); // מקפיץ הודעה
      loginModal.style.display = "none"; // סגירת המודל אחרי התחברות
  });
});
// ------------------------------------------------ גלילה - הסתרת כותרת ------------------------------------------------------
let lastScrollTop = 0;   // שומר את מיקום הגלילה הקודם
const header = document.querySelector(".Header-Background");
const scrollThreshold = 50; // הכותרת תיעלם רק אחרי 50 פיקסלים
const debounceTime = 150; // מניעת ריצוד באנימציה
let isScrolling;

window.addEventListener("scroll", () => {     //כל פעם שהמשתמש גולל – הפונקציה תרוץ.
let scrollTop = window.scrollY || document.documentElement.scrollTop; //מיקום הגלילה הנוכחי – כלומר, כמה פיקסלים גוללו מלמעלה.

// ביטול גלילה אם המשתמש מפסיק לגלול לכמה מילי-שניות
window.clearTimeout(isScrolling); //מבטל טיימר קודם – כדי שלא ירוץ שוב ושוב כל עוד ממשיכים לגלול.
isScrolling = setTimeout(() => {    //חכה 150 מילישניות
  if (scrollTop < lastScrollTop) {   //אם אחרי זמן זה הגלילה ירדה (כלומר המשתמש גלל למעלה):
    header.classList.remove("hidden");  //  מחזירים את הכותרת עם
  }
}, debounceTime);

if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) { // בדיקת כיוון הגלילה
  header.classList.add("hidden");
} else if (scrollTop < lastScrollTop) { // אם אנחנו גוללים למעלה אז תחזיר אותו
  header.classList.remove("hidden");
}
lastScrollTop = scrollTop; //  היא זוכרת איפה בדיוק היינו לפני רגע
});

// ------------------------------------ חישוב השקעה -------------------------------------------

function resetFields() {// פונקציה שמאפסת את שדות הקלט לאחר 40 שניות
  let initialInput = document.getElementById("initial");   // קלט השקעה ראשונית
  let yearsInput = document.getElementById("years");       // קלט מספר השנים
  let monthlyInput = document.getElementById("monthly");   // קלט הפקדה חודשית

  setTimeout(() => {
    initialInput.value = "";    // איפוס השקעה ראשונית
    yearsInput.value = "";      // איפוס מספר השנים
    monthlyInput.value = "";    // איפוס הפקדה חודשית
  }, 40000); // האיפוס יתבצע אחרי 40 שניות
}

// פונקציה לחישוב השקעה עם ריבית חודשית
function calculateInvestment() {
  let initial = parseFloat(document.getElementById("initial").value) || 0;   // השקעה ראשונית
  let years = parseInt(document.getElementById("years").value) || 0;         // מספר השנים
  let monthly = parseFloat(document.getElementById("monthly").value) || 0;   // הפקדה חודשית קבועה
  let rate = 0.10;                                                           // ריבית שנתית ממוצעת (10%)
  let months = years * 12;                                                   // המרה לשנים לחודשים
  let total = initial;                                                       // אתחול סכום ההשקעה הכולל

  for (let i = 0; i < months; i++) {      // לולאה שרצה על כל חודש
    total += monthly;                    // מוסיפים את ההפקדה החודשית
    total *= (1 + rate / 12);            // מחשבים ריבית חודשית על הסכום הכולל
  }

  document.getElementById("result").innerText = total.toFixed(2); // מציגים את הסכום הסופי עם 2 ספרות אחרי הנקודה

  resetFields(); // קוראים לפונקציית איפוס השדות אחרי הצגת התוצאה
}

//------------------------------------------- הרשמה -----------------------------------------------
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

// ------------------------------- התחברות -----------------------------
function login(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const storedData = localStorage.getItem(username); //כאן אתה שומר את פרטי המשתמש באחסון

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

// ----------------------- התנתקות --------------------------
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


