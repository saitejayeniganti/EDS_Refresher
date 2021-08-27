"use strict";

function signup() {
  let name = document.getElementById("signUpusername").value;
  let pswd = document.getElementById("signUppassword").value;

  let userData = { username: name, password: pswd };

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
  for (x in existingUserDetails) {
    if (
      existingUserDetails[x].username === userData.username &&
      existingUserDetails[x].password == userData.password
    ) {
      sessionStorage.setItem("userDetails", JSON.stringify(userData));
      window.alert("Login Successful..!");
      return;
    }
  }
  window.alert("Incorrect Credentials..!");
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