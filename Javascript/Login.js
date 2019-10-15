// Nedenstående er Conditional execution
var attempt = 3; // Denne variabel tæller mulige login-forsøg

// Below function Executes on click of login button.
function validate(){
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = false;

    var unArray = ["David", "Soren", "Hassan", "Admin"];
    var pwArray = ["casu123", "holtermand123", "sayegh123", "admin123"];

    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            valid = true;
            break;
            }
        }

    if(valid) {
        window.location = "front_page.html"; // Viderefører til Frontpage
    }

    else{
        attempt --;// Den decrementer med én værdi
        alert("You have left "+attempt+" attempt;");
// Diaktiverer login-muligheden, hvis der forsøges mere end tre gange
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}