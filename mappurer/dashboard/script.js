const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
})

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in");
  } else {
    location.href = "/login";
  }
});
