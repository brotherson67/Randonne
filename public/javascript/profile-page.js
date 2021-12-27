const { default: ModelManager } = require("sequelize/dist/lib/model-manager");

var q1 = document.getElementById('#question1');
var q2 = document.getElementById('#question2');
var q3 = document.getElementById('#question3');
var q4 = document.getElementById('#question4');
var q5 = document.getElementById('#question5');



document.getElementById("#profile-submit").addEventListener('click', submitButton);

function submitButton (event) {
    event.preventDefault();

//validate profile name and photo arent empty 
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

function openModal() {
    modal.style.display('block');
}

btn.addEventListener('click', openModal);


function closeModal() {
    modal.style.display('none');
}

close.addEventListener('click', closeModal);


//close on outside click
document.addEventListener('click', outsideModal);
function outsideModal(event) {
  
    if (event.target.closest(window)){
        return;    
    }
    else if (!event.target.closest(".modal")) {
       modal.style.display = 'none'
    }
}





