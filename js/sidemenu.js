let parentSidemenu = document.querySelector("#parent-sidemenu");

parentSidemenu.addEventListener("click",()=>{
let sidemenu = document.querySelector("#show-sidemenu");
  sidemenu.classList.toggle("toggle-visible");
})