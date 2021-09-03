
function signup() {
   var log_in = document.getElementById("one");
   log_in.classList.add("db");

   var sign_up = document.getElementById("two");
   sign_up.classList.remove("db");

}

function forgotpass() {
   var log_in = document.getElementById("one");
   log_in.classList.add("db");

   var forgot_pass = document.getElementById("three");
   forgot_pass.classList.remove("db");  
}
function backToSignin() {
   var forgot = document.getElementById("three");
   forgot.classList.add("db");

   var login = document.getElementById("one");
   login.classList.remove("db");  
}


function backToSigninn() {
   var forgot = document.getElementById("two");
   forgot.classList.add("db");

   var login = document.getElementById("one");
   login.classList.remove("db");  
}

function login() {
    var login = document.getElementById("one");
    login.classList.remove("db");
  
 }

 function backclose() {
    var back = document.getElementById("one");
    back.classList.add("db");
  
 }
 