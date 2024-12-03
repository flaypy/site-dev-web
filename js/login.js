document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        if (email === "nome-do-aluno1@fatec.com" && password === "nome-do-aluno2") {
            alert("Login bem-sucedido!");
            window.location.href = "products.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});
