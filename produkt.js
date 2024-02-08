const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(product) {
  console.log(product);

  document.querySelector("h2").textContent = product.brandname;
  document.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  document.querySelector(".year").textContent = product.productionyear;
  document.querySelector(".theme").textContent = product.usagetype;
  document.querySelector(".productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".sale").textContent = product.discount + "%";
  document.querySelector(".price").textContent = "Price " + product.price + ",-";

  if (product.discount) {
    document.querySelector(".product_img").classList.add("on_sale");
    document.querySelector(".sale").style.display = "block";
  }

  if (product.soldout) {
    document.querySelector(".product_img").classList.add("sold_out");
  }

  if (document.querySelector(".product_img").classList.contains("sold_out")) {
    document.querySelector(".product_img").classList.remove("on_sale");
    document.querySelector(".sale").style.display = "none";
  }
}
