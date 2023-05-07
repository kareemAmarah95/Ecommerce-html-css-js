// let loggedUser = JSON.parse(window.localStorage.getItem("logged-user"));
// document.querySelector(".user").innerHTML = `Welcome ${loggedUser[0].fullname}`;

function showProducts() {
  let productsId = JSON.parse(window.localStorage.getItem("products"));
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
  // }
  // hideLoading();

  let rowData = document.querySelector(".row-edit");
  const section = document.createElement("section");
  section.id = "cart";
  section.className = "section-p1";
  rowData.appendChild(section);
  const table = document.createElement("table");
  table.style.width = "100%";
  section.appendChild(table);
  const tableThead = document.createElement("thead");
  table.appendChild(tableThead);
  const tableTr = document.createElement("tr");
  tableThead.appendChild(tableTr);
  const tdFirstRow = document.createElement("td");
  tdFirstRow.innerHTML = "Remove";
  tableTr.appendChild(tdFirstRow);
  const tdSecondRow = document.createElement("td");
  tdSecondRow.innerHTML = "Image";
  tableTr.appendChild(tdSecondRow);
  const tdThirdRow = document.createElement("td");
  tdThirdRow.className = "text-center";
  tdThirdRow.innerHTML = "Description";
  tableTr.appendChild(tdThirdRow);
  const tdFourthRow = document.createElement("td");
  tdFourthRow.innerHTML = "Price";
  tableTr.appendChild(tdFourthRow);
  const tdFifthRow = document.createElement("td");
  tdFifthRow.innerHTML = "Quantity";
  tableTr.appendChild(tdFifthRow);
  const tdSixthRow = document.createElement("td");
  tdSixthRow.innerHTML = "Subtotal";
  tableTr.appendChild(tdSixthRow);
  const secondSection = document.createElement("section");
  secondSection.id = "cart-add";
  secondSection.className = "section-p1";
  rowData.appendChild(secondSection);
  const couponDiv = document.createElement("div");
  couponDiv.id = "coupon";
  secondSection.appendChild(couponDiv);
  const couponHeader = document.createElement("h3");
  couponHeader.innerHTML = "Apply Coupon";
  couponDiv.appendChild(couponHeader);
  const couponInnerDiv = document.createElement("div");
  couponDiv.appendChild(couponInnerDiv);
  const couponInnerDivInput = document.createElement("input");
  couponInnerDivInput.type = "text";
  couponInnerDivInput.placeholder = "Enter Your Coupon";
  couponInnerDiv.appendChild(couponInnerDivInput);
  const couponInnerDivBtn = document.createElement("button");
  couponInnerDivBtn.className = "apply-btn";
  couponInnerDivBtn.innerHTML = "Apply";
  couponInnerDiv.appendChild(couponInnerDivBtn);
  const subTotalDiv = document.createElement("div");
  subTotalDiv.id = "subtotal";
  secondSection.appendChild(subTotalDiv);
  const subTotalDivHeader = document.createElement("h3");
  subTotalDivHeader.innerHTML = " Cart Totals";
  subTotalDiv.appendChild(subTotalDivHeader);
  const subTotalDivTable = document.createElement("table");
  subTotalDiv.appendChild(subTotalDivTable);
  const subTotalDivTableTr = document.createElement("tr");
  subTotalDivTable.appendChild(subTotalDivTableTr);
  const subTotalDivTableFirstTd = document.createElement("td");
  subTotalDivTableTr.appendChild(subTotalDivTableFirstTd);
  subTotalDivTableFirstTd.innerHTML = "Cart Subtotal";
  const subTotalDivTableSecondTd = document.createElement("td");
  subTotalDivTableTr.appendChild(subTotalDivTableSecondTd);
  const tableBodyTrSixthTd = document.createElement("td");
  // tableBodyTr.appendChild(tableBodyTrSixthTd);
  // tableBodyTrSixthTd.childNodes.forEach((item)=>{
  //   console.log(item.value);
  // });
  // console.log(tableBodyTrSixthTd.childNodes.values.hasOwnProperty());

  subTotalDivTableSecondTd.innerHTML = "$ 335";

  const subTotalDivTableSecondTr = document.createElement("tr");
  subTotalDivTableTr.appendChild(subTotalDivTableSecondTr);
  const subTotalDivTableSecondTrFirstTd = document.createElement("td");
  subTotalDivTableSecondTr.appendChild(subTotalDivTableSecondTrFirstTd);
  subTotalDivTableSecondTrFirstTd.innerHTML = "Shipping";
  const subTotalDivTableSecondTrSecondTd = document.createElement("td");
  subTotalDivTableSecondTr.appendChild(subTotalDivTableSecondTrSecondTd);
  subTotalDivTableSecondTrSecondTd.innerHTML = "Free";
  const subTotalDivTableThirdTr = document.createElement("tr");
  subTotalDivTableTr.appendChild(subTotalDivTableThirdTr);
  const subTotalDivTableThirdTrFirstTd = document.createElement("td");
  subTotalDivTableThirdTr.appendChild(subTotalDivTableThirdTrFirstTd);
  const subTotalDivTableThirdTrFirstTdStrong = document.createElement("strong");
  subTotalDivTableThirdTrFirstTd.appendChild(
    subTotalDivTableThirdTrFirstTdStrong
  );
  subTotalDivTableThirdTrFirstTdStrong.innerHTML = "Total";
  const subTotalDivTableThirdTrSecondTd = document.createElement("td");
  subTotalDivTableThirdTr.appendChild(subTotalDivTableThirdTrSecondTd);
  const subTotalDivTableThirdTrSecondTdStrong =
    document.createElement("strong");

  subTotalDivTableThirdTrSecondTdStrong.innerHTML = "$335";
  const subTotalBtn = document.createElement("button");
  subTotalBtn.innerHTML = "Proceed to checkout";
  subTotalDiv.appendChild(subTotalBtn);
  subTotalDivTableThirdTrSecondTd.appendChild(
    subTotalDivTableThirdTrSecondTdStrong
  );
  subTotalDivTableTr.appendChild(subTotalDivTableThirdTr);
  for (let j = 0; j <= productsId.length - 1; j++) {
    const xhr = new XMLHttpRequest();
    let url = window.location.href;
    let secondUrlPage = url.substring(url.lastIndexOf("?") + 4);

    xhr.open("GET", `https://fakestoreapi.com/products?${secondUrlPage}`);
    xhr.onload = function () {
      if (this.status === 200) {
        let products = JSON.parse(this.responseText);

        //  document.querySelector(".row").innerHTML = "";
        //  let divRow = document.createElement("div");
        //  divRow.className = "row-edit";
        //  console.log(divRow);
        //    let description = product[i].description;
        //    let title = product[i].title;

        // let el = document.createElement("div");
        // console.log(el);

        // let rowData = document.createElement("div");
        // rowData.className = "row-edit";
        // document.querySelector(".container").appendChild(rowData)
        // document.querySelector("body").appendChild(document.querySelector(".container"));
        const tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        for (let i = 0; i <= products.length - 1; i++) {
          if (productsId[j] === products[i].id) {
            console.log(products[i]);
            console.log(productsId[j]);

            const tableBodyTr = document.createElement("tr");
            tableBody.appendChild(tableBodyTr);
            const tableBodyTrFirstTd = document.createElement("td");
            tableBodyTr.appendChild(tableBodyTrFirstTd);
            const link = document.createElement("a");
            link.className = "delete-icon";
            link.onclick = function (j) {
              console.log(productsId.splice(productsId[j], 1));
              console.log(productsId);
              window.localStorage.setItem(
                "products",
                JSON.stringify(productsId)
              );
              tableBodyTr.innerHTML = "";
            };
            tableBodyTrFirstTd.appendChild(link);
            const removeIcon = document.createElement("i");
            removeIcon.classList.add("fa-regular", "fa-circle-xmark");
            link.appendChild(removeIcon);
            const tableBodyTrSecondTd = document.createElement("td");
            const image = document.createElement("img");
            image.src = `${products[i].image}`;
            image.alt = "product-image";
            tableBodyTrSecondTd.appendChild(image);
            tableBodyTr.appendChild(tableBodyTrSecondTd);
            const tableBodyTrThirdTd = document.createElement("td");
            tableBodyTrThirdTd.className = "paraWidth";
            const paraDescription = document.createElement("p");
            paraDescription.innerHTML = `${products[i].description}`;
            paraDescription.className = "descriptionPara";
            tableBodyTrThirdTd.appendChild(paraDescription);
            tableBodyTr.appendChild(tableBodyTrThirdTd);
            const productPrice = document.createElement("div");
            tableBodyTrThirdTd.appendChild(productPrice);
            const tableBodyTrFourthTd = document.createElement("td");
            tableBodyTr.appendChild(tableBodyTrFourthTd);
            const productSubtotal = document.createElement("div");
            productSubtotal.innerHTML = `${products[i].price}$`;
            tableBodyTrFourthTd.appendChild(productSubtotal);

            const tableBodyTrFifthTd = document.createElement("td");
            tableBodyTr.appendChild(tableBodyTrFifthTd);

            const input = document.createElement("input");
            input.className = "quantity";
            input.type = "number";
            input.value = "1";
            tableBodyTrFifthTd.appendChild(input);
            const tableBodyTrSixthTd = document.createElement("td");
            tableBodyTr.appendChild(tableBodyTrSixthTd);
            tableBodyTrSixthTd.innerHTML = `${
              products[i].price * document.querySelector(".quantity").value
            }$`;
          }
        }
      }
    };
    xhr.send();
  }
}

showProducts();

window.addEventListener("offline", function () {
  window.location.href = "../pages/404_page.html";
});
