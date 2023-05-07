const form = document.querySelector("form");
const emailInput = form.querySelector("#emailInput");
const passwordInput = form.querySelector("#passwordInput");
const eye = document.querySelector("#eye");
const loginBtn = form.querySelector(".login-btn");

emailInput.addEventListener("keyup", emailValidation);
passwordInput.addEventListener("keyup", passwordValidation);
loginBtn.addEventListener("click", checkIfUserExists);
eye.addEventListener("click", function () {
  console.log("hello");
  this.classList.toggle("fa-solid", "fa-eye-slash");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

function emailValidation(e) {
  e.preventDefault();
  const emailInputValue = emailInput.value;
  const emailValueReg = emailInputValue.match(
    /\w+@(gmail|yahoo|hotmail)\.(com|net|org)$/gi
  );

  if (emailValueReg) {
    // console.log("true")

    emailInput.classList.add("valid");
    emailInput.classList.remove("non-valid");
    document.querySelector("#email-demo").innerHTML = `vaild email`;
    document.querySelector("#email-demo").classList.add("color-valid");
    document.querySelector("#email-demo").classList.remove("color-non-valid");

    // userNameInput.style.borderColor = "#23D366"
  } else {
    // console.log("false")

    emailInput.classList.remove("valid");
    emailInput.classList.add("non-valid");
    document.querySelector(
      "#email-demo"
    ).innerHTML = `non-vaild email a valid email should contain one or more word can also contain one number or more must be followed by @ symbol must be followed by gmail or yahoo or hotmail must be followed by dot then followed by domain name (com | net | org)`;
    document.querySelector("#email-demo").classList.add("color-non-valid");
    document.querySelector("#email-demo").classList.remove("color-valid");

    // userNameInput.style.borderColor = "rgb(246, 37, 37)"
  }
}

function passwordValidation(e) {
  e.preventDefault();
  const passwordInputValue = passwordInput.value;
  // const passwordValueReg = passwordInputValue.match(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/)
  const passwordValueReg = passwordInputValue.match(/^[A-Za-z]\w{7,14}$/);
  // 12.!$DinA$

  if (passwordValueReg) {
    // console.log("true")

    passwordInput.classList.add("valid");
    passwordInput.classList.remove("non-valid");
    document.querySelector("#password-demo").innerHTML = `vaild password`;
    document.querySelector("#password-demo").classList.add("color-valid");
    document
      .querySelector("#password-demo")
      .classList.remove("color-non-valid");

    // userNameInput.style.borderColor = "#23D366"
  } else {
    // console.log("false")

    passwordInput.classList.remove("valid");
    passwordInput.classList.add("non-valid");
    document.querySelector(
      "#password-demo"
    ).innerHTML = `non-vaild password a vaild password must have 6 to 16 valid characters and at least a number, and at least a special character`;
    document.querySelector("#password-demo").classList.add("color-non-valid");
    document.querySelector("#password-demo").classList.remove("color-valid");

    // userNameInput.style.borderColor = "rgb(246, 37, 37)"
  }
}
let users = JSON.parse(window.localStorage.getItem("allEntries"));
console.log(users);
function checkIfUserExists(e) {
  e.preventDefault();

  const emailInput = form.querySelector("#emailInput").value;
  const passwordInput = form.querySelector("#passwordInput").value;
  const signinData = {
    email: emailInput,
    password: passwordInput,
  };
  console.log(signinData.email);
  console.log(signinData.password);
  // const usersEmail = users.filter(function(el){
  //   return el === users.email ? users.name :  console.log("first");
  // });
  let registeredUser = users.filter((person) => {
    return person.email === signinData.email
      ? person.fullname
      : (window.location.href = "../pages/signup.html");
  });
  console.log(registeredUser);
  window.localStorage.setItem("logged-user", JSON.stringify(registeredUser));

  // for(let i = 0 ; i <= users.length - 1 ;i++){

  //     if(users[i].email === signinData.email && users[i].password === signinData.password){
  //         window.location.href = "../index.html";

  //     } else {
  //         window.location.href = "../pages/signup.html";

  //     }
  // }
}

let loggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
document.querySelector(".user").innerHTML = `Welcome ${loggedUser[0].fullname}`;

window.addEventListener("offline", function () {
  window.location.href = "../pages/404_page.html";
});
