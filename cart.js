let cart = [];
let total = 0;


document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    updateCart();
    updateCartCount(); 
});


function goToCart() {
    window.location.href = 'cart.html'; 
}


function addToCart(name, price, imgSrc) {
    cart.push({ name, price, imgSrc });
    total += price;
    saveCartToStorage();
    updateCartCount(); 
    showNotification(' წარმატებით დაემატა კალათში!');
}


function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    notification.style.opacity = '1'; 
    setTimeout(() => {
        notification.style.opacity = '0'; 
        setTimeout(() => {
            notification.style.display = 'none'; 
        }, 500);
    }, 3000); 
}


function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length; 
}


function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
    saveCartToStorage();
}


function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <span>${item.name} - ${item.price}₾</span>
            <button onclick="removeFromCart(${index})">წაშლა</button>
        `;
        cartItems.appendChild(li);
    });
    document.getElementById('total').innerText = total;
}


function clearCart() {
    cart = [];
    total = 0;
    updateCart();
    saveCartToStorage();
    updateCartCount(); 
}


function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toString());
}


function loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    if (storedTotal) {
        total = parseFloat(storedTotal);
    }
    updateCart();
    updateCartCount(); 
}


function checkout() {
    alert('შეკვვეთის გასაკეთებლად გაიარეთ რეგისტრაცია.');
    
}