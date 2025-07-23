const changeColorBtn = document.querySelector("button");
const colorCode = document.querySelector("main p");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function generateRandomNumber() {
    return Math.floor(Math.random() * 16);
}

function generateHexColor() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        let randomNum = generateRandomNumber();
        hexColor += hex[randomNum];
    }

    return hexColor
}

function changeBackgroundColor() {
    let hexColor = generateHexColor();
    colorCode.innerHTML = hexColor
    document.body.style.backgroundColor = hexColor;
}

changeColorBtn.addEventListener("click", function(){
    changeBackgroundColor();
})