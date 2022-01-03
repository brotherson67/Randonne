
var q1 = document.getElementById('question1');
var q2 = document.getElementById('question2');
var q3 = document.getElementById('question3');
var q4 = document.getElementById('question4');
var q5 = document.getElementById('question5');

async function submitButton(event) {
    // event.preventDefault();

    //validate profile name and photo aren't empty 
    var name = document.getElementById('name');
    var image = document.getElementById('photo');
    var valid = true;
    console.log(name);
    if (name.value === "" || image.value === "") {
        valid = false;
    } else if (q1.value === "" || q2.value === "" || q3.value === "" || q4.value === "" || q5.value === "") {
        valid = false;
    } 
    if(valid === true ) {
        var newProfile = {
            name: name.value.trim(),
            photo: image.value.trim(),
            score: 
                parseInt(q1.value) +
                parseInt(q2.value) +
                parseInt(q3.value) +
                parseInt(q4.value),
            location: q5.value.trim()
        };
        console.log(newProfile);
        console.log(newProfile.score);
        //use a put route to update the score column of the currently logged in user 
    }
   
};

var submitBtn = document.getElementById("profile-submit");
submitBtn.addEventListener("click", submitButton);





