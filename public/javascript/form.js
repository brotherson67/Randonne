var q1 = document.getElementById('#question1');
var q2 = document.getElementById('#question2');
var q3 = document.getElementById('#question3');
var q4 = document.getElementById('#question4');
var q5 = document.getElementById('#question5');

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

var submitBtn = document.getElementById("profile-submit")
submitBtn.addEventListener("click", submitButton);




