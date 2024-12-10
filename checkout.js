document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderOrderDetails = () => {
        const orderDetailsTable = document.getElementById('order-details');
        orderDetailsTable.innerHTML = '';
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
                <td>${item.name}</td>
                <td>Rs. ${item.price}</td>
                <td>${item.quantity}</td>
                <td>Rs. ${item.price * item.quantity}</td>
            `;
            orderDetailsTable.appendChild(row);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        document.getElementById('order-total').innerText = `Rs.${total}`;
    };

    document.querySelectorAll('input[name="payment"]').forEach(input => {
        input.addEventListener('change', () => {
            document.querySelectorAll('.card-details').forEach(div => {
                div.style.display = 'none';
            });
            if (input.checked && (input.value === 'Credit Card' || input.value === 'Debit Card')) {
                document.getElementById(`${input.value.toLowerCase().replace(' ', '-')}-details`).style.display = 'block';
            }
        });
    });

    window.placeOrder = () => {
        const addressForm = document.getElementById('address-form');
        if (!addressForm.checkValidity()) {
            alert('Please fill in all address details.');
            return;
        }

        const paymentForm = document.getElementById('payment-form');
        if (!paymentForm.checkValidity()) {
            alert('Please select a payment method.');
            return;
        }

        alert('Order placed successfully!');
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const currentOrder = {
            orderID: Math.floor(Math.random() * 1000000), // Generate a random order ID
            cartItems: cart, // Store the cart items
            address: `${addressForm.fullname.value}, ${addressForm.phone.value}, ${addressForm.address.value}, ${addressForm.city.value}, ${addressForm.state.value}, ${addressForm.zip.value}`,
            status: 'Pending',
            deliveryDate: null,
            paymentConfirmed: false
        };
        orders.push(currentOrder);
        localStorage.setItem('orders', JSON.stringify(orders));

        localStorage.removeItem('cart');
        localStorage.setItem('currentOrder', JSON.stringify(currentOrder));

        window.location.href = 'thankyou.html'; // Redirect to order-details.html
    };

    renderOrderDetails();


    function placeOrder() {
        const fullname = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
    
        const orders = [
            // This should be dynamically populated with the actual order data
            { product_name: 'Product 1', quantity: 2, price: 299.99 },
            { product_name: 'Product 2', quantity: 1, price: 399.99 }
        ];
    
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname, phone, address, city, state, zip, orders })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Order placed successfully!');
        })
        .catch(error => console.error('Error:', error));
    }
    
});
