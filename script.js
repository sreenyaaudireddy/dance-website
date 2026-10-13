const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEachEntry(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15);
  }
  else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08);
  }
});

const gallery = document.querySelectorAll(".gallery-box");
gallery.forEach(box => {
  box.addEventListener("click", () => {
    alert("Gallery image coming soon.");
  });
});

window.addEventListener("load", () => {
  console.log("Sri Natyalaya Kuchipudi Dance Academy");
});

const contactForm = document.querySelector(".contact-form");
const successMessage = document.getElementById("form-success");
const responseFrame = document.getElementById("form-response");

if (contactForm && successMessage && responseFrame) {
    let formSubmitted = false;

    contactForm.addEventListener("submit", function () {
        formSubmitted = true;
        successMessage.style.display = "none";
    });

    responseFrame.addEventListener("load", function () {
        if (formSubmitted) {
            successMessage.style.display = "block";
            contactForm.reset();
            formSubmitted = false;
        }
    });
}

