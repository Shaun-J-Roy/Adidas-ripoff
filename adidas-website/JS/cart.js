// Cart functionality

// Cart state
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// DOM Elements
const cartCountElements = document.querySelectorAll('#cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmptyMessage = document.getElementById('cart-empty');
const cartSummary = document.getElementById('cart-summary');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-btn');

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('adidas-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartCount();
            updateCartDisplay();
        } catch (error) {
            console.error('Failed to parse cart from localStorage:', error);
            cart = [];
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('adidas-cart', JSON.stringify(cart));
}

// Update cart count display
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCountElements) {
        cartCountElements.forEach(element => {
            element.textContent = cartCount;
        });
    }
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCart();
    
    // Show confirmation message
    showAddToCartConfirmation(product.name);
}

// Show add to cart confirmation
function showAddToCartConfirmation(productName) {
    const confirmation = document.createElement('div');
    confirmation.className = 'cart-confirmation';
    confirmation.innerHTML = `
        <div class="cart-confirmation-content">
            <p><strong>${productName}</strong> added to cart!</p>
            <a href="cart.html" class="btn btn-dark btn-sm">View Cart</a>
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    // Style the confirmation
    Object.assign(confirmation.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: 'var(--border-radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '1000',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: 'translateY(100%)',
        opacity: '0'
    });
    
    // Show the confirmation
    setTimeout(() => {
        confirmation.style.transform = 'translateY(0)';
        confirmation.style.opacity = '1';
    }, 10);
    
    // Hide and remove the confirmation after 3 seconds
    setTimeout(() => {
        confirmation.style.transform = 'translateY(100%)';
        confirmation.style.opacity = '0';
        
        setTimeout(() => {
            document.body.removeChild(confirmation);
        }, 300);
    }, 3000);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    saveCart();
}

// Update item quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartCount();
            updateCartDisplay();
            saveCart();
        }
    }
}

// Update cart display on cart page
function updateCartDisplay() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    
    // Calculate cart total
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update cart items display
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image || 'https://via.placeholder.com/100'}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-description">${item.description || ''}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Update cart totals
    if (cartSubtotalElement) cartSubtotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    if (cartTotalElement) cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Checkout function
function checkout() {
    if (!cart.length) return;
    
    alert('Checkout functionality would be implemented in a real application.');
    // In a real app, you would redirect to a checkout page or open a checkout modal
}

// Add event listeners
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', initCart);

// Export functions for use in other scripts
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;