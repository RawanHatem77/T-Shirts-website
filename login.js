document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.querySelector(".login-btn");

    loginBtn.addEventListener("click", async (e) => {
       
        e.preventDefault(); 

        const emailValue = document.getElementById("email").value;
        const passwordValue = document.getElementById("password").value;

        if (!emailValue || !passwordValue) {
            alert("برجاء إدخال البريد الإلكتروني وكلمة المرور");
            return;
        }

        try {
            const response = await fetch('http://smartsizeecommerce.runasp.net/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("تم تسجيل الدخول بنجاح! أهلاً يا " + data.name);
                
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('userName', data.name);

                window.location.href = "home.html"; 
            } else {
                alert(data.message || "خطأ في بيانات الدخول");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("مشكلة في الاتصال بالـ Server. تأكدي إن المشروع شغال في Visual Studio");
        }
    });

});