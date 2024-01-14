const button = document.querySelector("#signButton");

function auth() {
  const userName = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const authenticatedUser = users.find(
    (user) => user.name === userName && user.password === password
  );

  if (authenticatedUser) {
    alert("success");
    window.location.href = "../index.html";
  } else {
    alert("wrong password or username");
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  auth();
});

// localStorage.clear()