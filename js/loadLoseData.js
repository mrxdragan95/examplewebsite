"use strict";

//---------------------------------LoseWeight-object----------------------------
function buildLoseWeight(articleLoseData) {
  const article = document.createElement("article");
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const aside = document.createElement('aside');


  img.alt = `exercising image ${articleLoseData["imgId"]}`;
  img.src = `https://github.com/mrxdragan95/photo/blob/main/id/${articleLoseData["imgId"]}.gif?raw=true`;
  h3.textContent = articleLoseData["title"];
  p.textContent = articleLoseData["information"];

  article.classList.add("lose-weight-blog-post");
  article.classList.add("rubberBand");
  article.appendChild(aside);
  aside.appendChild(img);
  aside.classList.add("lose-weight-blog-post-img");
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  return article;
}
const articles2 = articleloseweight.map(buildLoseWeight);
articles2.forEach(article => LoseWeightData.appendChild(article));

//---------- slider for Lose Weight --------------------------------------------

let slideIndex2 = 1;
  showSlides2(slideIndex2);
// Next/previous controls
function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}
// Thumbnail image controls
function currentSlide2(m) {
  showSlides2(slideIndex2 = m);

}

function showSlides2(m) {
  let j;
  let slides2 = document.querySelectorAll('.lose-weight-blog-post');
  let dots2 = document.querySelectorAll('.dot2');
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "flex";
  dots2[slideIndex2-1].className += " active";
}

document.getElementById("plusSlides21").addEventListener("click", ev => {
  plusSlides2(-1);
});

document.getElementById("plusSlides22").addEventListener("click", ev => {
  plusSlides2(1);
});

document.getElementById("currentSlide21").addEventListener("click", ev => {
  currentSlide2(1);
});
document.getElementById("currentSlide22").addEventListener("click", ev => {
  currentSlide2(2);
});
document.getElementById("currentSlide23").addEventListener("click", ev => {
  currentSlide2(3);
});
document.getElementById("currentSlide24").addEventListener("click", ev => {
  currentSlide2(4);
});
document.getElementById("currentSlide25").addEventListener("click", ev => {
  currentSlide2(5);
});
