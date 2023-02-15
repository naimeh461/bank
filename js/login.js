document.getElementById("btn-submit").addEventListener("click",function(event){
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(email,password);

    if(email == "naime@gmail.com" && password == "12345")
    {
        window.location.href="bank.html";
    }
    else
    {
        alert("invalid user");
    }
})
