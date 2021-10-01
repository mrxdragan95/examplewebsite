"use strict";
console.log("hello");

//-----------------------Navigating---------------------------------------------
const bar = document.getElementById("bar");
const barToggle = bar.querySelector(".toggle");

function openMobileNavbar() {
  bar.classList.add("opened");
}

function closeMobileNavbar() {
  bar.classList.remove("opened");
}

barToggle.addEventListener("click", () => {
  if (bar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = bar.querySelector(".nav-menu");
const navbarLinks = bar.querySelector(".link");

navbarLinks.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});
navbarMenu.addEventListener("click", closeMobileNavbar);

//-----------------------End Navigating-----------------------------------------

//----------Contact us: Username, Email and Message-----------------------------

//----------Email and confrim email---------------------------------------------
const checkConfirmation = (ev) => {
 if (myEmail.value != myConfirmationEmail.value) {
  myConfirmationEmail.setCustomValidity("Wait. What? This doesn't match the email field!");
 } else {
  myConfirmationEmail.setCustomValidity('');
 }
};

const checkMessage = (ev) => {
if (myMessage.value != myMessage.value) {
 myMessage.setCustomValidity("Wait. Please you need to write");
} else {
 myMessage.setCustomValidity('');
}
};


myConfirmationEmail.addEventListener('input', checkConfirmation);
myEmail.addEventListener('input', checkConfirmation);
myMessage.addEventListener('textarea', checkMessage);

//----------sending after filling email up--------------------------------------

send.addEventListener('Submit', ev => {
 alert(`logged in as ${myName.value}`)
 send.reset();
 ev.preventDefault();
});

//----------End Contact us: Username, Email and Message-------------------------


//----------Search-Engine-------------------------------------------------------

mysearch.addEventListener('input', ev => {
  const sections = document.querySelectorAll('section');
  sections.forEach(x => {
    if(x.dataset.name.includes(mysearch.value)) {
      x.classList.remove("hidden");
    } else {
      x.classList.add("hidden");
    }
  });
});

mysearch.addEventListener('input_blog', ev => {
  const sections = document.querySelectorAll('article');
  sections.forEach(x => {
    if(x.dataset.name.includes(mysearch.value)) {
      x.classList.add("hidden");
    } else {
      x.classList.remove("hidden");
    }
  });
});

//----------End-Search-Engine---------------------------------------------------
