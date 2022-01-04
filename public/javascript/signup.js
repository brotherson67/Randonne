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
<<<<<<< HEAD
        // location.redirect("/profile");
        console.log('success');
<<<<<<< HEAD
        document.location.replace('/profile')
=======
        document.location.replace('./map')
>>>>>>> parent of 86ac6c5 (pushing to dev)
=======

        document.location.replace("./findFriends");
        console.log('success');
        // document.location.replace('./map'
        // location.redirect("/profile/.this");
        console.log('success');
        // document.location.replace('/profile')

>>>>>>> 92620659f0baf600b388bf77a2ef0c035e0ea694
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
