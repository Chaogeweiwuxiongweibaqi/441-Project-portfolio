// Tony - JavaScript Developer  

//Comment 1: Declare some simulated user data 
let users = [];   


//Note 2: Simulate checkout function (only displaying a warning here)
function checkout() {  
    alert('You have successfully checkout!');  
}  

//Note 3: Notify quantity
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
        listItem.textContent = `${item.quantity} x ${item.productName} - 
${item.price * item.quantity}`;  
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
  
displayCart();  
updateCartTotal();  

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

//Comment 4: Simulate registering user function
function registerUser() {  
    // Get input values  
    var username = document.getElementById('register-username').value;  
    var password = document.getElementById('register-password').value;  
  
    // Simple validation  
    if (!username || !password) {  
        alert('Please fill in both username and password.');  
        return;  
    }  
  
    // Store user data in localStorage (not secure!)  
    localStorage.setItem('username', username);  
    // Note: Storing passwords in localStorage is not secure. Use hashed passwords in a real-world scenario.  
    localStorage.setItem('password', password);  
  
    alert('Registration successful!');  
    window.location.href = 'login.html';
}  
  
// Call the function when the register button is clicked  
document.getElementById('register-button').addEventListener('click', registerUser);
  
//Comment 5: Simulate login user function
function loginUser() {  
    // Get input values  
    var inputUsername = document.getElementById('login-username').value;  
    var inputPassword = document.getElementById('login-password').value;  
  
    // Get stored user data from localStorage  
    var storedUsername = localStorage.getItem('username');  
    var storedPassword = localStorage.getItem('password');  
  
    // Compare input values with stored values  
    if (inputUsername === storedUsername && inputPassword === storedPassword) {  
        alert('Login successful!');  
        window.location.href = 'shopping.html';
    } else {  
        alert('Invalid username or password.'); 
        window.location.href = 'register.html';
    }  
}  
  
// Call the function when the login button is clicked  
document.getElementById('login-button').addEventListener('click', loginUser);
