document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('users.json');
    const users = await response.json();

    const user = users.find(user => user.email === email);

    if (user) {
      document.getElementById('message').textContent = 'Login successful!';
      document.getElementById('message').style.color = 'green';
      window.location.href = 'https://mob.easysport.bet';
    } else {
      document.getElementById('message').textContent = 'Invalid email or password.';
      document.getElementById('message').style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('message').textContent = 'Error verifying login.';
    document.getElementById('message').style.color = 'red';
  }
});
