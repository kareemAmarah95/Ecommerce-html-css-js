
   
 



// function showData(){
//     let myArr2 = JSON.parse(localStorage.getItem("productName"));
//     for(let i = 0 ; i <= myArr2.length-1 ; i++){

//     }
// }
function addProduct(id){
    
    // let inputText = document.querySelector(".quantity-value");
    // console.log(inputText);
    // let myArr= [{"id":id}];

// "quantity":inputText.innerHTML}
    
        // let storedIds = JSON.parse(localStorage.getItem("products"));
        
        let myArr = [];

        let cartProducts = JSON.parse(window.localStorage.getItem("products"));
        

        if(cartProducts === null){
            const addToCartBtn = document.querySelector(".add-to-cart-btn");
            const alertBox = document.querySelector(".alert");
            const closeBtn = document.querySelector(".close-btn");
            myArr.push(id);
            console.log(myArr);
            window.localStorage.setItem("products",JSON.stringify(myArr));
            // addDataToLocalStorage(`${id}`);
            addToCartBtn.addEventListener("click", function(){

                   alertBox.classList.add("showAlert");
                    alertBox.classList.add("show");
                    alertBox.classList.remove("hide");
                    setTimeout(function(){
                    alertBox.classList.add("hide");
                    alertBox.classList.remove("show");

                    },5000) //hide alert automatically after 5 seconds 
                }) 
                

                closeBtn.addEventListener("click", function(){
                   
                    alertBox.classList.add("hide");
                    alertBox.classList.remove("show");
                })
       
      
     
            
        } else {
            let myArr2 = [];
            
             myArr2 = JSON.parse(localStorage.getItem("products")); 
            console.log(myArr2);
            

            myArr2.push(id)
            console.log(myArr2);
            // addDataToLocalStorage(`${cartProducts}_${id}`);
            // addDataToLocalStorage(`${myArr}`);
                window.localStorage.setItem("products",JSON.stringify(myArr2))
                const addToCartBtn = document.querySelector(".add-to-cart-btn");
                const alertBox = document.querySelector(".alert");
                const closeBtn = document.querySelector(".close-btn");
                addToCartBtn.addEventListener("click", function(){
                    
                    alertBox.classList.add("show");
                    alertBox.classList.add("showAlert");
                    alertBox.classList.remove("hide");
                    setTimeout(function(){
                    alertBox.classList.add("hide");
                    alertBox.classList.remove("show");
                    

                    },5000) //hide alert automatically after 5 seconds 
                }) 
                closeBtn.addEventListener("click", function(){
                    alertBox.classList.add("hide");
                    alertBox.classList.remove("show");
                }) 
                
               
                 
            
        }
        
        // let productsCart = JSON.parse(cartProducts)
    // myArr.push(id);
    
    // console.log(myArr)
    // productsCart.push(myArr);
    // console.log(productsCart);
    // addDataToLocalStorage(myArr)
   
    
}

// function addDataToLocalStorage(id){
    // window.localStorage.setItem("products",id)
    //  window.localStorage.setItem("products",JSON.stringify(myArr))
// }

