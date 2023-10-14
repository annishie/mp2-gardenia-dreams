let wishlistItem = "wishlist";
let cartItem = "cart";

const products = {
  orderlist: [],
  menulist: [
    // FLOWERS API
    {
      id: 1,
      productName: "Sweet & Pretty",
      category: "flowers, bouquet, best selling flowers",
      price: 3000,
      image: "../img/flowers/sweet-pretty.webp",
    },
    {
      id: 2,
      productName: "Marmalade Skies",
      category: "flowers, bouquet, best selling flowers",
      price: 2800,
      image: "../img/flowers/marmalade-skies.webp",
    },
    {
      id: 3,
      productName: "Fiesta",
      category: "flowers, bouquet, best selling flowers",
      price: 3400,
      image: "../img/flowers/fiesta.webp",
    },
    {
      id: 4,
      productName: "Fall Delight",
      category: "flowers, bouquet, best selling flowers, new arrivals",
      price: 2500,
      image: "../img/flowers/fall-delight.webp",
    },
    {
      id: 5,
      productName: "Best Day",
      category: "flowers, bouquet, best selling flowers, luxury",
      price: 3400,
      image: "../img/flowers/best-day.webp",
    },
    {
      id: 6,
      productName: "Pumpkin Dream",
      category: "flowers, bouquet, best selling flowers, new arrivals",
      price: 3600,
      image: "../img/flowers/pumpkin-dream.webp",
    },
    {
      id: 7,
      productName: "Clear Skies",
      category: "flowers, bouquet, best selling flowers, luxury",
      price: 3900,
      image: "../img/flowers/clear-skies.webp",
    },
    {
      id: 8,
      productName: "Pop Of Whimsy",
      category: "flowers, bouquet, best selling flowers, new arrivals",
      price: 4000,
      image: "../img/flowers/pop-of-whimsy.webp",
    },
    {
      id: 9,
      productName: "Truly Stunning",
      category: "flowers, bouquet, best selling flowers, luxury",
      price: 4000,
      image: "../img/flowers/truly-stunning.webp",
    },
    {
      id: 10,
      productName: "Long Stem Red Rose",
      category: "flowers, bouquet, best selling flowers, luxury",
      price: 4200,
      image: "../img/flowers/long-stem-red-rose.webp",
    },
    {
      id: 11,
      productName: "Prairie Sunries",
      category: "flowers, bouquet, best selling flowers, new arrivals",
      price: 3300,
      image: "../img/flowers/prairie-sunrise.webp",
    },
    {
      id: 12,
      productName: "Blush Crush",
      category: "flowers, bouquet, best selling flowers",
      price: 3100,
      image: "../img/flowers/blush-crush.webp",
    },
    {
      id: 13,
      productName: "Birthday Brights",
      category: "flowers, bouquet, best selling flowers, birthday",
      price: 3600,
      image: "../img/flowers/birthday-brights.webp",
    },
    {
      id: 14,
      productName: "Autumn Orchard",
      category: "flowers, bouquet, best selling flowers, new arrivals",
      price: 4400,
      image: "../img/flowers/autumn-orchard.webp",
    },
    {
      id: 15,
      productName: "Classic Ivory",
      category: "flowers, bouquet, best selling flowers",
      price: 2500,
      image: "../img/flowers/classic-ivory.jpg",
    },
    {
      id: 16,
      productName: "Beyond Blue",
      category: "flowers, bouquet, best selling flowers",
      price: 3100,
      image: "../img/flowers/beyond-blue.webp",
    },
    {
      id: 17,
      productName: "Autumn Sunshine",
      category: "flowers, bouquet, new arrivals",
      price: 3600,
      image: "../img/flowers/autumn-sunshine.webp",
    },
    {
      id: 18,
      productName: "Harvest Sunflower",
      category: "flowers, bouquet, new arrivals",
      price: 5600,
      image: "../img/flowers/harvest-sunflower.webp",
    },
    {
      id: 19,
      productName: "Sugar Plum",
      category: "flowers, bouquet, new arrivals",
      price: 2900,
      image: "../img/flowers/sugar-plum.webp",
    },
    {
      id: 20,
      productName: "Bouquet Of Blessings",
      category: "flowers, bouquet, new arrivals",
      price: 3900,
      image: "../img/flowers/bouquet-of-blessings.webp",
    },
    {
      id: 21,
      productName: "Fresh Linen",
      category: "flowers, bouquet, new arrivals, luxury",
      price: 4100,
      image: "../img/flowers/fresh-linen.webp",
    },
    {
      id: 22,
      productName: "Gourd Of Gratitude",
      category: "flowers, bouquet, new arrivals",
      price: 3600,
      image: "../img/flowers/gourd-of-gratitude.webp",
    },
    {
      id: 23,
      productName: "Red Hot",
      category: "flowers, bouquet, new arrivals",
      price: 2900,
      image: "../img/flowers/red-hot.webp",
    },
    {
      id: 24,
      productName: "Long Stem Pink Rose",
      category: "flowers, bouquet, luxury",
      price: 2900,
      image: "../img/flowers/long-stem-pink-rose.webp",
    },
    {
      id: 25,
      productName: "Radiance In Bloom",
      category: "flowers, bouquet, luxury",
      price: 4200,
      image: "../img/flowers/radiance-in-bloom.webp",
    },
    {
      id: 26,
      productName: "Ever After Rose",
      category: "flowers, bouquet, luxury",
      price: 4800,
      image: "../img/flowers/ever-after-rose.webp",
    },
    {
      id: 27,
      productName: "On One Knee Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7600,
      image: "../img/flowers/on-one-knee-set.jpeg",
    },
    {
      id: 28,
      productName: "Floral Confetti Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7000,
      image: "../img/flowers/floral-confetti-set.webp",
    },
    {
      id: 29,
      productName: "Carolina Blue Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7700,
      image: "../img/flowers/carolina-blue-set.jpeg",
    },
    {
      id: 30,
      productName: "Think Pink Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7600,
      image: "../img/flowers/think-pink-set.webp",
    },
    {
      id: 31,
      productName: "Little Cherub Bouquet Set",
      category: "flowers, bouquet, set",
      price: 6800,
      image: "../img/flowers/little-cherub-set.webp",
    },
    {
      id: 32,
      productName: "Fiesta Bouquet Set Of 3",
      category: "flowers, bouquet, set",
      price: 11900,
      image: "../img/flowers/fiesta-set.webp",
    },
    {
      id: 33,
      productName: "Best Day Bouquet Set Of 3",
      category: "flowers, bouquet, set",
      price: 11500,
      image: "../img/flowers/best-day-set.webp",
    },
    // PLANTS API
    {
      id: 34,
      productName: "Midnight Purple Calla",
      category: "plants, best selling plants",
      price: 3200,
      image: "../img/plants/midnight-purple-calla.webp",
    },
    {
      id: 35,
      productName: "Spathiphyllum Plant",
      category: "plants, best selling plants",
      price: 4500,
      image: "../img/plants/spathiphyllum.jpeg",
    },
    {
      id: 36,
      productName: "Comfort Planter",
      category: "plants, best selling plants",
      price: 4400,
      image: "../img/plants/comfort-planter.webp",
    },
    {
      id: 37,
      productName: "Peaceful White Garden",
      category: "plants, indoor plants, best selling plants",
      price: 2900,
      image: "../img/plants/peaceful-white-garden.webp",
    },
    {
      id: 38,
      productName: "Sending A Garden Of Love",
      category: "plants, indoor plants, best selling plants",
      price: 4500,
      image: "../img/plants/sending-garden-love.webp",
    },
    {
      id: 39,
      productName: "My Heart Succulent Garden",
      category: "plants, best selling plants",
      price: 3600,
      image: "../img/plants/heart-succulent.webp",
    },
    {
      id: 40,
      productName: "White Garden Keepsafe Box",
      category: "plants, indoor plants",
      price: 4200,
      image: "../img/plants/white-garden-keepsake.webp",
    },
    {
      id: 41,
      productName: "My Darling Pink Calla Lily Plant",
      category: "plants, best selling plants",
      price: 2600,
      image: "../img/plants/darling-pink-calla.webp",
    },
    {
      id: 42,
      productName: "Peace Lily",
      category: "plants, best selling plants, best selling plants",
      price: 3400,
      image: "../img/plants/peace-lily.webp",
    },
    {
      id: 43,
      productName: "Sunshine & Joy Garden",
      category: "plants, best selling plants",
      price: 2900,
      image: "../img/plants/sunshine-joy.webp",
    },
    {
      id: 44,
      productName: "Living Spirit Dishgarden",
      category: "plants, indoor plants, best selling plants",
      price: 4100,
      image: "../img/plants/living-spirit-dishgarden.webp",
    },
    {
      id: 45,
      productName: "Pink Orchid Garden",
      category: "plants, indoor plants, best selling plants",
      price: 5600,
      image: "../img/plants/pink-orchid.webp",
    },
    {
      id: 46,
      productName: "Rainbow Garden of Blooms",
      category: "plants, indoor plants",
      price: 4500,
      image: "../img/plants/rainbow-garden.webp",
    },
    {
      id: 47,
      productName: "Blooming Garden",
      category: "plants, indoor plants",
      price: 4200,
      image: "../img/plants/blooming-garden.webp",
    },
    {
      id: 48,
      productName: "Beyond Blue Hydrangea",
      category: "plants, indoor plants, best selling plants",
      price: 2600,
      image: "../img/plants/beyond-blue.webp",
    },
    {
      id: 49,
      productName: "Haworthia Succulent in Cat Love Mug",
      category: "plants, pet friendly plants",
      price: 2500,
      image: "../img/plants/haworthia-cat-mug.webp",
    },
    {
      id: 50,
      productName: "Haworthia Succulent in Pawprint Love Mug",
      category: "plants, pet friendly plants",
      price: 2500,
      image: "../img/plants/haworthia-love-mug.webp",
    },
    {
      id: 51,
      productName: "Red Prayer Plant",
      category: "plants, pet friendly plants",
      price: 2200,
      image: "../img/plants/red-prayer.webp",
    },
    {
      id: 52,
      productName: "Yellow Mini Rose Plant",
      category: "plants, pet friendly plants",
      price: 2700,
      image: "../img/plants/yellow-mini-rose.jpeg",
    },
    {
      id: 53,
      productName: "Someone Like You Pink Orchid",
      category: "plants, pet friendly plants",
      price: 3100,
      image: "../img/plants/someone-like-you.webp",
    },
    {
      id: 54,
      productName: "White Hoop Orchid",
      category: "plants, pet friendly plants",
      price: 4700,
      image: "../img/plants/white-hoop.webp",
    },
    {
      id: 55,
      productName: "Island Time Coral Orchid",
      category: "plants, pet friendly plants, best selling plants",
      price: 2200,
      image: "../img/plants/island-time.webp",
    },
    {
      id: 56,
      productName: "Bliss White",
      category: "plants, pet friendly plants",
      price: 3000,
      image: "../img/plants/bliss-white.webp",
    },
    {
      id: 57,
      productName: "Gardenia Bonsai",
      category: "plants, bonsai",
      price: 3900,
      image: "../img/plants/gardenia-bonsai.webp",
    },
    {
      id: 58,
      productName: "Indoor Hawaiian Umbrella Bonsai",
      category: "plants, bonsai",
      price: 3400,
      image: "../img/plants/umbrella-bonsai.webp",
    },
    {
      id: 59,
      productName: "Azalea Bonsai",
      category: "plants, bonsai",
      price: 3900,
      image: "../img/plants/azalea-bonsai.webp",
    },
    {
      id: 60,
      productName: "Lucky Bamboo",
      category: "plants, bonsai, bamboo",
      price: 2800,
      image: "../img/plants/lucky-bamboo.webp",
    },
    {
      id: 61,
      productName: "Juniper Bonsai Tree",
      category: "plants, bonsai, bamboo",
      price: 3500,
      image: "../img/plants/juniper-bonsai.webp",
    },
    // GIFTS API
    {
      id: 62,
      productName: "Golden Gourmet for every Occasion",
      category: "gifts, best selling gifts",
      price: 5100,
      image: "../img/gifts/golden-gourmet.webp",
    },
    {
      id: 63,
      productName: "Belgian Chocolate Dipped Strawberries",
      category: "gifts",
      price: 3100,
      image: "../img/gifts/belgian-choc.webp",
    },
    {
      id: 64,
      productName: "Mrs. Fields® Hello Sunshine Tin",
      category: "gifts",
      price: 3000,
      image: "../img/gifts/mrs-fields-sunshine.webp",
    },
    {
      id: 65,
      productName: "Breakable Belgian Chocolate Confetti Treat Cupcake",
      category: "gifts",
      price: 3600,
      image: "../img/gifts/breakable-belgian.webp",
    },
    {
      id: 66,
      productName: "Celebration of Life Windchime",
      category: "gifts",
      price: 2200,
      image: "../img/gifts/life-windchime.webp",
    },
    {
      id: 67,
      productName: "Ultimate Belgian Chocolate Snacks Gift Basket",
      category: "gifts",
      price: 4500,
      image: "../img/gifts/ultimate-belgian.webp",
    },
    {
      id: 68,
      productName: "Happy Birthday Gift Basket",
      category: "gifts, birthday",
      price: 4800,
      image: "../img/gifts/birthday-basket.webp",
    },
    {
      id: 69,
      productName: "Lavender Forever Rose",
      category: "flowers, gifts",
      price: 3600,
      image: "../img/gifts/lavender-rose.webp",
    },
    {
      id: 70,
      productName: "Savory Charcuterie Grazing Board Gift",
      category: "gifts",
      price: 4200,
      image: "../img/gifts/savory-charcuterie.webp",
    },
    {
      id: 71,
      productName: "Chocolate Covered Pretzel Twists",
      category: "gifts",
      price: 1900,
      image: "../img/gifts/pretzel-twists.webp",
    },
    {
      id: 72,
      productName: "Mrs. Fields® Thinking of You Combo Tin",
      category: "gifts",
      price: 4300,
      image: "../img/gifts/mrs-fields-combo.webp",
    },
    {
      id: 73,
      productName: "Tropical Fruits Gift Basket",
      category: "gifts, best selling gifts",
      price: 5600,
      image: "../img/gifts/tropical-basket.webp",
    },
    {
      id: 74,
      productName: "Gourmet Fruit, Cheese & Nut Gift Crate",
      category: "gifts, best selling gifts",
      price: 3900,
      image: "../img/gifts/gourmet-fruit.webp",
    },
    {
      id: 75,
      productName: "Shine Bright Gourmet Gift Tower",
      category: "gifts, best selling gifts",
      price: 4800,
      image: "../img/gifts/shine-bright.webp",
    },
    {
      id: 76,
      productName: "Mrs. Fields Fall Combo",
      category: "gifts, best selling gifts",
      price: 3100,
      image: "../img/gifts/mrs-fields-fall.webp",
    },
    {
      id: 77,
      productName: "Ultimate Golden Ghirardelli Gift Tower",
      category: "gifts, best selling gifts",
      price: 6200,
      image: "../img/gifts/golden-ghirardelli.webp",
    },
    {
      id: 78,
      productName: "Beary Happy Birthday in a Box",
      category: "gifts, best selling gifts, teddy bear, birthday",
      price: 3100,
      image: "../img/gifts/beary-birthday.webp",
    },
    {
      id: 79,
      productName: "Mrs. Fields Halloween 30 Nibbler Tin",
      category: "gifts, best selling gifts",
      price: 3300,
      image: "../img/gifts/mrs-fields-halloween.webp",
    },
    {
      id: 80,
      productName: "Sculpd Candle Making Kit for Two",
      category: "gifts, DIY gifts",
      price: 5100,
      image: "../img/gifts/sculpd-candle.webp",
    },
    {
      id: 81,
      productName: "Kitchen Harvest Tool Set",
      category: "gifts, DIY gifts",
      price: 3800,
      image: "../img/gifts/kitchen-harvest.webp",
    },
    {
      id: 82,
      productName: "Wassail Gift Set",
      category: "gifts, DIY gifts",
      price: 3100,
      image: "../img/gifts/wassail.webp",
    },
    {
      id: 83,
      productName: "Cocktail Infusion Kit",
      category: "gifts, DIY gifts",
      price: 3800,
      image: "../img/gifts/cocktail-infusion.webp",
    },
    {
      id: 84,
      productName: "Seeds of Life Memory Tree",
      category: "gifts, DIY gifts",
      price: 3400,
      image: "../img/gifts/memory-tree.jpeg",
    },
    {
      id: 85,
      productName: "Here's Looking at You",
      category: "gifts, teddy bear, birthday",
      price: 7000,
      image: "../img/gifts/heres-looking-at-you.webp",
    },
    {
      id: 86,
      productName: "Mrs. Fields® Get Well Bear with Cookies",
      category: "gifts, teddy bear",
      price: 3400,
      image: "../img/gifts/mrs-fields-bear.jpeg",
    },
    {
      id: 86,
      productName: "Mrs. Fields® Happy Birthday Bear Treat",
      category: "gifts, teddy bear, birthday",
      price: 3400,
      image: "../img/gifts/mrs-fields-birthday.webp",
    },
    {
      id: 87,
      productName: "Birthday Gift Tower",
      category: "gifts, birthday",
      price: 3400,
      image: "../img/gifts/birthday-gift.webp",
    },
    {
      id: 88,
      productName: "Happy Birthday Succulent Gift Box",
      category: "gifts, birthday",
      price: 3100,
      image: "../img/gifts/birthday-succulent.webp",
    },
    {
      id: 89,
      productName: "Birthday Belgian Chocolate Medley",
      category: "gifts, birthday",
      price: 5600,
      image: "../img/gifts/chocolate-medley.webp",
    },
  ],
  orderedlist: [],
  showproducts() {
    let menu = document.getElementById("menu-list");
    let menulist = "";
    this.menulist.forEach(function (data) {
      menulist += `
        <div class="col-md-3 col-12">
          <div class="card mb-3 position-relative">
              <p id="ids${data.id}" hidden>${data.id}</p>
              <img id="image${data.id}" src="${data.image}" class="img-fluid pt-2 px-2">
    
              <div class="card-body">
                  <p class="card-title text-center" id="menu${data.id}">${data.productName}</p><hr>
                  <p class="card-text text-center" id="price${data.id}">₱ ${data.price}.00</p>
    
                  <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                      <button class="btn btn-sm me-2" onclick="addToWishlist(${data.id})"><i class="fa-regular fa-heart"></i></button>
                      <button class="btn btn-sm" onclick="addToCart(${data.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                  </div>
              </div>
          </div>
        </div>
      `;
    });
    menu.innerHTML = menulist;
  },
};

orderedlist = localStorage.getItem(wishlistItem);

products.showproducts();

// ITEM CHECKER
function isItemAlreadyInStorage(itemKey, itemId) {
  const items = JSON.parse(localStorage.getItem(itemKey)) || [];
  return items.some((item) => item.id === itemId);
}

// ADD TO WISHLIST *****************************************************************
function addToWishlist(id) {
  const itemId = id.toString();

  if (isItemAlreadyInStorage(wishlistItem, itemId)) {
    alert("You already added this item.");
    return;
  }

  let orderedlist = JSON.parse(localStorage.getItem(wishlistItem)) || [];

  const existingItemIndex = orderedlist.findIndex((item) => item.id === id);

  let new_id = document.getElementById("ids" + id).innerText;
  let new_order = document.getElementById("menu" + id).innerText;
  let new_price = parseFloat(
    document
      .getElementById("price" + id)
      .innerText.replace("₱", "")
      .replace(".00", "")
  );
  let new_image = document.getElementById("image" + id).src;

  orderedlist.push({
    id: new_id,
    productName: new_order,
    price: new_price,
    quantity: 1,
    item: "wishlist",
    totalPrice: new_price,
    image: new_image,
  });

  localStorage.setItem(wishlistItem, JSON.stringify(orderedlist));
  alert("Added To Wishlist.");
  window.location.href = window.location.href;
}

// ADD TO CART *****************************************************************
function addToCart(id) {
  const itemId = id.toString();

  if (isItemAlreadyInStorage(cartItem, itemId)) {
    alert("You already added this item.");
    return;
  }

  let orderedlist = JSON.parse(localStorage.getItem(cartItem)) || [];

  let new_id = document.getElementById("ids" + id).innerText;
  let new_order = document.getElementById("menu" + id).innerText;
  let new_price = parseFloat(
    document
      .getElementById("price" + id)
      .innerText.replace("₱", "")
      .replace(".00", "")
  );
  let new_image = document.getElementById("image" + id).src;

  orderedlist.push({
    id: new_id,
    productName: new_order,
    price: new_price,
    quantity: 1,
    item: "cart",
    totalPrice: new_price,
    image: new_image,
  });

  localStorage.setItem(cartItem, JSON.stringify(orderedlist));
  alert("Added To Cart.");
  window.location.href = window.location.href;
}

// SEARCH PRODUCTS *********************************************************************
document.getElementById("search-button").addEventListener("click", function () {
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredProducts = products.menulist.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
  );

  updateProductList(filteredProducts);
});

function updateProductList(productsToDisplay) {
  let menu = document.getElementById("menu-list");
  let menulist = "";

  if (productsToDisplay.length === 0) {
    menulist = "<p>No matching products found.</p>";
  } else {
    productsToDisplay.forEach(function (data) {
      menulist += `
          <div class="col-3">
        <div class="card mb-3 position-relative">
          <p id="ids${data.id}" hidden>${data.id}</p>
          <img id="image${data.id}" src="${data.image}" class="img-fluid pt-2 px-2">
      
          <div class="card-body">
              <p class="card-title text-center" id="menu${data.id}">${data.productName}</p><hr>
              <p class="card-text text-center" id="price${data.id}">₱ ${data.price}.00</p>
              
              <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                  <button class="btn btn-sm me-2" onclick="addToWishlist(${data.id})"><i class="fa-regular fa-heart"></i></button>
                  <button class="btn btn-sm" onclick="addToCart(${data.id})"><i class="fa-solid fa-cart-shopping"></i></button>
              </div>
          </div>
        </div>
      </div>
          `;
    });
  }

  menu.innerHTML = menulist;
}

// FILTER BY CATEGORY **************************************************************************
function filterProductsByCategory(category) {
  const filteredProducts = products.menulist.filter((product) =>
    product.category.toLowerCase().includes(category.toLowerCase())
  );

  updateProductList(filteredProducts);
}

// PRICE SORTING
function sortProducts(sortOrder) {
  let sortedProducts = [];

  if (sortOrder === "lowToHigh") {
    sortedProducts = products.menulist
      .slice()
      .sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts = products.menulist
      .slice()
      .sort((a, b) => b.price - a.price);
  }

  updateProductList(sortedProducts);
}
