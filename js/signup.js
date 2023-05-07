const form = document.querySelector("form");
const emailInput = form.querySelector("#emailInput");
const passwordInput = form.querySelector("#passwordInput");
const fullNameInput = form.querySelector("#fullNameInput");
const phoneNumberInput = form.querySelector("#phoneInput");
const submitBtn = form.querySelector(".signup-btn");

const eye = document.querySelector("#eye");
emailInput.addEventListener("keyup",emailValidation);
passwordInput.addEventListener("keyup",passwordValidation);
fullNameInput.addEventListener("keyup",fullNameValidation);
phoneNumberInput.addEventListener("keyup",phoneNumberValidation);
submitBtn.addEventListener("click", addSignupDataToLocalStorage);
eye.addEventListener("click", function(){
    console.log("hello");
    this.classList.toggle("fa-solid","fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })

function fullNameValidation(e){
    e.preventDefault();
    const fullNameInputValue = fullNameInput.value;
    const fullNameValueReg = fullNameInputValue.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/ig)
    
    if(fullNameValueReg){
        // console.log("true")
        
        fullNameInput.classList.add("valid");
        fullNameInput.classList.remove("non-valid");
        document.querySelector("#fullname-demo").innerHTML = `vaild fullname`;
        document.querySelector("#fullname-demo").classList.add("color-valid");
        document.querySelector("#fullname-demo").classList.remove("color-non-valid");
       
        
        

        // userNameInput.style.borderColor = "#23D366"
    } else {
        // console.log("false")
        
        fullNameInput.classList.remove("valid");
        fullNameInput.classList.add("non-valid");
         document.querySelector("#fullname-demo").innerHTML = `non-vaild fullname ; a valid fullname should start with either a lower or upper-case letter and shouldn't contain any numbers`;
         document.querySelector("#fullname-demo").classList.add("color-non-valid");
         document.querySelector("#fullname-demo").classList.remove("color-valid");


        // userNameInput.style.borderColor = "rgb(246, 37, 37)"
    }
   
}

function phoneNumberValidation(e){
    e.preventDefault();
    const phoneNumberInputValue = phoneNumberInput.value;
    const phoneNumberValueReg = phoneNumberInputValue.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    
    if(phoneNumberValueReg){
        // console.log("true")
        
        phoneNumberInput.classList.add("valid");
        phoneNumberInput.classList.remove("non-valid");
        document.querySelector("#phone-demo").innerHTML = `vaild phone number`;
        document.querySelector("#phone-demo").classList.add("color-valid");
        document.querySelector("#phone-demo").classList.remove("color-non-valid");
       
        
        

        // userNameInput.style.borderColor = "#23D366"
    } else {
        // console.log("false")
        
        phoneNumberInput.classList.remove("valid");
        phoneNumberInput.classList.add("non-valid");
         document.querySelector("#phone-demo").innerHTML = `non-vaild phone number format ; an example of a valid phone number formats are : (123) 456-7890 , (123)456-7890 , 123-456-7890 , 123.456.7890 , 1234567890 , +31636363634 , 075-63546725`;
         document.querySelector("#phone-demo").classList.add("color-non-valid");
         document.querySelector("#phone-demo").classList.remove("color-valid");


        // userNameInput.style.borderColor = "rgb(246, 37, 37)"
    }
   
}

function emailValidation(e){
    e.preventDefault();
    const emailInputValue = emailInput.value;
    const emailValueReg = emailInputValue.match(/\w+@(gmail|yahoo|hotmail)\.(com|net|org)$/ig)
    
    if(emailValueReg){
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
         document.querySelector("#email-demo").innerHTML = `non-vaild email a valid email should contain one or more word can also contain one number or more must be followed by @ symbol must be followed by gmail or yahoo or hotmail must be followed by dot then followed by domain name (com | net | org)`;
         document.querySelector("#email-demo").classList.add("color-non-valid");
         document.querySelector("#email-demo").classList.remove("color-valid");


        // userNameInput.style.borderColor = "rgb(246, 37, 37)"
    }
   
}


function passwordValidation(e){
    e.preventDefault();
    const passwordInputValue = passwordInput.value;
    // const passwordValueReg = passwordInputValue.match(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/)
    const passwordValueReg = passwordInputValue.match(/^[A-Za-z]\w{7,14}$/) 
    // 12.!$DinA$
    
    if(passwordValueReg){
        // console.log("true")
        
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("non-valid");
        document.querySelector("#password-demo").innerHTML = `vaild password`;
        document.querySelector("#password-demo").classList.add("color-valid");
        document.querySelector("#password-demo").classList.remove("color-non-valid");
       
        
        

        // userNameInput.style.borderColor = "#23D366"
    } else {
        // console.log("false")
        
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("non-valid");
         document.querySelector("#password-demo").innerHTML = `non-vaild password a vaild password must have 6 to 16 valid characters and at least a number, and at least a special character`;
         document.querySelector("#password-demo").classList.add("color-non-valid");
         document.querySelector("#password-demo").classList.remove("color-valid");


        // userNameInput.style.borderColor = "rgb(246, 37, 37)"
    }
   
}

let oldObj =  JSON.parse(localStorage.getItem("allEntries")); 
let allEntries = oldObj || [];

function addSignupDataToLocalStorage(e){
        e.preventDefault();
        const fullNameInput = form.querySelector("#fullNameInput").value;
        const emailInput = form.querySelector("#emailInput").value;
        const passwordInput = form.querySelector("#passwordInput").value;
        const phoneNumberInput = form.querySelector("#phoneInput").value;
        // console.log(emailInput,passwordInput,fullNameInput,phoneNumberInput);


        var signupData = {
            "fullname": fullNameInput,
            "email": emailInput,
            "password": passwordInput,
            "phone-number": phoneNumberInput
        };


        
        localStorage.setItem("signupData", JSON.stringify(signupData));
        allEntries.push(signupData);
        localStorage.setItem("allEntries", JSON.stringify(allEntries)); 
                
        window.location.href = "../pages/login-page.html";
                
                
            
            
            
            

            



}





window.addEventListener("offline", function(){
    window.location.href="../pages/404_page.html"
  })
