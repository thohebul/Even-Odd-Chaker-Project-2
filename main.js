document.getElementById("result").style.display = "none";
document.getElementById("danger").style.display = "none";


function dataChaker() {
    let a = document.getElementById("number").value;

    if (a == "") {
        return document.getElementById("danger").style.display = "block";
        return document.getElementById("result").style.display = "none";
    }

    if (a % 2 == 0) {
        document.getElementById("result").innerText = "Even";
        document.getElementById("result").style.display = "block";
        document.getElementById("danger").style.display = "none";
    }

    else {
        document.getElementById("result").innerText = "Odd";
        document.getElementById("result").style.display = "block";
        document.getElementById("danger").style.display = "none";

    }
}