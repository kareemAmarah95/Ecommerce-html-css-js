// let loggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
// document.querySelector(".user").innerHTML = `Welcome ${loggedUser[0].fullname}`;
showProducts();

function showProducts() {
  const xhr = new XMLHttpRequest();
  let url = window.location.href;
  let urlPage = url.substring(url.lastIndexOf("?") + 4);
  console.log(urlPage);

  xhr.open("GET", `https://fakestoreapi.com/products/${urlPage}`);
  xhr.onload = function () {
    if (this.status === 200) {
      const product = JSON.parse(this.responseText);
      console.log(product.image);
      //  const loader = document.querySelector("#loading");

      // function displayLoading(){

      //   loader.classList.toggle("display");
      //   //to stop loading after some time
      //   setTimeout(()=>{
      //       loader.classList.toggle("hide");
      //   },5000)
      // }
      // displayLoading();
      // //hiding loading
      // function hideLoading(){
      //   loader.classList.remove("display");
      // }
      //  document.querySelector(".row").innerHTML = "";

      //    let description = product[i].description;
      //    let title = product[i].title;
      // hideLoading();
      document.querySelector("#product-section .row").innerHTML = `
                 
                 
                 <div class="col-lg-6 col-md-6 col-12 column-one-edit">
                 <div id="product-gallery">
                     <div class="product-gallery-wrapper">
       
                       <div class="image-wrapper">
       
                           <a href="#">
                             <img src=${product.image} onclick="window.location.href='../pages/shopping-cart-page.html?id=${product.id}'" alt="man-image">
                           </a>
       
                       </div>
                       <div class="image-list">
       
                         <div class="image-list-container">
       
                             <div class="product-thumbnail-item">
                                 <img src=${product.image} alt="">
                             </div>
       
                             <div class="product-thumbnail-item">
                                 <img src=${product.image} alt="">
                             </div>
       
                             <div class="product-thumbnail-item">
                                 <img src=${product.image} alt="">
                             </div>
       
                             <div class="product-thumbnail-item">
                                 <img src=${product.image} alt="">
                             </div>
       
                         </div>
       
                       </div>
       
                     </div>
                 </div>
               </div>


               <div class="col-lg-6 col-md-6 col-12 column-two-edit">
               <div class="flex-display-column product-info-column">
                   <div class="product-title">
                     <h1 class="product-title-header">
                       ${product.title}
                     </h1>
                     <div class="product-rating">
                         <span>
                           <i class="fa-solid fa-star"></i>
                         </span>
                         <span>
                           <i class="fa-solid fa-star"></i>
                         </span>
                         <span>
                           <i class="fa-solid fa-star"></i>
                         </span>
                         <span>
                           <i class="fa-solid fa-star"></i>
                         </span>
                         <span>
                           <i class="fa-solid fa-star"></i>
                         </span>
                         <span>
                           <a href="#">${product.rating.rate}</a>
                         </span>
                     </div>
                     <p class="price">
                         $${product.price}
                     </p>
                     <div class="single-product-countdown">
                         <div class="countdown-inner d-flex">
                           <div class="parent-days-relative">
                             <span class="days counter">
                              23
                             </span>
                             <span class="days-text">days</span>
                           </div>
                           <div class="parent-days-relative">
                             <span  class="hours counter">
                             24
                             </span>
                             <span class="hours-text">hours</span>
                           </div>
                           <div class="parent-days-relative">
                             <span  class="minutes counter">
                            36
                             </span>
                             <span class="minutes-text">minutes</span>
                           </div>
                           <div class="parent-days-relative">
                             <span  class="seconds counter">
                            30
                             </span>
                             <span class="seconds-text">seconds</span>
                           </div>
                           <div class="parent-days-relative">
                             <span class="milliseconds counter">
                             256
                             </span>
                             <span class="milliseconds-text">milliseconds</span>
                           </div>
                            
                           
                            
                             
                         </div>
                     </div>
                     <div class="product-description">
                       <p class="product-description-para">
                         ${product.description}
                       </p>
                     </div>
                     <div class="product-size d-flex">
                       <label for="">Size</label>
                       <ul class="available-sizes">
                         <li class="active-border">
                           <a href="">sm</a>
                         </li>
                         <li class="dashed-border">
                           <a href="">md</a>
                         </li>
                         <li class="dashed-border">
                           <a href="">lg</a>
                         </li>
                         <li class="dashed-border">
                           <a href="">xl</a>
                         </li>
                         <li class="dashed-border">
                           <a href="">xxl</a>
                         </li>
                         <li>
                           <a href="">
                             clear
                           </a>
                         </li>
                       </ul>
     
                     </div>
                     <div class="ecommerce-variation add-to-cart">
                         <div class="quantity">
                             <input onclick="decrementer(count--)" type="button" class="minus"  value="-">
                             <h1 class="quantity-value">${count}</h1>
                             <input onclick="incrementer(count++)" type="button" class="plus"  value="+">
                         </div>
                         <button type="submit" onclick="addProduct(${product.id})" class="add-to-cart-btn">Add To Cart</button>
                       
     
                     </div>
                     <div class="alert d-flex flex-row align-items-center">
                     <span class="first-icon fas fa-exclamation-circle"></span>
                     <span class="msg">Item added successfully</span>
                     <div class="close-btn">
                       <span class="fas fa-times"></span>
                     </div>
                   </div>

                     <div class="add-to-wishlist">
                       <div class="icon-wrapper">
                         <i class="fa-regular fa-heart"></i>
                       </div>
                       <p>Add To Wishlist</p>
                     </div>
                     <div class="horizontal-line"></div>
                     <div class="product-info">
                       <span class="categories-wrapper">
                         Categories:
                         <a href="#">
                           ${product.category}
                         </a>
                       </span>
                     </div>
                     <div class="social-sharing">
                       <span class="share-text">Share:</span>
                       <ul class="social-icons">
                         <li class="facebook shape">
                           <a href="#">
                             <i class="fa-brands fa-facebook-f"></i>
                           </a>
                         </li>
                         <li class="pinterest shape">
                           <a href="#">
                             <i class="fa-brands fa-pinterest"></i>
                           </a>
                         </li>
                         <li class="twitter shape">
                           <a href="#">
                             <i class="fa-brands fa-twitter"></i>
                           </a>
                         </li>
                       </ul>
                     </div>
                   </div>
               </div>
             </div>

                 `;
    }
  };
  xhr.send();
}

/***
 *  <div class="col-xl-3 col-md-4 col-sm-6">
                                 
                                   <div class="card">
                                     <img class="owl-image" src=${product[i].image} onclick="location.href='product.html?id=${product[i].id}'">
                                     <div class="card-body"> 
                                                                          
                                         <h2 onclick="showTheRest()" class="card-title">${title.length > 18 ? title.substring(0,18).concat("..."): title}</h2> 
                                         <h4 class="card-category">${product[i].category}</h4>
                                         <a class="card-desc" href="#">${description.length > 20 ? description.substring(0,20).concat("..."): description}</a>
                                         <div class="rating">
                                           <span>
                                             <i class="fa-solid fa-star"></i>
                                           </span>
                                           <span>
                                             <i class="fa-solid fa-star"></i>
                                           </span>
                                           <span>
                                             <i class="fa-solid fa-star"></i>
                                           </span>
                                           <span class="empty">
                                             <i class="fa-regular fa-star"></i>
                                           </span>
                                           rating: ${product[i].rating.rate}
                                         </div>
                                         <div class="two-next-items">
                                           <span class="price">
                                           $${product[i].price}
                                           </span>
                                         </div>
                                         </div>
 
                                     
                                   </div>
                                   
                                   </div>
 
 */

window.addEventListener("offline", function () {
  window.location.href = "../pages/404_page.html";
});
