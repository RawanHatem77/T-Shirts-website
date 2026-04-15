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

/* =========================
   APPLY LANGUAGE
========================= */
function applyLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key");

        if (!translations[lang] || !translations[lang][key]) return;

        if (el.tagName === "INPUT") {
            el.placeholder = translations[lang][key];
        } else {
            el.innerText = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}

/* =========================
   SET LANGUAGE
========================= */
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
}

/* =========================
   INIT (FIXED FOR GITHUB PAGES)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang");
    const lang = savedLang || "ar";

    setLanguage(lang);
});
