document.addEventListener('DOMContentLoaded', function () {
    var bmi = localStorage.getItem('bmi');
    var bmiStatus = localStorage.getItem('bmiStatus');

    document.getElementById('result').textContent =  bmi + " (" + bmiStatus + ")";
    var body = document.getElementById('body');
    var bmiImage = document.getElementById('bmiImage');

    switch(bmiStatus) {
        case "Underweight":
            bmiImage.src = "underweight.png"; // replace with your image path
            body.style.backgroundColor = "#38B6FF"; // replace with your color
            break;
        case "Normal weight":
            bmiImage.src = "normal.png"; // replace with your image path
            body.style.backgroundColor = "#00BF63"; // replace with your color
            break;
        case "Overweight":
            bmiImage.src = "overweight.png"; // replace with your image path
            body.style.backgroundColor = "#FAC47E"; // replace with your color
            break;
        case "Obesity":
            bmiImage.src = "obesity.png"; // replace with your image path
            body.style.backgroundColor = "#FF5757"; // replace with your color
            break;
    }
});