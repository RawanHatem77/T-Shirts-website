async function updateModel() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("برجاء إدخال الطول والوزن");
        return;
    }

    try {
        const response = await fetch(
            `https://smartsizeecommerce.runasp.net/api/SizeCalculator/calculate?height=${height}&weight=${weight}`
        );

        const avatar = document.getElementById("avatar");

        if (response.ok) {
            const data = await response.json();

            document.getElementById("sizeResult").innerText = data.sizeName;

            avatar.src = data.modelImageUrl;

            let scale = 1;

            if (data.sizeName === "2XL") scale = 1.15;
            else if (data.sizeName === "XL") scale = 1.08;
            else if (data.sizeName === "S") scale = 0.85;

            avatar.style.transform = `scale(${scale})`;

        } else {
            document.getElementById("sizeResult").innerText = "Out of Range";

            avatar.src = "model.png";
            avatar.style.transform = "scale(1)";
        }

    } catch (error) {
        console.error(error);
        alert("Error connecting to server");
    }
}
