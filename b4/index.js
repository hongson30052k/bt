window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var result = document.getElementById("result");
    if (name == "" || email == "" || password == "") {
      result.innerHTML = "Please enter all fields";
      result.style.color = "red";
      return;
    } else {
      result.innerHTML = "Registration Successful";
      result.style.color = "green";
    }
    if (!email.includes("@")) {
      result.innerHTML = "Please enter a valid email";
      result.style.color = "red";
      return;
    } else {
      result.innerHTML = "Successful";
      result.style.color = "green";
    }
  });
});
