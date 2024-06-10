"use strict";

window.onload = () => {
  const productsDetailCard = document.querySelector("#productsDetailCard");
  const selectOption = document.querySelector("#selectOption");
  const categoryList = document.querySelector("#categoryList");

  function loadProducts() {
    productsDetailCard.innerText = "";
    if (selectOption.value == "2") {
      categoryList.style.display = "none";
      fetch("http://localhost:4000/products")
        .then((response) => response.json())
        .then((products) => {
          const row = document.createElement("div");
          row.classList.add("row");
          productsDetailCard.appendChild(row);
          for (const product of products) {
            console.log(product);
            const col = document.createElement("div");
            col.classList.add("col-md-3", "mb-3");
            row.appendChild(col);

            const card = document.createElement("div");
            card.classList.add("card", "text-center", "h-100");
            col.appendChild(card);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            card.appendChild(cardBody);

            const idH5 = document.createElement("h5");
            idH5.innerText = "Product Id: " + product.id;
            const nameH6 = document.createElement("h6");
            nameH6.innerText = "Product Name: " + product.name;

            const descriptionH6 = document.createElement("h6");
            descriptionH6.innerText = "$" + product.unitPrice;
            let anchor = document.createElement("a");
            anchor.href = `details.html?productid=${product.id}`;
            anchor.text = "See details";

            cardBody.appendChild(idH5);
            cardBody.appendChild(descriptionH6);
            cardBody.appendChild(nameH6);
            cardBody.appendChild(anchor);
          }
        });
    }
    if (selectOption.value == "1") {
      categoryList.style.display = "block";
      fetch("http://localhost:4000/categories")
        .then((response) => response.json())
        .then((categories) => {
          for (const category of categories) {
            console.log(category)
            const option = new Option("option");
            option.value = category.id;
            option.innerText = category.name;

            categoryList.appendChild(option);
          }
        });
    }
  }

  selectOption.onchange = loadProducts;
};
