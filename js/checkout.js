document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("checkout-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Pedido Recebido! Obrigado por comprar conosco.");
        window.location.href = "products.html";
    });
});
