function login() {
    var id = document.getElementById("idBox").value;
    var pw = document.getElementById("pwBox").value;

    if(id == "abc" && pw == "123") {
        alert("Login Success!");
        location.href = "home.html";
    }
    else {
        alert("Login Failed!");
        location.href = "Login.html";
    }
}