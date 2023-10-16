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
const itemCount = countCartItems();
cartItemCountElement.textContent = `${itemCount}`;

// ========================================= REPLACING "LOGIN" LINK IF LOGIN KEY IS PRESENT =======================
if (sessionStorage.getItem("login")) {
  const loginLink = document.getElementById("login-link");
  if (loginLink) {
    loginLink.innerHTML = '<span class="menu-text">Account</span>';
    loginLink.href = "account.html";
  }
}
