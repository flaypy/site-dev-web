document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const updateCartDisplay = () => {
        cartContainer.innerHTML = "";
        let total = 0;
        cartItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <span>${item.name} - R$${item.price} x ${item.quantity}</span>
                <button class="increase" data-id="${item.id}">+</button>
                <button class="decrease" data-id="${item.id}">-</button>
                <button class="remove" data-id="${item.id}">Remover</button>
            `;
            cartContainer.appendChild(div);
            total += item.price * item.quantity;
        });
        totalElement.textContent = total.toFixed(2);
    };

    const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    cartContainer.addEventListener("click", (event) => {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const product = cartItems.find(item => item.id === productId);
        if (!product) return;

        if (event.target.classList.contains("increase")) {
            product.quantity += 1;
        } else if (event.target.classList.contains("decrease")) {
            product.quantity -= 1;
            if (product.quantity === 0) {
                cartItems.splice(cartItems.indexOf(product), 1);
            }
        } else if (event.target.classList.contains("remove")) {
            cartItems.splice(cartItems.indexOf(product), 1);
        }
        saveCart();
        updateCartDisplay();
    });

    document.getElementById("checkout").addEventListener("click", () => {
        if (cartItems.length === 0) {
            alert("O carrinho está vazio.");
        } else {
            window.location.href = "checkout.html";
        }
    });

    document.getElementById("logout").addEventListener("click", () => {
        alert("Você foi deslogado.");
        window.location.href = "../index.html";
    });

    updateCartDisplay();
});
