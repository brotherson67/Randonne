

//this is not working 
async function submit() {
    const response = await fetch ('/api/user/submit', {
        method: 'post', 
        headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#details-button').addEventListener('click', submit);



