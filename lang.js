const translations = {
    en: {
      title: "Find Your Perfect T-Shirt Size With 3D Technology",
      desc: "Enter your height and weight and get instant size prediction.",
      login: "Login",
      signup: "Sign Up",
      guest: "Continue as Guest",
  
      loginTitle: "Login",
      signupTitle: "Create Account",
  
      viewerTitle: "Viewer Mode",
      viewerDesc: "You can explore but cannot calculate sizes.",

      back: "Back",

      pageTitle: "Find Size",
      hometitle: "Find Your Perfect Size",

      heightLabel: "Height (cm)",
      weightLabel: "Weight (kg)",
      calcBtn: "Calculate",

      yourSize: "Your Size:",

      email: "Email",
      phone: "Phone",
      username: "Username",
      password: "Password",

      already: "Already have account?",

      createAccount: "Create Account"
    },
  
    ar: {
      title: "اعثر على مقاس التيشيرت المثالي بتقنية ثلاثية الأبعاد",
      desc: "أدخل الطول والوزن واحصل على المقاس فوراً",
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      guest: "الدخول كضيف",
  
      loginTitle: "تسجيل الدخول",
      signupTitle: "إنشاء حساب",
  
      viewerTitle: "وضع المشاهدة",
      viewerDesc: "يمكنك التصفح فقط بدون حساب",

      back: "رجوع",

      pageTitle: "إيجاد المقاس",
      hometitle: "اعثر على مقاسك المثالي",

      heightLabel: "الطول (سم)",
      weightLabel: "الوزن (كجم)",
      calcBtn: "احسب",

      yourSize: "المقاس:",

      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      username: "اسم المستخدم",
      password: "كلمة المرور",

      already: "لديك حساب بالفعل؟",

      createAccount: "إنشاء حساب"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {

    document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key");

        if (el.tagName === "INPUT") {
            el.placeholder = translations[lang][key];
        } else {
            el.innerText = translations[lang][key];
        }
    });

    document.body.dir = (lang === "ar") ? "rtl" : "ltr";
}

document.addEventListener("DOMContentLoaded", () => {
    let lang = localStorage.getItem("lang") || "ar";
    applyLanguage(lang);
});

function toggleLanguage() {
    let currentLang = localStorage.getItem("lang") || "ar";
    let newLang = currentLang === "ar" ? "ar" : "en";

    setLanguage(newLang);
    updateLangButton(newLang);
}

function updateLangButton(lang) {
    let btn = document.getElementById("langBtn");
    if (!btn) return;

    btn.innerText = (lang === "ar") ? "AR" : "EN";
}
