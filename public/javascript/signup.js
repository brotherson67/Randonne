async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // .then((response) => {console.log(response)})
      console.log(response,"POST");
       // check the response status
      if (response.ok) {

        document.location.replace("/all-profile");
        console.log('success');
        // document.location.replace('./map'
        // location.redirect("/profile/.this");
        console.log('success');
        // document.location.replace('/profile')

      } else {
        alert(response.statusText);
      }
    }
  

  }
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
