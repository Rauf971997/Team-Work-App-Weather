const registerButton = document.querySelector("#register-button");
const errorSpan = document.querySelector("#error");

function register() {
  const userName = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const repeatPassword = document.querySelector("#repeat-password").value;

  if (password !== repeatPassword) {
    errorSpan.style.display = "inline";
    return;
  }
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const isUserExists = existingUsers.some((user) => user.name === userName);
  if (isUserExists) {
    alert("this user already exists");
    return;
  }

  const newUSer = {
    name: userName,
    email: email,
    password: password,
  };

  existingUsers.push(newUSer);

  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("success");
  window.location.href = "../index.html";
}

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  register();
});

// localStorage.clear();
