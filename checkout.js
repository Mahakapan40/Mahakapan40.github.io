document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const paymentMethod = form['payment-method'].value;

        // Normally, here you would send data to the server and handle the payment process
        alert(`Thank you for your purchase, ${name}!`);

        // Clear cart
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // Redirect to home page
    });
});
