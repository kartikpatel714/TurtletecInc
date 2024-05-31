let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY; // Move these variables outside the loop
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; // Corrected typo: offsetHeight
    let id = sec.getAttribute("id");

    if (top >= offset && top <= offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href='#" + id + "']")
        .classList.add("active");
    }
  });
};

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
