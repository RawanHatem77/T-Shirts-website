async function updateModel() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("برجاء إدخال الطول والوزن");
        return;
    }

    try {
       const response = await fetch(`http://smartsizeecommerce.runasp.net/api/SizeCalculator/calculate?height=${height}&weight=${weight}`);

        if (response.ok) {
            const data = await response.json();
            
            document.getElementById("sizeResult").innerText = data.sizeName;
            const avatar = document.getElementById("avatar");
            avatar.src = data.modelImageUrl;

            if (data.sizeName === "2XL") {
                avatar.style.transform = "scale(1.15)"; 
                avatar.style.transition = "0.5s";       
            } else if (data.sizeName === "XL") {
                avatar.style.transform = "scale(1.08)"; 
                avatar.style.transition = "0.5s";
            } else if (data.sizeName === "S") {
                avatar.style.transform = "scale(0.85)"; 
                avatar.style.transition = "0.5s";
            } else {
                avatar.style.transform = "scale(1)";  
                avatar.style.transition = "0.5s";
            }
        } 
        else if (response.status === 404) {
        document.getElementById("sizeResult").innerText = "Out of Range";
        
        const avatar = document.getElementById("avatar");
        avatar.src = "assets/model.png"; 
        avatar.style.transform = "scale(1)";

        alert("عذراً، المقاس المطلوب Out of Range (خارج النطاق المدعوم حالياً).");
    }
        else {
            alert("حدث خطأ غير متوقع في السيرفر.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("تأكدي من تشغيل الـ API في Visual Studio أولاً.");
    }
}