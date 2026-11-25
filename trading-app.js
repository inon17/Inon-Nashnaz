// ------------------------------------------------ גלילה - הסתרת כותרת ------------------------------------------------------
let lastScrollTop = 0;   // שומר את מיקום הגלילה הקודם
const header = document.querySelector(".Header-Background");

const scrollThreshold = 50; // הכותרת תיעלם רק אחרי 50 פיקסלים
const debounceTime = 150; // מניעת ריצוד באנימציה
let isScrolling;

window.addEventListener("scroll", () => {     //כל פעם שהמשתמש גולל – הפונקציה תרוץ.
if (!header) return; // page has no hiding header
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
