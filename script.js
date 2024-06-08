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
// 登出按钮
document.getElementById('logout-button').addEventListener('click', logoutUser);

window.onload = function() {
    if (!document.referrer || !document.referrer.includes(window.location.hostname)) {
        logoutUser();  // 直接调用登出函数
    }
};


// 模拟用户数据
let users = [];

// 模拟结账功能
function checkout() {  
    alert('You have successfully checked out!');  
}

// 购物车功能
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

// 模拟注册功能
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

// 模拟登录功能
function loginUser() {  
    var inputUsername = document.getElementById('login-username').value;  
    var inputPassword = document.getElementById('login-password').value;  

    var storedUsername = localStorage.getItem('username');  
    var storedPassword = localStorage.getItem('password');  

    if (inputUsername === storedUsername && inputPassword === storedPassword) {  
        alert('Login successful!');  
        localStorage.setItem('isLoggedIn', 'true'); // 设置登录状态
        window.location.href = 'shopping.html';
    } else {  
        alert('Invalid username or password.'); 
        window.location.href = 'register.html';
    }  
}

document.getElementById('login-button').addEventListener('click', loginUser);

// 模拟登出功能
function logoutUser() {
    localStorage.removeItem('isLoggedIn'); // 移除登录状态
    localStorage.removeItem('username');   // 可选：清除其他用户信息
    localStorage.removeItem('password');
    window.location.href = 'login.html';  // 直接重定向到登录页面
}



// 添加点击事件监听器到“Shopping”链接
document.getElementById('shopping-link').addEventListener('click', function(event) {
    if (!checkLoginStatus()) {
        event.preventDefault(); // 阻止默认行为（导航）
        alert('Please log in first.');
        window.location.href = 'login.html';
    }
});
