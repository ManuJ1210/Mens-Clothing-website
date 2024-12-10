// script.js

// Function to add a product to the cart
function addToCart(product) {
    // Retrieve the current cart from local storage or initialize it if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
        // If it exists, update the quantity
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        // If it doesn't exist, add it to the cart with the specified quantity
        cart.push(product);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    alert(`${product.name} has been added to the cart.`);
}

// Function to display the cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: Rs. ${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        cartContainer.appendChild(productElement);
    });
}

// Ensure to call displayCart on the cart page to show the cart items
if (document.getElementById('cart-container')) {
    displayCart();
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
