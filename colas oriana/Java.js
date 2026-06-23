let cart = [];

function buy(product){
    cart.push(product);

    updateCart();

    let popup = document.getElementById("popup");
    popup.innerText = "🎀 Agregado: " + product;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function updateCart(){

    let container = document.getElementById("cartItems");

    if(cart.length === 0){
        container.innerHTML = "<p>Tu carrito está vacío</p>";
        return;
    }

    let count = {};

    cart.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    let html = "";

    for(let item in count){
        html += `🎀 ${item} x${count[item]}<br>`;
    }

    container.innerHTML = html;
}

function toggleCart(){
    document.getElementById("cartPanel").classList.toggle("active");
}

function sendCartToWhatsApp(){

    if(cart.length === 0){
        alert("Tu carrito está vacío");
        return;
    }

    let message = "🛍️ Pedido de Moños:%0A%0A";

    let count = {};

    cart.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    for(let item in count){
        message += "• " + item + " x" + count[item] + "%0A";
    }

    let phone = "+16308194415";

    let url = "https://wa.me/" + phone + "?text=" + message;

    window.open(url, "_blank");

    cart = [];
    updateCart();
}