
function orderProduct(productName) {

  const phoneNumber = "919999999999";

  const message =
    `Hi Dreamy Delights by Yashrif!%0A%0A` +
    `I am interested in ordering: ${productName}.%0A` +
    `Please share the available options and details.`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${message}`,
    "_blank"
  );
}


/* HAMBURGER MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICKING */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

  item.addEventListener("click", function() {

    navLinks.classList.remove("active");

  });

});

