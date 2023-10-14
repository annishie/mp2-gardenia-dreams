function displayWishlistItems() {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistDiv = document.getElementById("wishlist-div");

  if (wishlistItems.length === 0) {
    wishlistDiv.innerHTML = "<p class='text-center mt-5'>No items added yet.</p>";
    return;
  }

  const wishlistHTML = wishlistItems
    .map((item, index) => {
      return `
      <div class="col-3">
        <div class="card mb-3 position-relative">
          <button class="remove pe-2" onclick="deleteThisOrder(${index})"><i class="fa-solid fa-circle-xmark"></i></button>
          <p id="ids${item.id}" hidden>${item.id}</p>
          <img id="image${item.id}" src="${item.image}" class="img-fluid pt-2 px-2">
    
          <div class="card-body text-center">
              <p class="card-title fw-bold" id="menu${item.id}">${item.productName}</p>
              <p class="card-text" id="price${item.id}">₱ ${item.price}.00</p>
              <button class="btn btn-sm" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping me-2"></i>Add To Cart</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  wishlistDiv.innerHTML = wishlistHTML;
}

function deleteThisOrder(index) {
  let wishlistItems = JSON.parse(localStorage.getItem("wishlist"));

  if (index !== -1) {
    wishlistItems.splice(index, 1);

    if (wishlistItems.length === 0) {
      localStorage.removeItem("wishlist");
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }

    displayWishlistItems();
  }
  alert("Wishlist item deleted.");
  window.location.href = window.location.href;
}

displayWishlistItems();
