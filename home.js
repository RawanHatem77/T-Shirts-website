function updateModel() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Enter values");
        return;
    }

    let size = "Out of range";

    // S
    if (height >= 160 && height <= 165 && weight >= 55 && weight <= 60) {
        size = "S";
    }
    // M
    else if (height >= 160 && height <= 165 && weight > 60 && weight <= 65) {
        size = "M";
    }
    // L
    else if (height >= 166 && height <= 170 && weight >= 66 && weight <= 70) {
        size = "L";
    }
    // XL
    else if (height >= 171 && height <= 175 && weight >= 71 && weight <= 75) {
        size = "XL";
    }
    // 2XL
    else if (height >= 176 && height <= 180 && weight >= 76 && weight <= 80) {
        size = "2XL";
    }

    document.getElementById("sizeResult").innerText = size;

    let avatar = document.getElementById("avatar");

    // 🎯 scaling calculation (safe range)
    let scale = (height / 170 + weight / 70) / 2;

    // prevent weird values
    scale = Math.max(0.8, Math.min(scale, 1.3));

    avatar.style.transform = `scale(${scale})`;
    avatar.style.transition = "0.5s ease";
}
