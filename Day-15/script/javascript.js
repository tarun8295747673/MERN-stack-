function submitHandler() {
  const name = getValue(".input-name");
  const username = getValue(".input-username");
  const email = getValue(".input-email");
  const phone = getValue(".input-phone");
  const password = getValue(".input-password");
  const cpassword = getValue(".input-cpassword");
  const gender = getValue(".input-gender:checked");
  const checkbox = document.querySelector(".input-checkbox").checked;


  if (!formValidation()) {
    return;
  }
  
  if (password !== cpassword) {
    alert("Passwords do not match!");
    return;
  }

  console.log(name, username, email, phone, password, gender, checkbox);

  alert("Form submitted successfully!");
}

function getValue(selector) {
  return document.querySelector(selector).value;
}

function getCheckedValue(selector) {
  return document.querySelector(selector).checked;
}

function formValidation() {
  const name = document.querySelector(".input-name").value;
  const username = document.querySelector(".input-username").value;
  const email = document.querySelector(".input-email").value;
  const phone = document.querySelector(".input-phone").value;
  const password = document.querySelector(".input-password").value;
  const cpassword = document.querySelector(".input-cpassword").value;
  const gender = getValue(".input-gender:checked");
  const checkbox = document.querySelector(".input-checkbox").checked;

  if (!name) {
    const nameError = document.querySelector("#name-error");
    nameError.style.display = "block";
  } else {
    const nameError = document.querySelector("#name-error");
    nameError.style.display = "none";
  }

  if (!username) {
    const usernameError = document.querySelector("#username-error");
    usernameError.style.display = "block";
  } else {
    const usernameError = document.querySelector("#username-error");
    usernameError.style.display = "none";
  }

  if (!email) {
    const emailError = document.querySelector("#email-error");
    emailError.style.display = "block";
   
  } else {
    const emailError = document.querySelector("#email-error");
    emailError.style.display = "none";
  }

  if (!phone) {
    const phoneError = document.querySelector("#phone-error");
    phoneError.style.display = "block";
    
  } else {
    const phoneError = document.querySelector("#phone-error");
    phoneError.style.display = "none";
  }

  if (!password) {
    const passwordError = document.querySelector("#password-error");
    passwordError.style.display = "block";
    
  } else {
    const passwordError = document.querySelector("#password-error");
    passwordError.style.display = "none";
  }

  if (!cpassword) {
    const cpasswordError = document.querySelector("#cpassword-error");
    cpasswordError.style.display = "block";
   
  } else {
    const cpasswordError = document.querySelector("#cpassword-error");
    cpasswordError.style.display = "none";
  }

  if (!gender) {
    const genderError = document.querySelector("#gender-error");
    genderError.style.display = "block";
  
  } else {
    const genderError = document.querySelector("#gender-error");
    genderError.style.display = "none";
  }

  if (!checkbox) {
    const checkboxError = document.querySelector("#checkbox-error");
    checkboxError.style.display = "block";
  } else {
    const checkboxError = document.querySelector("#checkbox-error");
    checkboxError.style.display = "none";
  }
}