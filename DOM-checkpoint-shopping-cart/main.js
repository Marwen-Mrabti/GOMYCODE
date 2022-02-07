'use strict';

// creat the cart and if there is a product in the local storage put it in the cart else return an empty array
let cart = (JSON.parse(localStorage.getItem('cart')) || []);

// acquire access to the cart section from the DOM
const cartDOM = document.querySelector('.cart');

// acquire access to every "add to the cart" button => array of buttons [btn0, btn1, ..]
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

// the cycle to repeat when the cart is not empty
if (cart.length > 0) {
  // for loop method
  cart.forEach(cartItem => {
    //creat a constant product and assign the cart__item to it
    const product = cartItem;

    insertItemToDOM(product);

    // predefined function to calculate the total price
    countCartTotal();

    // using the add to cart button to gain access to it is parent ( the whole product div )
    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
      const productDOM = addToCartButtonDOM.parentNode;

      // test if the product is added to the cart
      if (productDOM.querySelector('.product__name').innerText === product.name) {

        // predefined function to handle the buttons
        handleActionButtons(addToCartButtonDOM, product);
      }
    });

  });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
  // test if one of the buttons is clicked
  addToCartButtonDOM.addEventListener('click', () => {

    //get access to the entirety  of each product information
    const productDOM = addToCartButtonDOM.parentNode;

    // creat a product object { img , name , price , quantity}
    const product = {
      image: productDOM.querySelector('.product__image').getAttribute('src'),
      name: productDOM.querySelector('.product__name').innerText,
      price: productDOM.querySelector('.product__price').innerText,
      quantity: 1,
    };

    // filter return an array of objects if the condition is true for this object
    const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

    // if the item is not in the cart then insert it
    if (!isInCart) {
      // predefined function that insert an html code of the new cart__item in the cartDOM
      insertItemToDOM(product);
      cart.push(product);
      // predefined function to save the cart into local storage
      saveCart();
      handleActionButtons(addToCartButtonDOM, product);
    }
  });
});

function insertItemToDOM(product) {

  //insert product [{img ||name||price||-||quantity||+||remove||} ..] inside the cart section
  cartDOM.insertAdjacentHTML('beforeend', `
    <div class="cart__item">
      <img class="cart__item__image" src="${product.image}" alt="${product.name}">
      <h3 class="cart__item__name">${product.name}</h3>
      <h3 class="cart__item__price">${product.price}</h3>
      <button class="btn btn--primary btn--small${(product.quantity === 1 ? ' btn--danger' : '')}" data-action="DECREASE_ITEM">&minus;</button>
      <h3 class="cart__item__quantity">${product.quantity}</h3>
      <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
      <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
    </div>
  `);

  // add a footer to the cart
  addCartFooter();
}

function handleActionButtons(addToCartButtonDOM, product) {
  // change the inner text of the add to cart button
  addToCartButtonDOM.innerText = 'In Cart';
  // disable the add to cart button
  addToCartButtonDOM.disabled = true;

  const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');

  cartItemsDOM.forEach(cartItemDOM => {

    if (cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {

      cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
      cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
      cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
    }
  });
}

function increaseItem(product, cartItemDOM) {
  cart.forEach(cartItem => {
    if (cartItem.name === product.name) {
      cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
      cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn--danger');
      saveCart();
    }
  });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
  cart.forEach(cartItem => {
    if (cartItem.name === product.name) {
      if (cartItem.quantity > 1) {
        cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
        saveCart();
      } else {
        removeItem(product, cartItemDOM, addToCartButtonDOM);
      }

      if (cartItem.quantity === 1) {
        cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn--danger');
      }
    }
  });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
  cartItemDOM.classList.add('cart__item--removed');
  setTimeout(() => cartItemDOM.remove(), 250);
  cart = cart.filter(cartItem => cartItem.name !== product.name);
  saveCart();
  addToCartButtonDOM.innerText = 'Add To Cart';
  addToCartButtonDOM.disabled = false;

  if (cart.length < 1) {
    document.querySelector('.cart-footer').remove();
  }
}

function addCartFooter() {
  if (document.querySelector('.cart-footer') === null) {
    cartDOM.insertAdjacentHTML('afterend', `
      <div class="cart-footer">
        <button class="btn btn--danger" data-action="CLEAR_CART">Clear Cart</button>
        <h3 class="total__price"></h3>
        <button class="btn btn--primary" data-action="CHECKOUT">Checkout</button>
      </div>
    `);

    document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
    document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
  }
}

function clearCart() {
  cartDOM.querySelectorAll('.cart__item').forEach(cartItemDOM => {
    cartItemDOM.classList.add('cart__item--removed');
    setTimeout(() => cartItemDOM.remove(), 250);
  });

  cart = [];
  localStorage.removeItem('cart');
  document.querySelector('.cart-footer').remove();

  addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;
  });
}

function countCartTotal() {
  let cartTotal = 0;
  cart.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.price);
  document.querySelector(".total__price").innerText = `amount due : $${cartTotal}`;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  countCartTotal();
}

const likeButtons = document.querySelectorAll('.btn-like')

likeButtons.forEach(button => button.addEventListener('click', () => {
  button.classList.toggle("like");
}));