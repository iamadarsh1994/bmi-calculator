
function calculateBMI(height, weight) {
    return weight / (height * height);
  }

document.getElementById("calcBtn").addEventListener("click", function () {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let BMI = calculateBMI(height, weight);
  document.getElementById("result").innerText = "Your BMI is: " + BMI;
});

