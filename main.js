
  
    var feetInput = document.getElementById("feet");
    var inchesInput = document.getElementById("inches");
    var weightInput = document.getElementById("weight");
    var resultParagraph = document.getElementById("result");
    var convertButton = document.getElementById("convertButton");
var form =  document.getElementById('bmiForm');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
    
        var feetInput = document.getElementById('feet');
        var inchesInput = document.getElementById('inches');
        var weightInput = document.getElementById('weight');
    
        var feet = feetInput.value;
        var inches = inchesInput.value;
        var weightKg = weightInput.value;
    
        var regexWeight = /^\d*\.?\d+$/;
        var regexHeight = /^(1[0-2]|[1-9])$/;
    
        if (!regexHeight.test(feet) || !regexWeight.test(inches) || !regexWeight.test(weightKg)) {
            alert("Invalid input. Please enter height in feet between 1 and 12, and positive numbers for inches and weight.");
            return;
        }
    
        feet = parseFloat(feet);
        inches = parseFloat(inches);
        weightKg = parseFloat(weightKg);
    
        var heightMeters = (feet * 0.3048) + (inches * 0.0254);
        var bmi = weightKg / ((heightMeters * heightMeters) );
        var bmiStatus = checkBMI(bmi);
    
        // Store the results in local storage
        localStorage.setItem('bmi', bmi.toFixed(2));
        localStorage.setItem('bmiStatus', bmiStatus);
    
        // Redirect to the results page
        window.location.href = 'show_results.html';
        feetInput.value = '';
        inchesInput.value = '';
        weightInput.value = '';
    });

function checkBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
    let bmiStatus = checkBMI(bmi);
    
    switch(bmiStatus) {
        case "Underweight":
           
            break;
        case "Normal weight":
           
            break;
        case "Overweight":
           
            break;
        case "Obesity":
          
            break;
    }
    
}


