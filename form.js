let email=document.getElementById("inputEmail4");
let pwd=document.getElementById("inputPassword4");
let error=document.getElementById("error1");
let error1=document.getElementById("error2");
function validate(){
    if(email.value.trim()=="" && pwd.value.trim()==""){
        error.innerHTML="Username cannot be empty";
        error.style.color="red";
        email.style.border="2px solid red";
        error.style.fontSize="medium";
        error1.innerHTML="Password cannot be empty";
        error1.style.color="red";
        pwd.style.border="2px solid red";
        error1.style.fontSize="medium";
        return false;
    }
    if(email.value.trim()==""&& pwd.value.trim()!==""){
        error.innerHTML="Username cannnot be empty";
        error.style.color="red";
    email.style.border="2px solid red";
    error.style.fontSize="medium";
    pwd.style.border="2px solid green";
    error1.innerHTML="";
    return false;
    }
    if(email.value.trim()!=="" && pwd.value.trim()==""){
        error1.innerHTML="Password cannnot be empty";
        error1.style.color="red";
    pwd.style.border="2px solid red";
    error1.style.fontSize="medium";
    email.style.border="2px solid green";
    error.innerHTML="";
    return false;
    }
   
}
function emailValidate(myFunc){
    if( email.value=='admin' && pwd.value=='12345'){
        email.style.border="2px solid green";
        pwd.style.border="2px solid green";
        error.innerHTML="";
        error1.innerHTML="";
        myFunc();
        return true;
    }
    if(email.value!=='admin' && pwd.value=="12345"){
        error.innerHTML="Username is not valid";
        error.style.color="red";
    email.style.border="2px solid red";
    error.style.fontSize="medium";
    pwd.style.border="2px solid green";
    error1.innerHTML="";
    return false;
    }
 if(email.value=="admin" && pwd.value!=="12345"){
        email.style.border="2px solid green";
        error.innerHTML="";
        error1.innerHTML="Password is not valid";
        error1.style.color="red";
        pwd.style.border="2px solid red";
        error1.style.fontSize="medium";
        return false;
    }
else if(email.value!=="admin"&& pwd.value!=="12345"){
        error.innerHTML="Username is not valid";
        error.style.color="red";
        email.style.border="2px solid red";
        error.style.fontSize="medium";
        error1.innerHTML="Password is not valid";
        error1.style.color="red";
        pwd.style.border="2px solid red";
        error1.style.fontSize="medium";
        return false;
    }
}
    function myFunc() {
        //return true;
   window.open("main.html");
    //window.location="main.html";
}
function password_show_hide() {
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (pwd.type === "password") {
      pwd.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      pwd.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }