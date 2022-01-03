const profilePage = async function(event) {
    event.preventDefault();
    const usernameEl = document.getElementById('#username');
    // const emailEl = document.getElementById('#email');
    const locationEl = document.getElementById('#location');
    const phoneEl = document.getElementById('#phone');
    const experienceEl = document.getElementById('#experience');
    const gearEL = document.getElementById('#gear');


    const response = await fetch('api/profile', {
        method: 'post',
        body: JSON.stringify({
            username: usernameEl.value,
            location: locationEl.value,
            phone: phoneEl.value,
            experience: experienceEl.value,
            gear: gearEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
        // console.log('logged in');
        // alert("log in success")
      } else {
        alert(response.statusText);
        // console.log("login failed")
      }
   
};