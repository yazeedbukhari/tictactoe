const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Authenticate the user with the email and password inputs
  login(email, password);
});

function login(email, password) {
  // Check if the email and password are valid
  if (email === "example@example.com" && password === "password") {
    // If valid, redirect to the dashboard page
    alert("Valid email and password.");
    window.location.href = "https://github.com/yazeedbukhari/tictactoe/blob/main/Dashboard/dashboard.html";
  } else {
    // If invalid, display an error message
    alert("Invalid email or password.");
  }
}
