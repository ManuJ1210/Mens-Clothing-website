document.addEventListener('DOMContentLoaded', displayOrderDetails);

function displayOrderDetails() {
    const orderDetailsDiv = document.getElementById('orderDetails');
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));

    if (currentOrder) {
        const { orderID, address, status, cartItems } = currentOrder;

        let itemsHtml = '';
        cartItems.forEach(item => {
            itemsHtml += `
                <tr>
                    <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                </tr>
            `;
        });

        orderDetailsDiv.innerHTML = `
            <p><strong>Order ID:</strong> ${orderID}</p>
            <p><strong>Shipping Address:</strong> ${address}</p>
            <p><strong>Status:</strong> ${status}</p>
            <h3>Products Ordered:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>
        `;
    } else {
        orderDetailsDiv.innerHTML = '<p>No order details available.</p>';
    }
}

function backToHome() {
    window.location.href = 'index.php'; // Change this to the home page of your website
}
