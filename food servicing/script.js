// Example products data (this would typically come from a server/API)
const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
    // Add more products as needed
];

// Function to display products on the page
function displayProducts() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Function to add a product to cart (dummy function for demonstration)
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart`);
}

// Display products when the page loads
window.onload = function() {
    displayProducts();
}

