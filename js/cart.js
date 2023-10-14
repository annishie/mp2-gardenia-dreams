function formatAccounting(amount) {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTableBody = document.getElementById("cart-div");

  if (cartItems.length === 0) {
    cartTableBody.innerHTML = "<tr><td colspan='6' class='text-center'>No items added yet.</td></tr>";
    return;
  }

  const cartHTML = cartItems
    .map((item, index) => {
      const subtotal = item.price * item.quantity;
      return `
      <tr>
      <td class="pro-thumbnail">
        <button onclick="deleteThisItem(${index})"><i class="bi bi-x-circle"></i></button>
        <img class="img-fluid" src="${item.image}" alt="Product">
      </td>
      <td class="pro-title">${item.productName}</td>
      <td class="pro-price">₱${formatAccounting(item.price)}</td>
      <td class="pro-quantity">
        <div class="wrapper qty">
          <span class="qtybtn minus" onclick="minusQty(${item.id})">-</span>
          <span class="num p-3" id="quantity${item.id}">${item.quantity}</span>
          <span class="qtybtn plus" onclick="addQty(${item.id})">+</span>
        </div>
      </td>
      <td class="pro-subtotal">₱${formatAccounting(item.quantity * item.price)}</td>
    </tr>    
    `;
    })
    .join("");

  cartTableBody.innerHTML = cartHTML;
}


function displayTotal() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let itemCount = 0;
  
  cartItems.forEach((item) => {
    const subtotalElement = document.getElementById(`subtotal${item.id}`);
    const subtotal = parseFloat(subtotalElement.innerText.replace(/[^0-9.]/g, ''));
    total += subtotal;

    itemCount += item.quantity;
  });

  // OVERALL TOTAL AMOUNT
  const overallTotal = total + 38;
  

  const totalElement = document.getElementById("subTotal");
  totalElement.innerText = `${formatAccounting(total)}`;

  // ITEM COUNT
  const totalItemsElement = document.getElementById("totalItems");
  totalItemsElement.innerText = `Item(s): ${itemCount}`;

  const overallTotalElement = document.getElementById("overAll");
  overallTotalElement.innerText = `Total Amount: ${formatAccounting(overallTotal)}`;
}

function addQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity++;
  quantityElement.innerText = currentQuantity;
  updateSubtotal(itemId, currentQuantity);
}

function minusQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityElement.innerText = currentQuantity;
    updateSubtotal(itemId, currentQuantity);
  }
}

function updateSubtotal(itemId, quantity) {
  const priceElement = document.getElementById(`price${itemId}`);
  const price = parseFloat(priceElement.dataset.price);
  const subtotal = price * quantity;
  const subtotalElement = document.getElementById(`subtotal${itemId}`);
  subtotalElement.innerText = formatAccounting(subtotal);
  displayTotal();
}

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