// let firstLoggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
// document.querySelector(
//   ".user"
// ).innerHTML = `Welcome ${firstLoggedUser[0].fullname}`;

function showProductsInTable(id) {
  let productsId = JSON.parse(window.localStorage.getItem("ids"));
  for (let k = 0; k <= productsId.length - 1; k++) {
    const xhr = new XMLHttpRequest();
    let url = window.location.href;

    let thirdUrlPage = url.substring(url.lastIndexOf("?") + 41);

    xhr.open("GET", `https://fakestoreapi.com/products?${thirdUrlPage}`);
    xhr.onload = function () {
      if (this.status === 200) {
        let products = JSON.parse(this.responseText);
        // const loader = document.querySelector("#loading");

        // function displayLoading() {
        //   loader.classList.toggle("display");
        //   //to stop loading after some time
        //   setTimeout(() => {
        //     loader.classList.toggle("hide");
        //   }, 5000);
        // }
        // displayLoading();
        // //hiding loading
        // function hideLoading() {
        //   loader.classList.remove("display");
        //   // loader.classList.add("hide");
        // }
        // hideLoading();

        for (let i = 0; i <= products.length - 1; i++) {
          if (products[i].id === productsId[k]) {
            // console.log(products[k]);
            let productTitleTd = document.createElement("td");
            productTitleTd.className = "product-title-name";
            productTitleTd.innerHTML = `${products[i].title}`;
            const firstTr = document.querySelector("#firstTr");

            firstTr.appendChild(productTitleTd);
            let productImageTd = document.createElement("td");
            productImageTd.className = "img-wrapper-holder";
            let imgWrapperDiv = document.createElement("div");
            imgWrapperDiv.className = "img-wrapper";
            productImageTd.appendChild(imgWrapperDiv);
            let productImage = document.createElement("img");
            productImage.className = "img";
            productImage.src = `${products[i].image}`;
            imgWrapperDiv.appendChild(productImage);
            const secondTr = document.querySelector("#secondTr");
            secondTr.appendChild(productImageTd);
            let productPriceTd = document.createElement("td");
            productPriceTd.innerHTML = `${products[i].price}$`;
            const thirdTr = document.querySelector("#thirdTr");
            thirdTr.appendChild(productPriceTd);
            let productRatingTd = document.createElement("td");
            productRatingTd.className = "product-rating-info";
            productRatingTd.innerHTML = `${products[i].rating.rate}`;
            const fourthTr = document.querySelector("#fourthTr");
            fourthTr.appendChild(productRatingTd);
            let productDescriptionTd = document.createElement("td");
            productDescriptionTd.className = "product-description-info";
            const productDescriptionTdPara = document.createElement("p");
            productDescriptionTd.appendChild(productDescriptionTdPara);
            productDescriptionTdPara.innerHTML = `${products[i].description}`;
            const fifthTr = document.querySelector("#fifthTr");
            fifthTr.appendChild(productDescriptionTd);
            const productCategoryTd = document.createElement("td");
            productCategoryTd.innerHTML = `${products[i].category}`;
            const sixthTr = document.querySelector("#sixthTr");
            sixthTr.appendChild(productCategoryTd);
          }
        }
      }
    };
    xhr.send();
  }
}

showProductsInTable();

// window.addEventListener("offline", function(){
//   window.location.href="../pages/404_page.html"
// })
