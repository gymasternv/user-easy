const API_URL = 'https://esb-api.vercel.app/api/login';

document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      document.getElementById('message').textContent = result.message;
      document.getElementById('message').style.color = 'green';
      window.location.href = 'https://mob.easysport.bet';
    } else {
      document.getElementById('message').textContent = result.message;
      document.getElementById('message').style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('message').textContent = 'Error connecting to the server.';
    document.getElementById('message').style.color = 'red';
  }
});
