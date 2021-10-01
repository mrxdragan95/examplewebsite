"use strict";

//---------------------------------GainMass-object------------------------------
function buildGainMass(articleMassData) {
  const article = document.createElement("article");
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const aside = document.createElement('aside');

  h3.textContent = articleMassData["title"];
  p.textContent = articleMassData["information"];
  img.alt = `exercising image ${articleMassData["imgId"]}`;
  img.src = `https://github.com/mrxdragan95/photo/blob/main/id/${articleMassData["imgId"]}.gif?raw=true`;

  article.classList.add("gain-mass-blog-post");
  article.classList.add("rubberBand");
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  article.appendChild(aside);
  aside.appendChild(img);
  aside.classList.add("gain-mass-blog-post-img");
  return article;
}
  const articles = articleGainMass.map(buildGainMass);
  articles.forEach(article => gainMassData.appendChild(article));

//-----------slider for Gain-Mass card----------------------------------------------

let slideIndex1 = 1;
  showSlides1(slideIndex1);
// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.querySelectorAll('.gain-mass-blog-post');
  let dots1 = document.querySelectorAll('.dot');
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "flex";
  dots1[slideIndex1-1].className += " active";
}

document.getElementById("plusSlides11").addEventListener("click", ev => {
  plusSlides1(-1);
});

document.getElementById("plusSlides12").addEventListener("click", ev => {
  plusSlides1(1);
});


document.getElementById("currentSlide11").addEventListener("click", ev => {
  currentSlide1(1);
});
document.getElementById("currentSlide12").addEventListener("click", ev => {
  currentSlide1(2);
});
document.getElementById("currentSlide13").addEventListener("click", ev => {
  currentSlide1(3);
});
document.getElementById("currentSlide14").addEventListener("click", ev => {
  currentSlide1(4);
});
document.getElementById("currentSlide15").addEventListener("click", ev => {
  currentSlide1(5);
});
document.getElementById("currentSlide16").addEventListener("click", ev => {
  currentSlide1(6);
});
document.getElementById("currentSlide17").addEventListener("click", ev => {
  currentSlide1(7);
});
