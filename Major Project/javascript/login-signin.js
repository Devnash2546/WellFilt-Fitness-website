// Function to handle sign-up
function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  // Check if user already exists
  if (localStorage.getItem(username)) {
    alert("User  already exists! Please log in.");
    return;
  }

  // Store user data in local storage
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  localStorage.setItem(username, JSON.stringify(userData));
  alert("Sign up successful! You can now log in.");
  // Optionally, redirect to login page
  window.location.href = "./login.html";
}

// Function to handle login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("pass").value;

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem(username));

  // Validate credentials
  if (userData && userData.password === password) {
    alert("Login successful!");
    // Redirect to home or dashboard page
    window.location.href = "./home.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Event listeners for sign-up and login
document
  .querySelector(".input-submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    signUp(); // Call signUp function
  });

// Assuming you have a login button in your login.html page
document
  .getElementById("login_button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    login(); // Call login function
  });
