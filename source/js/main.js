var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var addHare = document.getElementById("hare");
var addBowl = document.getElementById("bowl");
var addToys = document.getElementById("toys");
var sizeModal = document.querySelector(".modal-add");

addHare.addEventListener("click", function (evt) {
  evt.preventDefault();
  sizeModal.classList.add("modal-add__show");
});

addBowl.addEventListener("click", function (evt) {
  evt.preventDefault();
  sizeModal.classList.add("modal-add__show");
});

addToys.addEventListener("click", function (evt) {
  evt.preventDefault();
  sizeModal.classList.add("modal-add__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (sizeModal.classList.contains("modal-add__show")) {
      sizeModal.classList.remove("modal-add__show");
    }
  }
});
