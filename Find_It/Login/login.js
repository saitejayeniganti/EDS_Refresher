"use strict";

function signup() {
  let usrname = document.getElementById("signUpusername").value;
  let pswd = document.getElementById("signUppassword").value;
  let firstName = document.getElementById("signUpFName").value;
  let lastName = document.getElementById("signUpLName").value;
  let phone = document.getElementById("signUpPhone").value;
  let dob = document.getElementById("dob").value;

  if (
    usrname == "" ||
    pswd == "" ||
    firstName == "" ||
    lastName == "" ||
    phone == "" ||
    dob == ""
  )
    return;

  if (usrname.slice(usrname.length - 8, usrname.length) !== "sjsu.edu") {
    window.alert("Please use SJSU email..!");
    return;
  }

  if (phone.length > 10 || phone.length < 10) {
    window.alert("Wrong Phone Number format ..!");
    return;
  }

  let userData = {
    username: usrname,
    password: pswd,
    fname: firstName,
    lname: lastName,
    phone: phone,
  };

  if (localStorage.getItem("userDetails") == null) {
    localStorage.setItem("userDetails", "[]");
  }

  let existingUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  let x;
  for (x in existingUserDetails) {
    if (existingUserDetails[x].username === userData.username) {
      window.alert("Username Already Exists..!");
      return;
    }
  }
  existingUserDetails.push(userData);

  localStorage.setItem("userDetails", JSON.stringify(existingUserDetails));
}

function login() {
  let name = document.getElementById("username").value;
  let pswd = document.getElementById("password").value;
  let userData = { username: name, password: pswd };

  let existingUserDetails = JSON.parse(localStorage.getItem("userDetails"));

  let x;
  let found = false;
  for (x in existingUserDetails) {
    console.log(x);

    let { username, password } = existingUserDetails[x];
    if (username == userData.username && password == userData.password) {
      found = true;
      break;
    }
  }
  if (found) {
    sessionStorage.setItem("userDetails", JSON.stringify(userData));
    window.location.href = "/Home/home.html";
  } else window.alert("Incorrect Credentials..!");
}

function home() {
  let details = JSON.parse(localStorage.getItem("userDetails"));
  if (details !== null) window.location.href = "/Home/home.html";
  else window.alert("Please login...!");
}

function Titlelogin() {
  let d1 = document.getElementById("signin");
  let d2 = document.getElementById("signup");

  d1.style.display = "block";
  d2.style.display = "none";

  d1.style.boxShadow =
    "0 8px 16px 0 rgba(0,0,0,0.8), 0 6px 20px 0 rgba(0,0,0,0.89)";
}

function titleLogin() {
  let d1 = document.getElementById("signin");
  let d2 = document.getElementById("signup");

  d1.style.display = "block";
  d2.style.display = "none";
}

function titleSignup() {
  let d1 = document.getElementById("signin");
  let d2 = document.getElementById("signup");

  d1.style.display = "none";
  d2.style.display = "block";
}
