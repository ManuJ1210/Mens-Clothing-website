document.addEventListener('DOMContentLoaded', displayOrders);

function displayOrders() {
    const ordersDiv = document.getElementById('orders');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length > 0) {
        let ordersHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Delivery Date</th>
                        <th>Payment Confirmed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        orders.forEach(order => {
            ordersHtml += `
                <tr>
                    <td>${order.orderID}</td>
                    <td>${order.cartItems.map(item => item.name).join(', ')}</td>
                    <td>${order.cartItems.map(item => item.quantity).join(', ')}</td>
                    <td>${order.address}</td>
                    <td>${order.status}</td>
                    <td>${order.deliveryDate || 'Not Set'}</td>
                    <td>${order.paymentConfirmed ? 'Yes' : 'No'}</td>
                    <td class="actions">
                        <button onclick="confirmOrder(${order.orderID})">Confirm Order</button>
                        <button onclick="setDeliveryDate(${order.orderID})">Set Delivery Date</button>
                        <button onclick="confirmPayment(${order.orderID})">Confirm Payment</button>
                        <button onclick="removeOrder(${order.orderID})">Remove</button>
                    </td>
                </tr>
            `;
        });

        ordersHtml += `
                </tbody>
            </table>
        `;
        ordersDiv.innerHTML = ordersHtml;
    } else {
        ordersDiv.innerHTML = '<p>No orders available.</p>';
    }
}

function confirmOrder(orderID) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(order => order.orderID === orderID);
    if (order) {
        order.status = 'Confirmed';
        localStorage.setItem('orders', JSON.stringify(orders));
        displayOrders();
    }
}

function setDeliveryDate(orderID) {
    const deliveryDate = prompt('Enter delivery date (YYYY-MM-DD):');
    if (deliveryDate) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(order => order.orderID === orderID);
        if (order) {
            order.deliveryDate = deliveryDate;
            localStorage.setItem('orders', JSON.stringify(orders));
            displayOrders();
        }
    }
}

function confirmPayment(orderID) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(order => order.orderID === orderID);
    if (order) {
        order.paymentConfirmed = true;
        localStorage.setItem('orders', JSON.stringify(orders));
        displayOrders();
    }
}

function removeOrder(orderID) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.orderID !== orderID);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}


function confirmOrder(orderID) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(order => order.orderID === orderID);
    if (order) {
        order.status = 'Confirmed';
        localStorage.setItem('orders', JSON.stringify(orders));
        displayOrders();

        // Send confirmation email to the customer
        sendConfirmationEmail(order);
    }
}

function sendConfirmationEmail(order) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send-email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Email sent successfully.');
        }
    };
    xhr.send(JSON.stringify(order));
}

document.addEventListener('DOMContentLoaded', () => {
    // Your existing code ...

    function confirmOrder(orderId) {
        const order = getOrderDetailsById(orderId); // Retrieve order details based on orderId
        order.deliveryDate = calculateDeliveryDate(); // Set the delivery date
        order.email = getCustomerEmail(orderId); // Get customer email

        // Update order status in the UI or backend
        // ...

        // Send confirmation email
        sendConfirmationEmail(order);
    }

    // Event listener for order confirmation button
    document.querySelectorAll('.confirm-order-button').forEach(button => {
        button.addEventListener('click', () => {
            const orderId = button.getAttribute('data-order-id');
            confirmOrder(orderId);
        });
    });
});

function getOrderDetailsById(orderId) {
    // Logic to retrieve order details based on orderId
    // This is a placeholder function and should be replaced with actual logic
    return {
        orderId: orderId,
        customerName: 'John Doe',
        totalAmount: 500,
        items: [
            { name: 'Product 1', quantity: 1, price: 300 },
            { name: 'Product 2', quantity: 2, price: 100 }
        ]
    };
}

function calculateDeliveryDate() {
    // Logic to calculate the delivery date
    // This is a placeholder function and should be replaced with actual logic
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 5); // Example: delivery date is 5 days from today
    return deliveryDate.toISOString().split('T')[0];
}

function getCustomerEmail(orderId) {
    // Logic to get customer email based on orderId
    // This is a placeholder function and should be replaced with actual logic
    return 'manuu107377.l@gamil.com';
}

document.addEventListener('DOMContentLoaded', () => {
    // Static Data
    const salesData = [
        { month: 'January', sales: 1500 },
        { month: 'February', sales: 2000 },
        { month: 'March', sales: 1700 },
        { month: 'April', sales: 2200 },
        { month: 'May', sales: 1800 },
        { month: 'June', sales: 1900 }
    ];

    const profitData = [
        { month: 'January', profit: 500 },
        { month: 'February', profit: 800 },
        { month: 'March', profit: 600 },
        { month: 'April', profit: 900 },
        { month: 'May', profit: 700 },
        { month: 'June', profit: 750 }
    ];

    const salesLabels = salesData.map(item => item.month);
    const salesValues = salesData.map(item => item.sales);

    const profitLabels = profitData.map(item => item.month);
    const profitValues = profitData.map(item => item.profit);

    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const profitCtx = document.getElementById('profitChart').getContext('2d');

    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: salesLabels,
            datasets: [{
                label: 'Sales',
                data: salesValues,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(profitCtx, {
        type: 'bar',
        data: {
            labels: profitLabels,
            datasets: [{
                label: 'Profit',
                data: profitValues,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/dashboard-data') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            const salesData = data.sales;  // Ensure this matches the API response format
            const profitData = data.profit; // Ensure this matches the API response format

            const salesLabels = salesData.map(item => item.month);
            const salesValues = salesData.map(item => item.sales);

            const profitLabels = profitData.map(item => item.month);
            const profitValues = profitData.map(item => item.profit);

            const salesCtx = document.getElementById('salesChart').getContext('2d');
            const profitCtx = document.getElementById('profitChart').getContext('2d');

            new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: salesLabels,
                    datasets: [{
                        label: 'Sales',
                        data: salesValues,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            new Chart(profitCtx, {
                type: 'bar',
                data: {
                    labels: profitLabels,
                    datasets: [{
                        label: 'Profit',
                        data: profitValues,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
