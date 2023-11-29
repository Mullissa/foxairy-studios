let cartCount = 0;
let items = [
    { id: 'itemId1', name: 'Kawaii Pastels', image: './images/kawaii.jpg', price: '$2' },
    { id: 'itemId2', name: 'Bee Sweet', image: './images/bee.jpg', price: '$2' },
    { id: 'itemId3', name: 'Unicorn Pastels', image: './images/unicorn.jpg', price: '$2' },
];

function addToCart(itemId) {
    console.log(itemId);
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'cart.html';
}

window.onload = function () {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartDiv = document.getElementById('cart');
    let totalPrice = 0;


    cartItems.forEach(itemId => {
        var item = items.find(item => item.id === itemId);
        if (item) {
            totalPrice += parseFloat(item.price.substring(1));
        }
    });

    cartItems.forEach(itemId => {
        var item = items.find(item => item.id === itemId);
        if (item) {
            var itemElement = document.createElement('div');

            var itemNameElement = document.createElement('img');
            itemNameElement.src = item.image;
            itemElement.appendChild(itemNameElement);


            var itemNameElement = document.createElement('p');
            itemNameElement.textContent = item.name;
            itemElement.appendChild(itemNameElement);


            var itemPriceElement = document.createElement('p');
            itemPriceElement.textContent = item.price;
            itemElement.appendChild(itemPriceElement);


            cartDiv.appendChild(itemElement);


            totalPrice += parseFloat(item.price.substring(1));
        }
    });


    var totalPriceElement = document.createElement('p');
    totalPriceElement.textContent = 'Total: $' + totalPrice.toFixed(2);
    cartDiv.appendChild(totalPriceElement);
}

function clearCart() {
    localStorage.removeItem('cartItems');
    let cartDiv = document.getElementById('cart');
    while (cartDiv.firstChild) {
        cartDiv.removeChild(cartDiv.firstChild);
    }
}