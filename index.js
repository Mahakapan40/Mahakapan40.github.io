document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
});
