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
    // const response2 = await fetch('api/user', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: usernameEl.value,
    //         email: emailEl.value
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    // });
   
};