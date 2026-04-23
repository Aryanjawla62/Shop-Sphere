const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>₹${item.price} x ${item.quantity}</p>
      <button class="btn btn--primary">Remove</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      cart = cart.filter(cartItem => cartItem.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });

    cartItemsContainer.appendChild(div);
  });

  cartTotal.innerText = `Total: ₹${total}`;
}

renderCart();
