document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Produto A", price: 50 },
        { id: 2, name: "Produto B", price: 100 },
        { id: 3, name: "Produto C", price: 150 },
    ];
    
    const productList = document.getElementById("product-list");
    const cart = [];

    const updateLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateLocalStorage();
        alert(`${product.name} foi adicionado ao carrinho.`);
    };

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            if (product) addToCart(product);
        }
    });

    document.getElementById("logout").addEventListener("click", () => {
        alert("Você foi deslogado.");
        window.location.href = "../index.html";
    });
});
