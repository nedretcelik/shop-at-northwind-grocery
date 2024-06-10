"use strict";

window.onload = function () {
  const productDetailTB = document.querySelector("#productDetailTB");
  const urlParams = new URLSearchParams(location.search);
  let id = -1;

  if (urlParams.has("productid") === true) {
    id = urlParams.get("productid");
    loadProduct(id);
  }

  function loadProduct(id) {
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then((product) => {
        let row = productDetailTB.insertRow();

        let cell0 = row.insertCell();
        cell0.innerText = "";

        let cell1 = row.insertCell();
        cell1.innerText = product.id;

        let cell2 = row.insertCell();
        cell2.innerText = product.name;

        let cell3 = row.insertCell();
        cell3.innerText = product.quantityPerUnit;

        let cell4 = row.insertCell();
        cell4.innerText = product.unitsInStock;
      });
  }
};
