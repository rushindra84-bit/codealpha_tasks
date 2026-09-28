// Task 2 - Button that changes color when clicked
function changeColor() {
  const colors = ["#f5b041", "#58d68d", "#5dade2", "#ec7063", "#af7ac5"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBtn").style.backgroundColor = randomColor;
}

// Task 2 - Greeting alert based on current time
function greetUser() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting + " Welcome to the Cognifyz Internship page.");
}

// Task 2 - Basic calculator that adds two numbers
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;
  const sum = num1 + num2;

  document.getElementById("result").textContent = "Result: " + sum;
}
