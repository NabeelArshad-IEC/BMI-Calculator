document.addEventListener('DOMContentLoaded', function () {
    var bmi = localStorage.getItem('bmi');
    var bmiStatus = localStorage.getItem('bmiStatus');

    document.getElementById('result').textContent =  bmi + " (" + bmiStatus + ")";
    var body = document.getElementById('body');
    var bmiImage = document.getElementById('bmiImage');

    switch(bmiStatus) {
        case "Underweight":
            bmiImage.src = "underweight.png"; 
            body.style.backgroundColor = "#38B6FF"; 
            break;
        case "Normal weight":
            bmiImage.src = "normal.png"; 
            body.style.backgroundColor = "#00BF63";
            break;
        case "Overweight":
            bmiImage.src = "overweight.png"; 
            body.style.backgroundColor = "#FAC47E"; 
            break;
        case "Obesity":
            bmiImage.src = "obesity.png"; 
            body.style.backgroundColor = "#FF5757"; 
            break;
    }
});