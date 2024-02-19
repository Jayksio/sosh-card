let article = document.querySelector(".article");
let title = document.querySelector(".giga");
let lien = document.querySelector(".lien");
let img = document.querySelector(".image");

article.addEventListener("mouseover", () => {
  title.style.color = "#de2554";
  article.style.boxShadow = "10px 10px 0px #de2554";
  lien.style.color = "black";
  lien.style.textDecoration = "underline";
  img.style.display = "block";
});

article.addEventListener("mouseleave", () => {
  title.style.color = "";
  article.style.boxShadow = "";
  lien.style.color = "";
  lien.style.textDecoration = "";
  img.style.display = "";
});
