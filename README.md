<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>inon</title>
<style>
body{
  background-color: rgb(209, 171, 215);
}
h1{
  color: darkviolet;
  text-align: center;
  line-height: 30px; /* ממרכז את הטקסט אנכית */
  
}
#lept {
  background-color: aquamarine;
  color: black;
  margin: 20px auto;
  padding: 20px 40px;
  width: fit-content;
  text-align: center;
  border-radius: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(0, 0, 0, 0.3);
}
.G1{
  background-color: rgb(156, 202, 193);
  margin: 0;
  padding: 11px;

  border-radius: 4px;
  
  color: black;
}
#G2{
  
  color: darkcyan;
  font-family: 'Arial', sans-serif; 
  line-height: 1.6;
  text-align: center;
  padding: 40px 20px; /* מרווח פנימי של 40px למעלה ולמטה ו-20px בצדדים */
  background-color: brown;
  margin: 0;
  padding: 15px;

}
#G3{
  background-color: rgb(173, 125, 186);
  border-radius: 10px;
  text-align: center;
  grid-template-columns: auto;
  justify-content: center;
  justify-items: center;
  display: flex;
  align-items: center;
  gap: 30px; /* רווח בין הריבועים */
  flex-wrap: wrap; 
  margin-top: 40px; /*רווח מךמעלה*/
  height: 110px; 
}
#small-box {
    width: 120px;
    height: 80px;
    background-color: rgb(192, 119, 221);
    transition-property: width, height, border-radius, background-color;
    transition-delay: 100ms;
    transition-duration: 700ms;
    border-radius: 5px;
    margin-top: 1px;
    
    display: flex; /* הופך את הקופסה למיכל Flexbox */
    justify-content: center; /* מרכז את הטקסט אופקית */
    align-items: center; /* מרכז את הטקסט אנכית */
    font-size: 21px; /* גודל הטקסט */
    color: white; /* הצבע של הטקסט */
}
#small-box:hover{
  width: 250px;
  height: 100px;
  border-radius: 10%;
  background-color:rgb(65, 5, 64) ;
}
a{ text-decoration: none;}
 
        /* תפריט הצד - מוסתר מחוץ למסך כברירת מחדל */
        .sidebar {
          position: fixed;
          top: 0;
          right: -200px;
          width: 200px;
          height: 100vh;
          background-color: #1e1b1b;
          padding-top: 20px;
          color: white;
          transition: left 11.1s ease-in-out;
          opacity: 0.6; /* מאוד שקוף לפני שנפתח */
      }

      /* ידית לפתיחת התפריט */
      .sidebar-handle {
          position: fixed;
          top: 50%;
          right: 0;
          width: 24px;
          height: 80px;
          background-color: rgba(34, 34, 34, 0.8); /* חצי שקוף */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: right 0.3s;
          border-radius: 15%;
      }

      /* פתיחת התפריט כאשר העכבר מגיע לידית */
.sidebar-handle:hover ~ .sidebar,
      .sidebar:hover {
          right: 0;
          transition: right 0.8s ease-in-out, opacity 1s ease-in-out; /* האטה נוספת בעת פתיחה */

      }
.sidebar:not(:hover) {
    transition: right 1s ease-in-out, opacity 1s ease-in-out; /* האטה גם בסגירה */
}

.sidebar ul {
          list-style-type: none;
          padding: 0;
      }

.sidebar ul li {
          padding: 15px;
          text-align: center;
      }

.sidebar ul li a {
  color: white;
  text-decoration: none;
  display: block;
  font-size: 18px;
  transition: 0.3s;
}

.sidebar ul li a:hover {
  background-color: #2d2a2a3f;
}

.content {
  margin-right: 20px;
  padding: 20px;
  text-align: center;
  font-size: 20px;

}

section {
  height: 100vh;
  padding: 20px;
  border-bottom: 2px solid #ccc;
}
.UI{
  color: rebeccapurple;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 42px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}      
  </style>
</head>
<body>
</div>
<P id="lept">הקורס המזורז של האלופים</P>
 <div id="G3">
   <a href="https://www.google.com" class="link"><div id="small-box">לגוגל <br>תלחץ עלי</div> </a>
   <a href="https://www.youtube.com" class="link"><div id="small-box">ליוטיוב<br> לחץ עלי</div></a>
   <a href="https://www.youtube.com/@Micha.Stocks" class="link"><div id="small-box">מיכה סטוקס</div> </a>
   <a href="https://www.google.com/search?q=TSLA&rlz=1C1VDKB_iwIL1073IL1073&sourceid=chrome&ie=UTF-8" class="link"><div id="small-box">טסלה</div></a>
 </div>
 <hr><h1>inon</h1>
  <div class="sidebar-handle">☰</div>
  <nav class="sidebar">
      <ul>

      
        <li><a href="#TA" onclick="scrollToSection(event, 'TA')">ניתוח טכני</a></li>
        <li><a href="#Lond" onclick="scrollToSection(event, 'Lond')">השקעות טווח ארוך</a></li>
        <li><a href="#Short" onclick="scrollToSection(event, 'Short')">השקעות טווח קצר</a></li>
        <li><a href="#StopLoss" onclick="scrollToSection(event, 'StopLoss')">סטופ לוס</a></li>
        <li><a href="#Average" onclick="scrollToSection(event, 'Average')">ממוצע</a></li>
        <li><a href="#CaD" onclick="scrollToSection(event, 'CaD')">קאפל הנדל</a></li>
        <li><a href="#Breakout" onclick="scrollToSection(event, 'Breakout')">פריצה</a></li>
        <li><a href="#Div" onclick="scrollToSection(event, 'Div')">דיבדנדים</a></li>
      </ul>
 
  </nav>

  <div class="content">
      <section id="TA">
          <h2 class="UI">ניתוח טכני</h2>
          <p>שיטה לחיזוי תנועות מחירים במניות על בסיס גרפים, דפוסים ואינדיקטורים טכניים – בלי להתחשב בנתונים פיננסיים של החברה.
          </p>
      </section>

      <section id="Lond">
          <h2 class="UI">השקעות לטווח ארוך</h2>
          <p>רכישת מניות או נכסים פיננסיים מתוך מטרה להחזיק בהם שנים, במטרה ליהנות מעליית ערכם ודיבידנדים.
          </p>
      </section>

      <section id="Short">
          <h2 class="UI">השקעות טווח קצר</h2>
          <p>קנייה ומכירה של מניות בפרקי זמן קצרים (ימים עד חודשים) כדי לנצל תנודות מחירים ולהשיג רווח מהיר.
          </p>
      </section>

      <section id="StopLoss">
        <h2 class="UI">סטופ לוס</h2>
        <p>פקודה לסגירת פוזיציה באופן אוטומטי כאשר המניה מגיעה למחיר מסוים, במטרה לצמצם הפסדים.
        </p>
      </section>
      <section id="Average">
        <h2 class="UI">ממוצע</h2>
        <p>ממוצע נע 20 – מחשב את ממוצע המחירים של 20 הימים האחרונים, מתאים לזיהוי מגמות בטווח קצר.
          ממוצע נע 150 – מחשב את ממוצע המחירים של 150 הימים האחרונים, מסייע בזיהוי מגמות ארוכות טווח ובאישור כיוון השוק.
          </p>
      </section>
      <section id="CaD">
        <h2 class="UI">הנדל קאפל </h2>
        <p>Cup and Handle – דפוס ניתוח טכני שמסמן המשך מגמה חיובית. נראה כמו כוס עם ידית בגרף, ומעיד על שלב תיקון לפני פריצה כלפי מעלה.
        </p>
      </section>
      <section id="Breakout">
        <h2 class="UI">פריצה</h2>
        <p>Breakout – מצב שבו מחיר המניה חוצה רמת התנגדות או תמיכה משמעותית, מה שמעיד לרוב על תחילת מגמה חדשה.
        </p>
      </section>
      <section id="Div">
        <h2 class="UI">דיבדנדים</h2>
        <p>Dividends – תשלומים שחברה מחלקת למשקיעים מתוך רווחיה, לרוב בצורה רבעונית, כהכנסה פסיבית לבעלי המניות.
        </p>
  <h1>inr9ruburbvubvuuv</h1>
  
    </div>
  <script>
    function scrollToSection(event, sectionId) {
        event.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
</script>
</body>
</html>
