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
        location.redirect("/profile/.this");
        console.log('success');
<<<<<<< HEAD
        // document.location.replace('./map')
=======
        document.location.replace('/profile')
>>>>>>> 74f7987850f3d93b61b073239511865601ec1ff7
      } else {
        alert(response.statusText);
      }
    }
  

  }
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
