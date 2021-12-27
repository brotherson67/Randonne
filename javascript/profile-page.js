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
            score: [
                q1.val(),
                q2.val(),
                q3.val(),
                q4.val(),
                q5.val().trim()
            ]
        };

    var url = window.location.origin;

    //receive responses after post request 
    //ask how to fo this 
        http.open("POST", url + '/api/profile', newProfile);
        //ask what to do here
        xhttp.setRequestHeader("content type", "");
        xhttp.send("profile");
    
        
    }

}




