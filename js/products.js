const productList = document.getElementById("productList");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-card__image">
    <h3 class="product-card__title">${product.name}</h3>
    <p class="product-card__price">₹${product.price}</p>
    <button class="btn btn--primary">Add to Cart</button>
  `;

  productCard
    .querySelector("button")
    .addEventListener("click", () => addToCart(product));

  productList.appendChild(productCard);
});
