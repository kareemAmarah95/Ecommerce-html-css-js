
  // document.querySelector(".user").innerHTML = `Welcome ${loggedUser[0].fullname}`;

  
/** owl carousel slider js */
$(".owl-carousel").owlCarousel({
    lazyLoad: true,
    autoWidth: true,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2 sec
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
})

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
         pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
    }
  });

  // var swiper = new Swiper('.mySwiper', {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     dynamicBullets: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });


/**API Part for displaying products */

let myArr = [];
const xhr = new XMLHttpRequest();
const images = document.querySelectorAll(".owl-image");
let options = {
    rootMargin: '0px',
    threshold: .50
  }
  
  let observer = new IntersectionObserver((entries,imgObserver)=>{
    entries.forEach((entry)=>{
        // console.log(entry);
        if(!entry.isIntersecting) return;
        else{
            url = entry.target.getAttribute('data-src')
            console.log(url)
            entry.target.src = url;
        }
    })
  }, options);

  images.forEach((img) => {
    observer.observe(img)
  })
  
  // for(let n = 0 ; n <= users.length - 1; n++){
  //   if(users[n].fullname){
      
  //   }
  // }
 

  
  showProducts()

function showProducts(){
    const xhr = new XMLHttpRequest();
    // xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=9d2bd04703e837ef614bcc38f1078c7a&units=metric https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/+data[weather][0]["icon"].svg`);
    xhr.open("GET",`https://fakestoreapi.com/products`);
    xhr.onload = function(){
        if(this.status === 200){
            const product = JSON.parse(this.responseText) 
            
            myArr.push(product)
            const loader = document.querySelector("#loading");
            function displayLoading(){
              
              loader.classList.toggle("display");
              //to stop loading after some time
              setTimeout(()=>{
                  loader.classList.toggle("hide");
              },5000)
            }
            displayLoading();
            //hiding loading
            function hideLoading(){
              loader.classList.remove("display");
            }
            
            for(let i = 0 ; i <= product.length-1;i++){
              let description = product[i].description;
              let title = product[i].title;
              hideLoading();
                document.querySelector(".demo").innerHTML += `
                        <div class="col-xl-3 col-md-4 col-sm-6">
                                  <div class="card">
                                  <div class="card-image">
                                    <img class="owl-image" src=${product[i].image} onclick="window.location.href='pages/product.html?id=${product[i].id}'">
                                  </div>
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
                                          <div>
                                            <button class="compare-btn" onclick="addProductId(${product[i].id})">
                                            <i class="fa-solid fa-code-compare"></i>
                                            </button>
                                          </div>
                                        </div>
                                        </div>

                                    
                                  </div>
                                  
                                  </div>

                `
            }
        }
    }
    xhr.send();
}

// let loggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
// console.log(loggedUser);


/**
 * 
 * <div class="col-md-4">
                    <div class="card">
                    <div class="image">    
                    <img src=${product[i].image}>
                    </div>
                <div class="product-title"> product-title: ${product[i].title}</div>
                <div class="rating">
                <span> product rating : ${product[i].rating.rate}</span>
                <span> product rating count : ${product[i].rating.count}</span>
                </div>
                <div class="product-price">product price: ${product[i].price}</div>
                <div class="product-description">product description : ${product[i].description}</div>
                    </div>
                   
                </div>
 */



// window.onload = function(){
//     if(window.navigator.offline){
//     window.location.href="../pages/404_page.html";
//   }else{
//     window.location.href="../index.html"
//   }
// }
  




window.addEventListener("offline", function(){
  window.location.href="../pages/404_page.html"
})

