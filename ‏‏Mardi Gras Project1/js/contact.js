const box = document.getElementById("box");
const btnSend = document.getElementById("sendButton");
const emailInput = document.getElementById("userEmail");
const emailForm = document.getElementById("contactUsForm");
const emailFeedback = document.getElementById("ifValidEmail");

function validateEmail(email) {
  return email.length > 0 && email.indexOf("@") != -1 && email.endsWith(".com");
}
btnSend.addEventListener("click", () =>{
  let email = emailInput.value;
  let isEmailValid = validateEmail(email); //true/false

  if (isEmailValid) {
     emailFeedback.innerHTML = `<span class="text-success">Your email is valid!</span>`;
     setTimeout(()=>{emailForm.submit()},2000);
  } else {
        emailFeedback.innerHTML =`<span class="text-danger"> Your email is invalid!</span>`; 
  }
});

