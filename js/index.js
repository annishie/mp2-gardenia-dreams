// GENERAL JS

// ========================================== WINDOW SCROLL - NAVBAR EFFECT ======================================

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".header-sticky").addClass("sticky");
  } else {
    $(".header-sticky").removeClass("sticky");
  }
});

// ========================================== CART LENGTH ========================================================
function countCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = cartItems.length;
  return itemCount;
}

const cartItemCountElement = document.getElementById("cartNotifCount");
const anotherElement = document.getElementById("itemCount");

const itemCount = countCartItems();

cartItemCountElement.textContent = itemCount;
anotherElement.textContent = itemCount;
