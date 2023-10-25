document.addEventListener('DOMContentLoaded', function () {
    var bmi = localStorage.getItem('bmi');
    var bmiStatus = localStorage.getItem('bmiStatus');

    document.getElementById('result').textContent =  bmi + " (" + bmiStatus + ")";
    var body = document.getElementById('body');
    var bmiImage = document.getElementById('bmiImage');

    switch(bmiStatus) {
        case "Underweight":
            bmiImage.src = "underweight.jpg"; // replace with your image path
            body.style.backgroundColor = "blue"; // replace with your color
            break;
        case "Normal weight":
            bmiImage.src = "normal.png"; // replace with your image path
            body.style.backgroundColor = "green"; // replace with your color
            break;
        case "Overweight":
            bmiImage.src = "overweight.jpg"; // replace with your image path
            body.style.backgroundColor = "yellow"; // replace with your color
            break;
        case "Obesity":
            bmiImage.src = "obesity.jpg"; // replace with your image path
            body.style.backgroundColor = "red"; // replace with your color
            break;
    }
});