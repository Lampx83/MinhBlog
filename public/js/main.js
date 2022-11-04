function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            document.getElementById("info-email").innerText = info.email;
            document.getElementById("info-phone").innerText = info.phone;
            document.getElementById("info-address").innerText = info.address;
        }
    };
    xhttp.open("GET", "https://minh-blogs-default-rtdb.firebaseio.com/info.json", true);
    xhttp.send();
}

getInfo();

function saveFormData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("register-form").innerHTML = "Done!";
        }
    };
    xhttp.open("POST", "https://minh-blogs-default-rtdb.firebaseio.com/register.json", true);
    xhttp.send();
}