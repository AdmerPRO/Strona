const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      location.href = "/dashboard";
    })
    .catch((error) => {
      document.location.reload();
    });
});



auth.onAuthStateChanged(user => {
  if (user) {
    location.href = "/dashboard";
  } else {
    console.log("No user is logged in!");
  }
});
