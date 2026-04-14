document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        const emailValue = document.getElementById("email").value;
        const fullNameValue = document.getElementById("fullname").value;
        const passwordValue = document.getElementById("password").value;

        if (!emailValue || !fullNameValue || !passwordValue) {
            alert("برجاء ملء كافة الحقول المطلوبة (الإيميل، الاسم، الباسورد)");
            return;
        }

        try {
            // ملاحظة: جربي إضافة s لـ https إذا دعمت الاستضافة ذلك
            const response = await fetch('http://smartsizeecommerce.runasp.net/api/Auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName: fullNameValue,
                    email: emailValue,
                    password: passwordValue
                })
            });

            if (response.ok) {
                alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
                window.location.href = "login.html"; 
            } else {
                const errorData = await response.json();
                if (errorData.errors) {
                    let errorMessages = Object.values(errorData.errors).flat().join("\n");
                    alert("فشل التسجيل:\n" + errorMessages);
                } else {
                    alert(errorData.message || "حدث خطأ أثناء التسجيل.");
                }
            }
        } catch (error) {
            console.error("Error details:", error);
            // تغيير الرسالة هنا لأن الـ API أصبحت مرفوعة الآن
            alert("عذراً، لا يمكن الاتصال بالسيرفر حالياً. تأكدي من حالة الموقع أو جربي لاحقاً.");
        }
    });
});
