// Tony - JavaScript Developer  

function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

document.getElementById('shopping-link').addEventListener('click', function(event) {
    if (!checkLoginStatus()) {
        event.preventDefault(); 
        alert('Please log in first.');
        window.location.href = 'login.html'; 
    }
});
function logoutUser() {
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    alert('You have been logged out.');
    window.location.href = 'index.html';
}
//Logout button
document.getElementById('logout-button').addEventListener('click', logoutUser);

window.onload = function() {
//Check if the referrer is empty or does not contain the current site URL
    if (!document.referrer || !document.referrer.includes(window.location.hostname)) {
        localStorage.setItem('isLoggedIn', 'false');
    }
};

//Simulate user data
let users = [];

//Simulated checkout function
function checkout() {  
    alert('You have successfully checked out!');  
}

//Shopping cart function
let cart = [];

function CartItem(productName, price, quantity) {  
    this.productName = productName;  
    this.price = price;  
    this.quantity = quantity;  
}

function addToCart(price, productName, quantityId) {    
    let quantity = parseInt(document.getElementById(quantityId).value, 10);  
    if (isNaN(quantity) || quantity <= 0) {  
        alert('Please enter a valid quantity.');  
        return;  
    }  

    let existingItem = cart.find(item => item.productName === productName);  
    if (existingItem) {  
        existingItem.quantity += quantity;  
    } else {  
        let item = new CartItem(productName, price, quantity);  
        cart.push(item);  
    }  

    displayCart();  
    updateCartTotal();  
}

function displayCart() {  
    let cartItemsList = document.getElementById('cart-items');  
    cartItemsList.innerHTML = ''; 

    cart.forEach(item => {  
        let listItem = document.createElement('div');  
        listItem.textContent = `${item.quantity} x ${item.productName} - ${item.price * item.quantity}`;  
        cartItemsList.appendChild(listItem);  
    });  
}

function updateCartTotal() {  
    let total = 0;  
    cart.forEach(item => {  
        total += item.price * item.quantity;  
    });  
    document.getElementById('cart-total').textContent = total.toFixed(2);  
}

function clearCart() {  
    document.getElementById("quantity1").value = 0;
    document.getElementById("quantity2").value = 0;
    document.getElementById("quantity3").value = 0;
    document.getElementById("quantity4").value = 0;
    document.getElementById("quantity5").value = 0;
    cart = [];  
    alert('The shopping cart has been cleared!');  
    displayCart();  
    updateCartTotal();  
}

function checkoutCart() {  
    cart = [];  
    alert('Settled, please make payment');  
    displayCart();  
    updateCartTotal();  
}

//Simulated registration function
function registerUser() {  
    var username = document.getElementById('register-username').value;  
    var password = document.getElementById('register-password').value;  

    if (!username || !password) {  
        alert('Please fill in both username and password.');  
        return;  
    }  

    localStorage.setItem('username', username);  
    localStorage.setItem('password', password);  

    alert('Registration successful!');  
    window.location.href = 'login.html';
}

document.getElementById('register-button').addEventListener('click', registerUser);

//Simulated login function
function loginUser() {  
    var inputUsername = document.getElementById('login-username').value;  
    var inputPassword = document.getElementById('login-password').value;  

    var storedUsername = localStorage.getItem('username');  
    var storedPassword = localStorage.getItem('password');  

    if (inputUsername === storedUsername && inputPassword === storedPassword) {  
        alert('Login successful!');  
        localStorage.setItem('isLoggedIn', 'true'); //Set login status
        window.location.href = 'shopping.html';
    } else {  
        alert('Invalid username or password.'); 
        window.location.href = 'register.html';
    }  
}

document.getElementById('login-button').addEventListener('click', loginUser);

//Simulate login function
function logoutUser() {
    localStorage.removeItem('isLoggedIn'); //Remove login status
    alert('You have been logged out.');
    window.location.href = 'login.html';
}

//Add click event listeners to the "Shopping" link
document.getElementById('shopping-link').addEventListener('click', function(event) {
    if (!checkLoginStatus()) {
        event.preventDefault(); //Block default behavior
        alert('Please login first.');
        window.location.href = 'login.html';
    }
});
