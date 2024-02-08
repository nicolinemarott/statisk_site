const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/products?season=" + season)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(products) {
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product_card_template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h2").textContent = product.productdisplayname;
  clone.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  clone.querySelector(".sale").textContent = product.discount + "%";
  clone.querySelector(".price").textContent = "Price " + product.price + ",-";

  if (product.discount) {
    clone.querySelector(".product_card").classList.add("on_sale");
    clone.querySelector(".sale").style.display = "block";
  }

  if (product.soldout) {
    clone.querySelector(".product_card").classList.add("sold_out");
  }

  if (clone.querySelector(".product_card").classList.contains("sold_out")) {
    clone.querySelector(".product_card").classList.remove("on_sale");
    clone.querySelector(".sale").style.display = "none";
  }

  clone.querySelector(".buy_now").setAttribute("href", "produkt.html?id=" + product.id);

  document.querySelector(".produktliste").appendChild(clone);
}

//   {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
//   },
