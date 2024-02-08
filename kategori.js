fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(categories) {
  console.log(categories);
  categories.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h2").textContent = cat.season;

  clone.querySelector(".season_link").setAttribute("href", "produktliste.html?season=" + cat.season);

  document.querySelector(".kategori").appendChild(clone);
}
