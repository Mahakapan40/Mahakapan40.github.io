document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Example data; replace with data from your database
    const products = [
        {
            id: 1,
            name: 'Futuristic Gadget',
            description: 'A high-tech gadget from the future.',
            price: '$299.99',
            imageUrl: 'gadget.jpg'
        },
        {
            id: 2,
            name: 'Sci-Fi Accessory',
            description: 'An accessory for all sci-fi enthusiasts.',
            price: '$99.99',
            imageUrl: 'accessory.jpg'
        }
        // Add more products as needed
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        
        productList.appendChild(productItem);
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});
