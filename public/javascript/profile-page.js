const profilePage = async function(event) {
    event.preventDefault();
    const usernameEl = document.getElementById('#username');
    const locationEl = document.getElementById('#location');
    const phoneEl = document.getElementById('#phone');
    const experienceEl = document.getElementById('#experience');
    const gearEL = document.getElementById('#gear');


    const response = await fetch('api/profile', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            location: locationEl.value,
            phone: phoneEl.value,
            experience: experienceEl.value,
            gear: gearEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

   
};




var q1 = document.getElementById('#question1');
var q2 = document.getElementById('#question2');
var q3 = document.getElementById('#question3');
var q4 = document.getElementById('#question4');
var q5 = document.getElementById('#question5');



// var submitBtn = document.getElementById("#profile-submit")
// submitBtn.addEventListener('click', submitButton);

async function submitButton (event) {
    event.preventDefault();

//validate profile name and photo aren't empty 
    var name = document.getElementById('#name');
    var image = document.getElementById('#photo');
    var valid = true;
    if (name.val() === "" || image.val() === "") {
        valid = false;
    } else if (q1.val() === "" || q2.val() === "" || q3.val() === "" || q4.val() === "" || q5.val === "") {
        valid = false;
    } if(valid === true ) {
        var newProfile = {
            name: name.val().trim(),
            photo: image.val().trim(),
            score: 
                q1.val() +
                q2.val() +
                q3.val() +
                q4.val(),
            location: q5.val().trim()
        };

}};

//get variables for modal
var modal = document.getElementById('#question-modal');
var btn = document.getElementById('#modal-open');
var close = document.getElementById('#modal-close');

document.addEventListener("DOMContentLoaded", ()=> {

async function openModal() {
    modal.style.display = "block";
    console.dir(modal);
    btn.addEventListener('click', openModal);
    console.log('button click');

};

openModal();




async function closeModal() {
    modal.style.display('none');
    close.addEventListener('click', closeModal);
};

closeModal();
});


//close on outside click
// async function outsideModal(event) {
  
//     if (event.target.closest(window)){
//         return;    
//     }
//     else if (!event.target.closest(".modal")) {
//        modal.style.display = 'none'
//     }
//     document.addEventListener('click', outsideModal);
// }

// outsideModal();





