let LoggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
document.querySelector(".user").innerHTML = `Welcome ${LoggedUser[0].fullname}`;
