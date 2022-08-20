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

// navToggle.addEventListener('click', () => {
//     main.classList.add('invisible');
//     fullScreenMenu.classList.add('visible');
// })

// let closeMenu = document.querySelector('.menufullscreen-svg');

// let fullScreenMenu = document.querySelector('.menufullscreen');
// let main = document.querySelector('.main');

// navToggle.addEventListener('click', () => {
//     main.classList.add('invisible');
//     fullScreenMenu.classList.add('visible');
// })

// closeMenu.addEventListener('click', ()=>{
//     fullScreenMenu.classList.remove('visible');
//     main.classList.remove('invisible');

// } )
