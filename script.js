document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Predefined valid credentials
  const validEmail = "user@example.com";
  const validPassword = "password123";

  // Check credentials
  if (email === validEmail && password === validPassword) {
    alert("Login successful!");
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert("Invalid email or password!");
  }
});
