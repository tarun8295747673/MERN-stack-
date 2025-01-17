function submitHandler() {
  const name = getValue(".name");
  const username = getValue(".username");
  const email = getValue(".email");
  const phone = getValue(".phone");
  const password = getValue(".password");
  const cpassword = getValue(".cpassword");
  const gender = getCheckedValue("input[name='gender']:checked");
  const checkbox = document.querySelector(".checkbox").checked;


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
