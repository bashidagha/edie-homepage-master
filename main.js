// Navbar

let navbar = document.querySelector(".nav__navbar");
let navToggle = navbar.querySelector(".material-icons");
let navManu = navbar.getElementsByTagName("ul")[0];

navToggle.addEventListener("click", () => {
  if (navManu.classList.contains("nav__visible")) {
    navManu.classList.remove("nav__visible");
  } else {
    navManu.classList.add("nav__visible");
  }
});

//Animation on Scroll

const scrollOffset = 100;

const scrollElement = document.querySelectorAll(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};


const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElement.forEach((el) => {
    if (elementInView(el, scrollOffset)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
