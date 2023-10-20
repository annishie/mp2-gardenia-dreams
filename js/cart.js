function formatAccounting(amount) {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// CART COUNT
function cartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const cartCount = document.getElementById("cart-item-count");
  cartCount.textContent = totalItems;
}

// TOTAL AMOUNT THAT CART HOLDS
function calculateTotalAmount() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartItems.forEach((item) => {
    total += item.quantity * item.price;
  });

  const cartAmount = document.getElementById("cartAmount");
  cartAmount.textContent = `₱${formatAccounting(total)}`;
}

// DISPLAYING CART ITEMS
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTableBody = document.getElementById("cart-div");

  if (cartItems.length === 0) {
    cartTableBody.innerHTML =
      "<tr><td colspan='6' class='text-center'>No items added yet.</td></tr>";
    return;
  }

  const cartHTML = cartItems
    .map((item, index) => {
      return `
          <tr>
          <td class="pro-thumbnail">
              <button onclick="deleteThisItem(${index})"><i class="bi bi-x-circle-fill"></i></button>
              <img class="img-fluid" src="${item.image}" alt="Product">
          </td>
          <td class="pro-title">${item.productName}</td>
          <td class="pro-price">₱${formatAccounting(item.price)}</td>
          <td class="pro-quantity">
              <div class="wrapper qty">
                  <span class="qtybtn minus" data-index="${index}">-</span>
                  <span class="num p-3" id="quantity_${index}">${
        item.quantity
      }</span>
                  <span class="qtybtn plus" data-index="${index}">+</span>
              </div>
          </td>
          <td class="pro-subtotal" id="subtotal_${index}">₱${formatAccounting(
        item.quantity * item.price
      )}</td>
          </tr>
      `;
    })
    .join("");

  cartTableBody.innerHTML = cartHTML;

  // INCREMENT & DECREMENT BUTTONS
  const decrementButtons = document.querySelectorAll(".qtybtn.minus");
  const incrementButtons = document.querySelectorAll(".qtybtn.plus");

  decrementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      updateQuantity(index, -1);
    });
  });

  incrementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      updateQuantity(index, 1);
    });
  });

  calculateTotalAmount();
  cartCount();
}

// TIMELY QTY CHANGE & UPDATE SUBTOTAL
function updateQuantity(index, change) {
  const quantityElement = document.getElementById(`quantity_${index}`);
  let quantity = parseInt(quantityElement.textContent);

  if (quantity + change < 1) {
    return;
  }

  quantity += change;
  quantityElement.textContent = quantity;

  // UPDATE QTY INSIDE LOCAL STORAGE
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  cartItems[index].quantity = quantity;
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // UPDATE SUBTOTAL
  const subtotalElement = document.getElementById(`subtotal_${index}`);
  const item = cartItems[index];
  const newSubtotal = item.quantity * item.price;
  subtotalElement.textContent = `₱${formatAccounting(newSubtotal)}`;

  calculateTotalAmount();
}

// DELETE CART ITEM
function deleteThisItem(index) {
  let orderedlist = JSON.parse(localStorage.getItem("cart"));

  if (index !== -1) {
    orderedlist.splice(index, 1);

    if (orderedlist.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(orderedlist));
    }

    displayCartItems();
    alert("Item deleted successfully.");
    window.location.href = window.location.href;
  }
  displayTotal();
}

displayCartItems();
displayTotal();


