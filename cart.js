document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const itemRow = document.createElement('tr');

      const itemImageCell = document.createElement('td');
      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImage.style.width = '50px';
      itemImageCell.appendChild(itemImage);

      const itemNameCell = document.createElement('td');
      itemNameCell.textContent = item.name;

      const itemSizeCell = document.createElement('td');
      itemSizeCell.textContent = item.size;

      const itemPriceCell = document.createElement('td');
      itemPriceCell.textContent = `₹${item.price}`;

      const itemQuantityCell = document.createElement('td');
      const itemQuantityInput = document.createElement('input');
      itemQuantityInput.type = 'number';
      itemQuantityInput.value = item.quantity;
      itemQuantityInput.min = 1;
      itemQuantityInput.addEventListener('change', (e) => {
        item.quantity = parseInt(e.target.value, 10);
        saveCart();
        updateCartUI();
      });
      itemQuantityCell.appendChild(itemQuantityInput);

      const itemSubtotalCell = document.createElement('td');
      const subtotal = item.price * item.quantity;
      itemSubtotalCell.textContent = `₹${subtotal}`;
      total += subtotal;

      const itemActionCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
      });
      itemActionCell.appendChild(removeButton);

      itemRow.appendChild(itemImageCell);
      itemRow.appendChild(itemNameCell);
      itemRow.appendChild(itemSizeCell);
      itemRow.appendChild(itemPriceCell);
      itemRow.appendChild(itemQuantityCell);
      itemRow.appendChild(itemSubtotalCell);
      itemRow.appendChild(itemActionCell);

      cartItemsContainer.appendChild(itemRow);
    });

    cartTotalElement.textContent = `₹${total}`;
  }

  function showCartMessage(message) {
    const cartMessage = document.getElementById('cart-message');
    cartMessage.textContent = message;
    cartMessage.classList.add('show');
    setTimeout(() => {
      cartMessage.classList.remove('show');
    }, 2000);
  }

  function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.size === product.size);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += product.quantity;
    } else {
      cart.push(product);
    }
    saveCart();
    updateCartUI();
    showCartMessage('Added to cart successfully!');
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        id: button.getAttribute('data-product-id'),
        name: button.getAttribute('data-product-name'),
        price: parseInt(button.getAttribute('data-product-price'), 10),
        size: button.previousElementSibling.previousElementSibling.value,
        quantity: parseInt(button.previousElementSibling.value, 10),
        image: button.getAttribute('data-product-image'),
      };
      addToCart(product);
    });
  });

  updateCartUI();
});
