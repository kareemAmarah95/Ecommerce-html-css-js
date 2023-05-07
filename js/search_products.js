let filterInput = document.querySelector("#filterInput");
  filterInput.addEventListener("keyup", filterProducts)
  
  //search products
  function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let cardTitle = document.querySelector(".card-title");
    console.log(cardTitle);
    let item = document.querySelectorAll(".card");
    console.log(item)
    for(let i = 0 ; i <= item.length - 1;i++){
      let title = item[i].querySelector(".card-title")
      if(title.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        item[i].style.display = "block";
        // title.style.backgroundColor = "#FEC808";
        // console.log(item[i])
      }else{
        item[i].style.display = "none"
  
      }
    }
  }