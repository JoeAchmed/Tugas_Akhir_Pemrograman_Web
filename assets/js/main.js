//Get the button
let mybutton = document.getElementById("btn-back-to-top");
// Variable handle nav-link active
let navLink = document.querySelectorAll(".nav-link");
const facilitiesPage = ["meeting-room.html", "aula.html", "lab-computer.html", "conference-room.html"];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Active nav-link when url is active 
if (navLink.length) {
  navLink?.forEach((element, idx) => {
    let url = element?.innerHTML.toLowerCase();
    switch (url) {
      case "home":
        if (window.location.href.includes("index.html")) {
          navLink[idx].classList.add("nav-active");
          navLink[idx].classList.remove("text-primary-emphasis");
        }
        break;
      case "tentang kami":
        if (window.location.href.includes("about.html")) {
          navLink[idx].classList.add("nav-active");
          navLink[idx].classList.remove("text-primary-emphasis");
        }
        break;
      default:
        if (window.location.href.includes(url)) {
          navLink[idx].classList.add("nav-active");
          navLink[idx].classList.remove("text-primary-emphasis");
        } else {
          navLink[idx].classList.remove("nav-active");
        }
        break;
    }
  });
}

// Active nav-link when url includes on facilities group
facilitiesPage.forEach((el) => {
  if (window.location.href.includes(el)) {
    navLink[1].classList.add("nav-active");
    navLink[1].classList.remove("text-primary-emphasis");
  }
});

// Hide and shows the additional rooms
function handleAddRoom() {
  let formBooking = document.getElementById("form-booking");
  let listBooking = document.getElementById("list-booking");
  formBooking.style.display = "block";
  listBooking.style.display = "none";
}

function handleAddBooking() {
  let formBooking = document.getElementById("form-booking");
  let listBooking = document.getElementById("list-booking");
  formBooking.style.display = "none";
  listBooking.style.display = "block";
}