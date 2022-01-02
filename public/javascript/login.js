
async function loginFormHandler(event) {
  event.preventDefault();
  
  // const username = document.querySelector('#username-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          // username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
        // console.log('logged in');
        // alert("log in success")
      } else {
        alert(response.statusText);
        // console.log("login failed")
      }
    }
    
  }
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);