function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value; 
  console.log(password, confirmPassword); 
  let message = document.getElementById("message");
  if (password.length !== 0) {
    if (password === confirmPassword) {
      message.textContent = "Password match";
      message.style.color = "#00FF00";
    } else {
      message.textContent = "Password does not match";
      message.style.color = "#FF0000";
    }
  } else {
    alert("All details are compulsory. Please fill all details.");
    message.textContent = "";
  }
}

