var correctPassword = ""
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
for (let i = 0; i < 10; i++) {
    correctPassword += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(correctPassword)

function mail(){
    var param = {
        message: correctPassword
    };
    emailjs.send("service_r5gh8ul","template_pvgheo9",param).then(function(response){})
    alert("Request Sent")
}

function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    if (enteredPassword == correctPassword) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("pdf-container").style.display = "block";
    } else {
        alert("Incorrect password. Try again.");
    }
}